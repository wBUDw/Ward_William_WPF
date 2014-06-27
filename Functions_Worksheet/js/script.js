
 /*
William Ward
6/11/14
Expressions Industry
 */

//alert("testing");

 //Calculate the circumference of a circle.

 //prompt for radius
 var radius = prompt("What is the radius of the circle?");

 //validate radius
 while (radius==="" || isNaN(radius)) {

     //re-prompt for radius
     radius = prompt("Please do not enter letters or leave the prompt blank. What is the radius of the circle?");
 }

 //create var for pie
 var pie = 3.14;

 //function to calculate circumference
 function  circumference(rad,pie){

     //calculate circumference
     var cir = rad*pie;
     return cir

 }

 var circum = circumference(radius,pie);
 console.log("The circumference of the circle is "+circum+".");

 //Calculate how many bee stings are needed to kill an animal in a function

 //prompt for weight of animal
 var weight = prompt("How much does this animal weigh in pounds?");

 //validate weight
 while (weight==="" || isNaN(weight)){

     //re-prompt user for weight
     weight = prompt("Please do not enter letters or leave the prompt blank. How much does this animal weigh?");

 }

 //create var for bee stings
var beeStings = 8.666666667;

 //function to calculate bee stings per pound
 function beeStingsPW (wght,bS){

     //calculate bee stings per weight
     var bSPW = wght*bS;
     return bSPW

 }

 var deadAnimal = beeStingsPW(weight,beeStings);
 console.log("It takes "+deadAnimal+" bee stings to kill this animal." );
