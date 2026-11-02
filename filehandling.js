import fs from "fs";
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