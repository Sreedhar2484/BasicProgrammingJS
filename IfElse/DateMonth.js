const prompt = require('prompt-sync')();
let date = prompt("Enter day Of the Month : ");
let month = prompt("Enter month Of the Year : ");
let year = prompt("Enter Year : ");
console.log("Date : " + date + "/" + month + "/" + year);

date = parseInt(date);
month = parseInt(month);
year = parseInt(year);

if (month < 4 || month > 6)
    console.log("False");
else if ((date < 20 && month == 4) || (date > 20 && month == 6))
    console.log("False");
else
    console.log("True");