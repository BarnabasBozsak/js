import input from "./input.js";
let currentHours = await input("Please enter the curent hour (1-24): ");
let currentMinutes = await input("Please enter the curent minutes (0-59): ");
let currentSeconds = await input("Please enter the curent seconds (0-59): ");
let hoursLeft = 24 - currentHours;
let minutesLeft = 60 - currentMinutes;
let secondsLeft = 60 - currentSeconds;
let totalSecondsLeft = (hoursLeft * 3600) + (minutesLeft * 60) + secondsLeft;
console.log(`There are ${totalSecondsLeft} seconds left in the day.`);