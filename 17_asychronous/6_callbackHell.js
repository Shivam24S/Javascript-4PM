const payment = (amount, callback) => {
  setTimeout(() => {
    if (amount <= 0) {
      return callback("please enter valid amount");
    } else {
      console.log(`payment initialized ₹${amount}`);
      callback(null, amount);
    }
  }, 2000);
};

let balance = 5000;

const checkBalance = (amount, callback) => {
  setTimeout(() => {
    if (balance <= 0) {
      return callback("insufficient balance");
    } else {
      console.log(`available balance ${balance}`);
      callback(null, amount);
    }
  }, 2000);
};

const paymentProcess = (amount, callback) => {
  setTimeout(() => {
    if (amount > balance) {
      return callback("insufficient balance");
    } else {
      console.log("payment is processing....");
      callback(null, amount);
    }
  }, 2000);
};

const remainBalance = (amount, callback) => {
  setTimeout(() => {
    let remainBalance = balance - amount;

    console.log(`available balance is ${remainBalance}`);
    callback(null, remainBalance);
  }, 2000);
};

const paymentStatus = (amount, callback) => {
  setTimeout(() => {
    console.log("payment succeeded");
    callback(null, amount);
  }, 4000);
};

payment(2500, (err, amount) => {
  if (err) {
    console.log(err);
  } else {
    checkBalance(amount, (err, amount) => {
      if (err) {
        console.log(err);
      } else {
        paymentProcess(amount, (err, amount) => {
          if (err) {
            console.log(err);
          } else {
            remainBalance(amount, (err, amount) => {
              if (err) {
                console.log(err);
              } else {
                paymentStatus(amount, (err, amount) => {
                  if (err) {
                    console.log(err);
                  } else {
                    console.log(`${amount} transaction completed`);
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
