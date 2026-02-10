// spread operator

const num = [1, 2, 3, 4, 5, 6];

console.log(...num);

const num2 = [...num, 7, 8, 9, 10];

console.log("num2", num2);

// rest operator

function play(...games) {
  console.log("i have these games", ...games);

  console.log("i liked the most", games[0]);

  //   now i want some spe
}

play("GTA-5", "Forza-5", "God of War", "snowRunner", "FlightSimulator");
