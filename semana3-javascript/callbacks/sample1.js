function asyncFunction() {
  setTimeout(() => {
    const result = "end of complex process";
    console.log(`Result: ${result}`);
  }, Math.random() * 1000);
}

asyncFunction();
