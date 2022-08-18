const promise1 = new Promise((resolve, reject) => {
  if (true) resolve("Success in promise 1");
  else reject("Error in promise 1");
});

const promise2 = new Promise((resolve, reject) => {
  if (true) resolve("Success in promise 2");
  else reject("Error in promise 2");
});

const promise3 = new Promise((resolve, reject) => {
  if (true) resolve("Success in promise 3");
  else reject("Error in promise 3");
});

const promise4 = new Promise((resolve, reject) => {
  if (true) resolve("Success in promise 4");
  else reject("Error in promise 4");
});

promise1.then((data) => {
  console.log("Promise value: ", data);
  promise2.then((data) => {
    console.log("Promise value: ", data);
    promise3.then((data) => {
      console.log("Promise value: ", data);
      promise4.then((data) => {
        console.log("Promise value: ", data);
      });
    });
  });
});
