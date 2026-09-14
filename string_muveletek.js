const { captureOwnerStack } = require("react");

let text = "Ez egy példa szöveg, amelyet a JavaScript string műveletek bemutatására használok.";
function elsoOt(text)
{
    return text.substring(0,5);
}
console.log(elsoOt(text));
function haromtolNyolcig(text)
{
    return text.substring(3,8);
}
console.log(haromtolNyolcig(text));
function ottolVegig(text)
{
    return text.substring(5);
}
console.log(ottolVegig(text));
function ottolHatKarakter(text)
{
    return text.substr(5,6);
}
console.log(ottolHatKarakter(text));