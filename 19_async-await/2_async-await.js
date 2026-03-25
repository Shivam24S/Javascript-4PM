let order = ["samosa", "pizza"];

const FoodOrder = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (order.length > 0) {
      resolve();

      console.log("order placed");
    } else {
      reject("please add some food dish to proceed order");
    }
  }, 3000);
});

const orderReceived = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
    console.log("order received");
  }, 2000);
});

const orderStatus = new Promise((resolve, reject) => {
  const material = true;

  setTimeout(() => {
    if (material) {
      resolve();
      console.log("ordered prepared");
    } else {
      reject("order rejected");
      console.log("order rejected");
    }
  }, 3000);
});

const isOrderPrepared = new Promise((resolve) => {
  setTimeout(() => {
    if (order) {
      resolve();
      console.log("order prepared");
    }
  }, 5000);
});

async function foodDeliveryProcess() {
  await FoodOrder;

  await orderReceived;

  await isOrderPrepared;

  if (isOrderPrepared) {
    console.log("order placed successfully", isPrepared);
  }
}

foodDeliveryProcess();
