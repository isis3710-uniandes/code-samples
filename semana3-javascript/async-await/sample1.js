const promise = new Promise((resolve, reject) => {
  if (true) resolve("Success");
  else reject("Error");
});

async function getPromise() {
  const result = await promise;
  console.log("Promise result: ", result);
}

getPromise();
