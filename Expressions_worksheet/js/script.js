//Calculate how old Sparky the pit bull is in dog years

var sparkysHumanAge = prompt("How old is Sparky?", ""); //I created a prompt for the age of sparky
var dogYears = 7; //this is a var to identify what human years is a multiple of
var sparkysDogAge = sparkysHumanAge * dogYears; //this is the age we enter multiplied by dog years aka 7
var result1 = ("Sparky is ") + sparkysHumanAge + (" human years old which is ") + sparkysDogAge + (" in dog years.");//the result in a concatenating string
console.log(result1); //printout of Sparky's age in dog years.

//calculate how much pizza each partygoer will get at the party

var numberPizzas = prompt ("How many pizzas were ordered?", ""); //A prompt for the number of pizzas ordered
var slicesPerPizza = prompt("How many slices of pizza per pizza are there?", ""); //A prompt for the number of slices of pizza
var peopleAtParty = prompt("How many people attended the party?", ""); //A prompt for the number of people at the party
var slicesOfPizza = numberPizzas * slicesPerPizza;
var numberSliEat = slicesOfPizza / peopleAtParty; //This is slices divided by people
var result2 = ("Each person ate ") + numberSliEat + (" slices of pizza at the party."); //the result in a concatenating string
console.log(result2); //printout of how many slices each person ate.

//calculate how much pizza Sparky will get after the party

var sparkySlices = slicesOfPizza % peopleAtParty; //This will be Sparky's slices
var result3 = ("Sparky got ") + sparkySlices + (" slices of pizza."); //the result in a concatenating string
console.log(result3); //printout of Sparky's slices

//calculate the average amount spent on groceries

var groceries = [prompt("Week one amount spent on groceries.", ""), prompt("Week two amount spent on groceries.", ""), prompt("Week three amount spent on groceries.", ""), prompt("Week four amount spent on groceries.", ""), prompt("Week five amount spent on groceries.", "")]; //array for groceries week 1 thru week 5
var groSum = Number(groceries[0]) + Number(groceries[1]) + Number(groceries[2]) + Number(groceries[3]) + Number(groceries[4]); //sum of the array, adding each week
var groAve = groSum/5; // average of the array, sum divided by number of weeks
var result4 = ("You have spent a total of $") + groSum + (" on groceries over 5 weeks. That is an average of $") + groAve + (" per week."); //the result in a concatenating string
console.log(result4); //printout of grocery sum and average

//calculate the discounted price of an item with and without sales tax

var oriPrice = prompt("What was the original price?", "");//prompt for the original price
var disPer = prompt("What is the percent off", "");//prompt for discount percentage
var item = prompt("What did you buy?", "");//prompt for the item you purchased
var saleTax = prompt("What is the sales tax", "");//prompt for your sales tax
var disPrice = oriPrice * ((100 - disPer)/100);//100 minus the percent off, divided by 100 to get the decimal point multiplied by the original price
var taxPrice = disPrice + (disPrice * (saleTax/100));//the sales tax divided by 100 to get the decimal point, then multiplied by the discounted price, and then added to the discounted price
var result5 = ("Your " + item + " was originally $" + oriPrice + ", but after a " + disPer + "% discount, it is now $" + disPrice + " without tax, and $" + taxPrice + " with tax.");//the result in a concatenating string
console.log(result5);//printout of item, original price, discount percentage, discounted price, and price after tax.