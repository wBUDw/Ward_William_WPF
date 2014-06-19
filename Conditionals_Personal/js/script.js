
 /*
William Ward
6/18/14
Conditionals Personal
 */

//alert("testing");

 //Average gaming hours

 //welcome the user
 var name = prompt("Hello, what is your name?");

 //verify they did not leave it blank, if not welcome them
 (name==="") ? name = prompt("Hello, please tell me what your name is.") : alert("Hello "+name +".");

 //log name
 console.log(name);

 //alert user what info we need
 alert(name+" today we would like to know how many hours a day you play video games. We will be asking you how many hours per day you played over the course of seven days.");

 //var for hours in a day
 var hoursInDay = 24;


 //array to capture hours of game play per-day over seven days
 var hoursGamePlay = [prompt(name+" how many hours did you play Sunday?"), prompt(name+" how many hours did you play Monday?"), prompt(name+" how many hours did you play Tuesday?"), prompt(name+" how many hours did you play Wednesday?"), prompt(name+" how many hours did you play Thursday?"), prompt(name+" how many hours did you play Friday?"), prompt(name+" how many hours did you play Saturday?")];


 //verify hoursGamePlay[0] is a number || 24hrs or less
if (isNaN(hoursGamePlay[0]) || hoursGamePlay[0]>=hoursInDay){

    //prompt again for the hours
    hoursGamePlay[0] = prompt(name+" the number you gave was either not a number or more than 24 hours. How many hours did you play Sunday?");
}

 //log hoursGamePlay[0]
 console.log(hoursGamePlay[0]);

 //verify hoursGamePlay[1] is a number || 24hrs or less
 if (isNaN(hoursGamePlay[1]) || hoursGamePlay[1]>=hoursInDay){

     //prompt again for the hours
     hoursGamePlay[1] = prompt(name+" the number you gave was either not a number or more than 24 hours. How many hours did you play Monday?");
 }

 //log hoursGamePlay[1]
 console.log(hoursGamePlay[1]);

 //verify hoursGamePlay[2] is a number || 24hrs or less
 if (isNaN(hoursGamePlay[2]) || hoursGamePlay[2]>=hoursInDay){

     //prompt again for the hours
     hoursGamePlay[2] = prompt(name+" the number you gave was either not a number or more than 24 hours. How many hours did you play Tuesday?");
 }

 //log hoursGamePlay[2]
 console.log(hoursGamePlay[2]);

 //verify hoursGamePlay[3] is a number || 24hrs or less
 if (isNaN(hoursGamePlay[3]) || hoursGamePlay[3]>=hoursInDay){

     //prompt again for the hours
     hoursGamePlay[3] = prompt(name+" the number you gave was either not a number or more than 24 hours. How many hours did you play Wednesday?");
 }

 //log hoursGamePlay[3]
 console.log(hoursGamePlay[3]);

 //verify hoursGamePlay[4] is a number || 24hrs or less
 if (isNaN(hoursGamePlay[4]) || hoursGamePlay[4]>=hoursInDay){

     //prompt again for the hours
     hoursGamePlay[4] = prompt(name+" the number you gave was either not a number or more than 24 hours. How many hours did you play Thursday?");
 }

 //log hoursGamePlay[4]
 console.log(hoursGamePlay[4]);

 //verify hoursGamePlay[5] is a number || 24hrs or less
 if (isNaN(hoursGamePlay[5]) || hoursGamePlay[5]>=hoursInDay){

     //prompt again for the hours
     hoursGamePlay[5] = prompt(name+" the number you gave was either not a number or more than 24 hours. How many hours did you play Friday?");
 }

 //log hoursGamePlay[5]
 console.log(hoursGamePlay[5]);

 //verify hoursGamePlay[6] is a number || 24hrs or less
 if (isNaN(hoursGamePlay[6]) || hoursGamePlay[6]>=hoursInDay){

     //prompt again for the hours
     hoursGamePlay[6] = prompt(name+" the number you gave was either not a number or more than 24 hours. How many hours did you play Saturday?");
 }

 //log hoursGamePlay[6]
 console.log(hoursGamePlay[6]);

 //calculate the sum of the array
 var totalHours = Number(hoursGamePlay[0])+Number(hoursGamePlay[1])+Number(hoursGamePlay[2])+Number(hoursGamePlay[3])+Number(hoursGamePlay[4])+Number(hoursGamePlay[5])+Number(hoursGamePlay[6]);

 //log sum of array
 console.log(totalHours);

 //calculate the average of the array
 var averageHours = totalHours/7;

 //log average of array
 console.log(averageHours);


