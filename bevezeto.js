import input from "./input.js";
let a = await input("Kérek egy számot!");
console.log("A szám:" + a);
let b = await input("Kérek egy másik számot!");
console.log("A másik szám:" + b);
console.log(" A két szám összege:" + (parseInt(a) + parseInt(b)));
