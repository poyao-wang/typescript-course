"use strict";
const userName = "Max";
// userName = 'Maximilian';
let age = 30;
age = 29;
// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }
// if (age > 20) {
//   let isOld = true;
// }
// console.log(isOld);
// console.log(result);
// const add = (a: number, b: number = 1) => a + b;
// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);
// const button = document.querySelector("button");
// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }
// printOutput(add(5));
// const hobbies = ["Sports", "Cooking"];
// const activeHobbies = ["Hiking", ...hobbies];
// console.log(activeHobbies);
const person = {
    name: "Max",
    age: 30,
};
const copiedPerson = Object.assign({}, person);
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
