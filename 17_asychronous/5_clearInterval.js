const stop = setInterval(() => {
  let time = new Date().toLocaleTimeString();

  console.log("time-", time);
}, 1000);

setTimeout(() => {
  clearInterval(stop);
}, 5000);
