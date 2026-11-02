import fs from "fs";
const path = "pokemon.csv";
let content = "";
try {
  content = fs.readFileSync(path, "utf-8");
} catch (error) {
  console.log(`Error: ${error}`);
}
console.log(content);
const rows = content.replaceAll("\r", "").trim().split("\n");
const headers = rows[0].split(",");
const pokemon = rows.slice(1).map((row) => {
  const values = row.split(",");
  return Object.fromEntries(headers.map((h, i) => [h, values[i]]));
});
fs.writeFileSync("pokemon.json", JSON.stringify(pokemon, null, 2));
