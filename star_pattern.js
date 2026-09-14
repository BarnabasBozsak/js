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
