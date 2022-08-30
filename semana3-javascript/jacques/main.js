const URL = "https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json";

fetch(URL).then(result => result.json()).then(events => {
  const correlations = [];
  journalEvents(events).forEach(event => {
    const correlation = phi(tableFor(event, events));   
    correlations.push({event, correlation}); 
  });
  console.log("Final result: ", correlations.sort((a, b) => b.correlation - a.correlation ));
});
  
function journalEvents(journal) {
  const events = [];
  journal.forEach(entry => {
    entry.events.forEach(event => {
      if(!events.includes(event))
        events.push(event);
    })
  });
  return events;
}

function tableFor(event, journal) {
  const table = [0, 0, 0, 0];
  journal.forEach(entry => {
    let index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  });
  return table;
}

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
  Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}
