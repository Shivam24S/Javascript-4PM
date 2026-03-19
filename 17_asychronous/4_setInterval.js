// const stop = setInterval(() => {
//   console.log("hello");
// }, 1000);

// setTimeout(() => {
//   clearInterval(stop);
// }, 10000);

setInterval(() => {
  let time = new Date().toLocaleTimeString();

  console.log("time-", time);
}, 1000);

// function currentTime() {
//   let time = new Date().toLocaleTimeString();

//   console.log("time-", time);
// }

// setInterval(currentTime, 1000);

// third method

// const currentTime = () => {
//   let time = new Date().toLocaleTimeString();

//   console.log("time-", time);
// };

// setInterval(currentTime, 1000);
