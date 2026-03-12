// module default export you can change name also
// import  calculate  from "./2_index.js";

import { calculate, play } from "./2_index.js";

// commonjs
const play = require("./2_index.js");

const calculation1 = calculate;

calculation1(10, 12);

play();
