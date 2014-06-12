/*
William Ward
6/11/14
Expressions Industry
 */

//alert("testing");

//Making stat collector for a running back

//ask for users name in a var prompt firstName
var firstName = prompt("Hello what is your name?");

//var for spaces
var space = " ";

//Introduce the running back
var welcome = ("Welcome"+space+firstName+", I am going to ask you for your stats.");

//log and alert the welcome
console.log(welcome);
alert(welcome);

//creating var prompts rushCarQ, rushYardQ, rushTDQ, rushFumQ, recCatQ, recYardQ, recYacQ, recTDQ, to be entered in my array
var rushCarQ = prompt(firstName+space+"how many times did you carry the football?");
var rushYardQ = prompt(firstName+space+"how much yards did you get while carrying the football?");
var rushTDQ = prompt(firstName+space+"how many times did you score a rushing touchdown?");
var rushFumQ = prompt(firstName+space+"how many times did you fumble the football?");
var recCatQ = prompt(firstName+space+"how many times did you catch the football?");
var recYardQ = prompt(firstName+space+"how much yards did you get on catches?");
var recYacQ = prompt(firstName+space+"how much yards after the catch did you get?");
var recTDQ = prompt(firstName+space+"how many times did receive a catch for a touchdown?");

//create array using var rushCarQ, rushYardQ, rushTDQ, rushFumQ, recCatQ, recYardQ, recYacQ, and recTDQ
var stats =