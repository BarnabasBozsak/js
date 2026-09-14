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
function printTriangle() {
  for (let i = 0; i <= 4; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
printTriangle();
function printInvertedTriangle() {
  for (let i = 5; i >= 0; i--) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
printInvertedTriangle();
