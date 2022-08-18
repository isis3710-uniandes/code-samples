const promise = new Promise((resolve, reject) => {
  if (true) resolve("Success");
  else reject("Error");
});

promise.then((data) => {
  console.log("Promise value: ", data);
});
