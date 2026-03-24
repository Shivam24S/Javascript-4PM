// promise chaining in which we are chaining asynchronous operation each after other ,
// it guaranteed that asynchronous program will execute only after before their asynchronous operation complete

// producing code

const FoodOrder = new Promise((resolve, reject) => {
  let order = ["samosa", "pizza"];

  setTimeout(() => {
    if (order.length > 0) {
      resolve(order);

      console.log("order placed");
    } else {
      reject("please add some food dish to proceed order");
    }
  }, 3000);
});

// consuming code

FoodOrder.then((order) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(order);
      console.log("order received");
    }, 2000);
  });
})
  .then((order) => {
    return new Promise((resolve, reject) => {
      const material = false;

      setTimeout(() => {
        if (material) {
          resolve(order);
          console.log("ordered prepared");
        } else {
          reject("order rejected");
          console.log("order rejected");
        }
      }, 3000);
    });
  })
  .then((order) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (order) {
          resolve(order);
          console.log("order prepared");
        }
      }, 5000);
    });
  })
  .then((order) => {
    setTimeout(() => {
      console.log("order delivered", order);
    }, 5000);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("do you want to explore more ");
  });
