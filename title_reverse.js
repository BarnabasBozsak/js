import input from "./input.js";
let title = await input("Please enter a title: ");
let newTitle = "";
for (let i = title.length -1; i >= 0; i--)
{
    if (i > 0) {
        newTitle += title.charAt(i).toLowerCase();
    }
    else{
        newTitle += title.charAt(i).toUpperCase();
    }

}
console.log(newTitle);