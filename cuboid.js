import input from "./input.js";
async function main() {
  let a = parseFloat(await input("Please input the length of the cuboid: "));
  let b = parseFloat(await input("Please input the width of the cuboid: "));
  let c = parseFloat(await input("Please input the height of the cuboid: "));
  let surfaceArea = 2 * (a * b + a * c + b * c);
  let volume = a * b * c;
  console.log(`Surface Area: ${surfaceArea}`);
  console.log(`Volume: ${volume}`);
}
main();
