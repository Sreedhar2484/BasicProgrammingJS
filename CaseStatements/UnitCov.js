const prompt = require("prompt-sync")({ sigint: true });
console.log("enter what you want to do = ");
let select = parseInt(prompt("1-feet to inch 2-inch to feet 3-feet to meter 4-meter to feet "));
switch (select) {
    case 1:
        let feet = parseInt(prompt("Enter value in feet -> "))
        console.log("the converted value in inch = " + feet * 12);
        break;
    case 2:
        let inch = parseInt(prompt("Enter length in inch -> "))
        console.log("The converted value in feet is = " + inch / 12);
    case 3:
        let feet1 = parseInt(prompt("Enter lenght in feet -> "))
        console.log("the converted value in meter is = " + feet1 / 3.25);
    case 4:
        let meter = parseInt(prompt("Enter value in meter -> "));
        console.log("the converted value in feet is =" + meter * 3.28);
    default:
        console.log("please select correct oprtion");
}