let text =
  "Ez egy példa szöveg, amelyet a JavaScript string műveletek bemutatására használok.";
function elsoOt(text) {
  return text.substring(0, 5);
}
console.log(elsoOt(text));
function haromtolNyolcig(text) {
  return text.substring(3, 8);
}
console.log(haromtolNyolcig(text));
function ottolVegig(text) {
  return text.substring(5);
}
console.log(ottolVegig(text));
function ottolHatKarakter(text) {
  return text.substr(5, 6);
}
console.log(ottolHatKarakter(text));
function nagybetus(text) {
  return text.toUpperCase();
}
console.log(nagybetus(text));
function mindenMasodikNagybetu(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      result += text[i].toUpperCase();
    }
  }
  return result;
}
console.log(mindenMasodikNagybetu(text));
function kisENagyE(text) {
  return text.replaceAll("e", "E");
}
console.log(kisENagyE(text));
function tombEvel(text) {
  return text.split("e");
}
console.log(tombEvel(text));
