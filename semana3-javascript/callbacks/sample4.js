const asyncFunction = (callback, i) => {
  setTimeout(() => {
    callback(`Evaluating ${i}`);
  }, Math.random() * 2000);
};

for (let i = 0; i < 10; i++) {
  asyncFunction((data) => {
    console.log(data);
  }, i);
}
