// function play() {
//   setTimeout(function play() {
//     console.log("play");
//   },1000);

//   console.log("i am running");

// }

// play();

// function play() {
//   setTimeout(function play() {
//     console.log("play");
//   }, 1000);

//   console.log("i am running");

//   // Blocking code (takes ~5+ seconds depending on system)
//   const start = Date.now();
//   while (Date.now() - start < 5000) {
//     // Busy wait for 5 seconds
//   }

//   console.log("finished heavy work");
// }

// play();

const checkYear = () => {
  console.log("checking current year...");

  setTimeout(() => {
    const currentYear = new Date().getFullYear();

    console.log("current year is ", currentYear);
  }, 5000);
};

checkYear();
