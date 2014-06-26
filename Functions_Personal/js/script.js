
 /*
William Ward
6/11/14
Expressions Industry


alert("testing");
*/

 //What my average speed, miles, steps on treadmill

 //Prompt for first name
 var firstName = prompt("Please enter your first name:");

 //validate firstName with while loop
 while (firstName===""){

    //Re-prompt for firstName
     firstName = prompt("Please do not leave blank, enter your first name:")

 }

 //log firstName
 console.log(firstName);

 //Prompt for last name
 var lastName = prompt("Please enter your last name:");

 //validate firstName with while loop
 while (lastName===""){

     //Re-prompt for firstName
     lastName = prompt("Please do not leave blank, enter your last name:")

 }

 //log firstName
 console.log(lastName);

 function combineName (first,last){

     var firstLast = first+" "+last;
     return firstLast;

 }

 var fullName = combineName (firstName,lastName);

 console.log("Welcome "+fullName+".");