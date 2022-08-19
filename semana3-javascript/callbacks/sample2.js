function asyncFunction(callback) {
  setTimeout(() => {
    const result = "end of complex process";
    callback(result);
  }, Math.random() * 1000);
}

asyncFunction((data) => {
  console.log(`Result: ${data}`);
});
