const { captureOwnerStack } = require("react");

let text = "Ez egy példa szöveg, amelyet a JavaScript string műveletek bemutatására használok.";
function elsoOt(text)
{
    return text.substring(0,5);
}
console.log(elsoOt(text));
