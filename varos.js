import fs from "fs";
import input from "./input.js";
console.log(`1. feladat`);
const rendszam = await input("Kére adja meg az autó azonosítóját! ");
console.log(rendszam);
const content = fs.readFileSync(`${rendszam}.txt`, "utf8");
console.log(content);
let sorok = content.trim().split("\n");
let adatok = [];
for (const sor of sorok) {
  let row = sor.trim().split("\t");
  adatok.push(row.map((e) => +e));
}
console.log(`2. feladat`);
