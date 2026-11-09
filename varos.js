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
let all = [0, adatok[0][0]];
let stop = 0;
for (const row of adatok) {
  if (row[2] == 0) {
    stop = row[1];
  }
  if (row[2] > 0 && stop != 0) {
    if (row[0] - stop > all[1] - all[0]) {
      all = [stop, row[0]];
    }
    stop = 0;
  }
}
console.log(
  `A leghosszabb állásidő ${all[0]} és ${all[1]} másodperc között volt.`,
);
console.log(`5. feladat`);
const idopont = +(await input("Mikor vizsgáljuk az autó sebességét? "));
let seb = 0;
let elozo = 0;
for (const row of adatok) {
  if (row[0] <= idopont && idopont <= row[1]) {
    let [t1, t2, v2] = row;
    let v1 = elozo;
    seb = v1 + ((v2 - v1) / (t2 - t1)) * (idopont - t1);
    break;
  }
  if (idopont <= row[0]) {
    seb = elozo;
    break;
  }
  elozo = row[2];
}
console.log(`Az autó sebessége a(z) ${idopont}. masodpercben ${seb} m/s volt. 
`);
console.log("6.feladat");
let ut = 0
let v1 = 0
let t = 0
for(let row of adatok)
{
  let [t1,t2,v2] = row
  ut += v1 * (t1-t)
  ut += (v1 + v2) / 2 * (t2 - t1)
  v1 = v2
  t = t2
}
console.log(`A megtett út ${ut} méter`);
console.log("7. feladat")
v1 = 0
const path = `v${rendszam}.txt`
fs.writeFileSync(path,``,"utf-8")
for(let row of adatok)
{
  fs.appendFileSync(path,`${row[0]}\t${v1} \n`,"utf-8")
  fs.appendFileSync(path,`${row[1]}\t${row[2]} \n`,"utf-8")
  v1 = row[2]
}