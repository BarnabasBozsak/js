import input from "./input.js";
let miles = await input("Please enter a distance in miles: ");
console.log("The distance in kilometers is: " + (parseFloat(miles) * 1.60934).toFixed(2) + " km");
