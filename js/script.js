'use strict'

/*
Do a program to show the numbers between two numbers user input
*/

var number = parseInt(prompt("Introduce a first number ",0));
var number2 =parseInt(prompt("Introduce a second number",0));

document.write("<h2>The numbers from"+ number +" to "+ number2 +":</h2>")

for(var i=number; i <= number2; i++)
{   
    document.write(i+"<br>");
}


//console.log(i);
