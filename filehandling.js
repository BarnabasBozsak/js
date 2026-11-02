import fs from "fs";
import { json } from "stream/consumers";
const path = "szoveg.txt";
let content = "";
try
{
    content = fs.readFileSync(path,"utf-8");
}catch(error)
{
    console.log(`Error: ${error}`)
}
console.log(content);
const newRows = `\n\n Új sorok hozzáadva \n A teszt kedvéért`;
try{
    fs.appendFileSync(content,newRows,"utf-8");
}
catch(error)
{
    console.log(`Error: ${error}`);
}
console.log(path);
try{
    content = fs.readFileSync("adatok.json","utf-8")
    console.log(content);
    const adatok = JSON.parse(content);
    console.log(adatok)
    console.log(typeof adatok)
    adatok.episode = 4
    console.log(adatok)
    content = JSON.stringify(adatok, null, 2)
    fs.writeFileSync("adatok.json",content,"utf-8")
}
catch(error)
{
    console.log(`Error: ${error}`);
}