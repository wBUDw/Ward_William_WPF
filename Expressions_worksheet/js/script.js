//Calculate how old Sparky the pit bull is in dog years

var sparkysHumanAge = prompt("How old is Sparky?", ""); //I created a prompt for the age of sparky
var dogYears = 7; //this is a var to identify what human years is a multiple of
var sparkysDogAge = sparkysHumanAge * dogYears; //this is the age we enter multiplied by dog years aka 7
var result1 = ("Sparky is ") + sparkysHumanAge + (" human years old which is ") + sparkysDogAge + (" in dog years.");//the result in string
console.log(result1); //printout of Sparky's age in dog years.

//calculate how much pizza each partygoer will get at the party

var numberPizzas = prompt ("How many pizzas were ordered?", ""); //A prompt for the number of pizzas ordered
var slicesPerPizza = prompt("How many slices of pizza per pizza are there?", ""); //A prompt for the number of slices of pizza
var peopleAtParty = prompt("How many people attended the party?", ""); //A prompt for the number of people at the party
var slicesOfPizza = numberPizzas * slicesPerPizza;
var numberSliEat = slicesOfPizza / peopleAtParty; //This is slices divided by people
var result2 = ("Each person ate ") + numberSliEat + (" slices of pizza at the party."); // the result in string
console.log(result2); //printout of how many slices each person ate.

//calculate how much pizza Sparky will get after the party

var sparkySlices = slicesOfPizza % peopleAtParty; //This will be Sparky's slices
var result3 = ("Sparky got ") + sparkySlices + (" slices of pizza."); //the result in string
console.log(result3); //printout of Sparky's slices

//