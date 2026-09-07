import input from "./input.js";
let mass_in_kg = parseFloat(await input("Please enter your mass in kg: "));
let height_in_m = parseFloat(await input("Please enter your height in meters:"));
let bmi = mass_in_kg / (height_in_m * height_in_m);
console.log(`Your BMI is: ${bmi.toFixed(2)}`);