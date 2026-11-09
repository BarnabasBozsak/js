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
const elindul = adatok[0][0];
console.log(`Az autó a ${elindul}. másodpercben indult el.`);
const sebesseg = adatok[adatok.length - 1][2];
console.log(`Az autó a megfigyelés végén ${sebesseg} m/s sebességgel haladt.`);
console.log(`3. feladat`);
let atlepte = false;
for (const row of adatok) {
  if (row[2] > 14) {
    atlepte = true;
    break;
  }
}
console.log(
  atlepte
    ? "Az auto átlépte a sebbességhatárt"
    : "Az auto nem átlépte a sebbességhatárt",
);
console.log(`4. feladat`);
let all = [0,adatok[0][0]]
let stop = 0
for(const row of adatok)
{
    if(row[2] == 0)
    {
        stop = row[1]
    }
    if(row[2] > 0 && stop != 0)
    {
        if(row[1] - stop > all[1] - all[0])
        {
            all = [stop, row[0]]
        }
        stop = 0
    }
}
console.log(`A leghosszabb állásidő ${all[0]}<852> és ${all[1]}<948> másodperc között volt.`)