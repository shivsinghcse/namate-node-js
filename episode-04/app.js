require("./xyz")
// const sum = require("./sum")
const {calculateSum} = require("./calculate")
// import { calculateSum } from "./sum.js"
const data = require("./data.json")
const {calculateMultiply} = require("./calculate")


calculateSum(5, 4)
console.log(data);
console.log(data.name);
calculateMultiply(5, 5)