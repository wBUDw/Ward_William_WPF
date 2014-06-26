
 /*
William Ward
6/11/14
Expressions Industry


alert("testing");
*/

 //What my average speed, miles, steps on treadmill

 //Prompt for firstName
 var firstName = prompt("Please enter your first name:");

 //validate firstName with while loop
 while (firstName===""){

    //Re-prompt for firstName
     firstName = prompt("Please do not leave blank, enter your first name:")

 }


 //log firstName
 console.log(firstName);

 //Prompt for midName
 var midName = prompt("Please enter your middle name:");

 //validate midName with while loop
 while (midName===""){

     //Re-prompt for midName
     midName = prompt("Please do not leave blank, enter your middle name:")

 }


 //log midName
 console.log(midName);

 //Prompt for last name
 var lastName = prompt("Please enter your last name:");

 //validate lastName with while loop
 while (lastName===""){

     //Re-prompt for lastName
     lastName = prompt("Please do not leave blank, enter your last name:")

 }


 //log lastName
 console.log(lastName);

 function combineName (first,mid,last){

     //var firstMidLast combine parameters first, mid, and last
     var firstMidLast = first+" "+mid+" "+last;
     //return firstMidLast
     return firstMidLast;

 }
//create var fullName from function combineName
 var fullName = combineName (firstName,midName,lastName);

 //create var welcome
 var welcome = "Welcome "+fullName+"!";

 //log welcome
 console.log(welcome);

 //alert to welcome user
 alert(welcome);

 //create var info
 var info = "Today "+fullName+" we need to know how long you walked on the treadmill, and what speed you used to walk over the course of three days";

 //alert user to the info we will require
 alert(info);

 //create array for hours walked
 var tredHours = [prompt("Day one, how many hours did you walk?"), prompt("Day two, how many hours did you walk?"), prompt("Day three, how many hours did you walk?")];

 //validate tredHours[0] with while loop
 while (tredHours[0]==="" || isNaN(tredHours[0])){

     //Re-prompt for tredHours[0]
     tredHours[0] = prompt("Please do not leave blank, and use only numbers. Day one, how many hours did you walk?")

 }

 //validate tredHours[1] with while loop
 while (tredHours[1]==="" || isNaN(tredHours[1])){

     //Re-prompt for tredHours[1]
     tredHours[1] = prompt("Please do not leave blank, and use only numbers. Day two, how many hours did you walk?")

 }

 //validate tredHours[2] with while loop
 while (tredHours[2]==="" || isNaN(tredHours[2])){

     //Re-prompt for tredHours[2]
     tredHours[2] = prompt("Please do not leave blank, and use only numbers. Day three, how many hours did you walk?")

 }

 //log array tredHours
 console.log(tredHours);

 //create array for speed in mph walked
 var tredMph = [prompt("Day one, what mph setting did you use?"), prompt("Day two, what mph setting did you use?"), prompt("Day three, what mph setting did you use?")];

 //validate tredMph[0] with while loop
 while (tredMph[0]==="" || isNaN(tredMph[0])){

     //Re-prompt for tredMph[0]
     tredMph[0] = prompt("Please do not leave blank, and use only numbers. Day one, what mph setting did you use?")

 }

 //validate tredMph[1] with while loop
 while (tredMph[1]==="" || isNaN(tredMph[1])){

     //Re-prompt for tredMph[1]
     tredMph[1] = prompt("Please do not leave blank, and use only numbers. Day two, what mph setting did you use?")

 }

 //validate tredMph[2] with while loop
 while (tredMph[2]==="" || isNaN(tredMph[2])){

     //Re-prompt for tredMph[2]
     tredMph[2] = prompt("Please do not leave blank, and use only numbers. Day three, what mph setting did you use?")

 }

 //log array tredMph
 console.log(tredMph);

 //anonymous function for totalHours
 var totalHours =function(day1SH,day2SH,day3SH){

     //calculate totalHours
     var sumHours = Number(day1SH)+Number(day2SH)+Number(day3SH);
     //return sumHours
     return sumHours;
 };

 //create var for
 var tredSumHours = totalHours(tredHours[0],tredHours[1],tredHours[2]);

 //log tredSumHours
 console.log(tredSumHours);

 //anonymous function for averageHours
 var averageHours =function(day1SH,day2SH,day3SH){

     //calculate averageHours
     var aveHours = (Number(day1SH)+Number(day2SH)+Number(day3SH))/tredHours.length;
     //return sumHours
     return aveHours;
 };

 //create var for
 var tredAveHours = averageHours(tredHours[0],tredHours[1],tredHours[2]);

 //round tredAveHours to nearest hundredth
 var roundTredAveHours = tredAveHours.toFixed(2);

 //log tredSumHours
 console.log(roundTredAveHours);
