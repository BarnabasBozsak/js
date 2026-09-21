console.log("Square: ");
console.log("\n");
function printSquare() {
  for (let i = 0; i <= 4; i++) {
    let row = "";
    for (let j = 0; j <= 5; j++) {
      row += "*";
    }
    console.log(row);
  }
}
printSquare();
console.log("Right half pyramid: ");
console.log("\n");
function rightHalfPyramid() {
  for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
rightHalfPyramid();
console.log("Left half pyramid: ");
function printLeftHalfPyramid() {
  for (let i = 1; i <= 5; i++) {
    console.log(" ".repeat(5 - i) + "*".repeat(i));
  }
}
printLeftHalfPyramid();
console.log("Inverted right half pyramid: ");
function printInvertedRightHalfPyramid() {
  for (let i = 5; i >= 0; i--) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
printInvertedRightHalfPyramid();
console.log("\n");
console.log("Inverted left half pyramid: ");
let symbol = "*";
function printInvertedLeftHalfPyramid() {
  for (let i = 5; i >= 1; i--) {
    console.log(symbol.repeat(i).padStart(5, " "));
  }
}
printInvertedLeftHalfPyramid();
console.log("Pyramid: ");
function printPyramid() {
  let output = "";
  for (let i = 1; i <= 5; i++) {
    output += " ".repeat(5 - i) + "*".repeat(2 * i - 1) + "\n";
  }
  console.log(output);
}
printPyramid();
