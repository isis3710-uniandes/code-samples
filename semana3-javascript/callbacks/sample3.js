const asyncFunction = (callback, i) => {
  setTimeout(() => {
    callback(`Evaluating ${i}`);
  }, Math.random() * 2000);
};

asyncFunction((data) => {
  console.log(data);
  asyncFunction((data) => {
    console.log(data);
    asyncFunction((data) => {
      console.log(data);
      asyncFunction((data) => {
        console.log(data);
        asyncFunction((data) => {
          console.log(data);
          asyncFunction((data) => {
            console.log(data);
            asyncFunction((data) => {
              console.log(data);
              asyncFunction((data) => {
                console.log(data);
                asyncFunction((data) => {
                  console.log(data);
                  asyncFunction((data) => {
                    console.log(data);
                  }, 9);
                }, 8);
              }, 7);
            }, 6);
          }, 5);
        }, 4);
      }, 3);
    }, 2);
  }, 1);
}, 0);
