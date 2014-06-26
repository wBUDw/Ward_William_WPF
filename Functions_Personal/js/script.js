
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

     //Re-prompt for tredHours[0]
     tredHours[1] = prompt("Please do not leave blank, and use only numbers. Day two, how many hours did you walk?")

 }

 //validate tredHours[2] with while loop
 while (tredHours[2]==="" || isNaN(tredHours[2])){

     //Re-prompt for tredHours[0]
     tredHours[2] = prompt("Please do not leave blank, and use only numbers. Day three, how many hours did you walk?")

 }

 //log array length
 console.log(tredHours);

 //create array for speed in mph walked
 var tredMph = [prompt("Day one, what mph setting did you use?"), prompt("Day two, what mph setting did you use?"), prompt("Day three, what mph setting did you use?")];

 //log array length
 console.log(tredMph);







