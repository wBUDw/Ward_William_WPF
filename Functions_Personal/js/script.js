
 /*
William Ward
6/25/14
Functions Personal


alert("testing");
*/

 //How long I spend on treadmill

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
 var info = "Today "+fullName+" we need to know how long you walked on the treadmill over the course of three days.";

 //alert user to the info we will require
 alert(info);

 //create array for minutes walked
 var tredMin = [prompt("Day one, how many minutes did you walk?"), prompt("Day two, how many minutes did you walk?"), prompt("Day three, how many minutes did you walk?")];

 //validate tredMin[0] with while loop
 while (tredMin[0]==="" || isNaN(tredMin[0])){

     //Re-prompt for tredMin[0]
     tredMin[0] = prompt("Please do not leave blank, and use only numbers. Day one, how many minutes did you walk?")

 }

 //validate tredMin[1] with while loop
 while (tredMin[1]==="" || isNaN(tredMin[1])){

     //Re-prompt for tredMin[1]
     tredMin[1] = prompt("Please do not leave blank, and use only numbers. Day two, how many minutes did you walk?")

 }

 //validate tredMin[2] with while loop
 while (tredMin[2]==="" || isNaN(tredMin[2])){

     //Re-prompt for tredMin[2]
     tredMin[2] = prompt("Please do not leave blank, and use only numbers. Day three, how many minutes did you walk?")

 }

 //log array tredMin
 console.log(tredMin);

 //anonymous function for totalMin
 var totalMin =function(day1SM,day2SM,day3SM){

     //calculate totalHours
     var sumMin = Number(day1SM)+Number(day2SM)+Number(day3SM);
     //return sumHours
     return sumMin;
 };

 //create var for tredSumMin
 var tredSumMin = totalMin(tredMin[0],tredMin[1],tredMin[2]);

 //log tredSumMin
 console.log(tredSumMin);

 //anonymous function for averageMin
 var averageMin =function(day1AM,day2AM,day3AM){

     //calculate aveMin
     var aveMin = (Number(day1AM)+Number(day2AM)+Number(day3AM))/tredMin.length;
     //return aveHours
     return aveMin;
 };

 //create var for tredAveMin
 var tredAveMin = averageMin(tredMin[0],tredMin[1],tredMin[2]);

 //round tredAveMin to nearest hundredth
 var roundTredAveMin = tredAveMin.toFixed(2);

 //log roundTredAveMin
 console.log(roundTredAveMin);

 //calculate sum hours from tredSumMin
 var tredSumHour = tredSumMin/60;

 //log tredSumHour
 console.log(tredSumHour);

 //round tredSumHours to nearest hundredth
 roundTredSumMin = tredSumHour.toFixed(2);

 //log roundTredSumMin
 console.log(roundTredSumMin);

 //calculate ave hours from tredAveMin
 var tredAveHour = tredAveMin/60;

 //log tredAveMin
 console.log(tredAveHour);

 //round tredAveHour to nearest hundredth
 var roundTredAveHour = tredAveHour.toFixed(2);

 //log roundTredAveHour
 console.log(roundTredAveHour);

 //ternary
 (tredSumHour <=2.99 || tredAveHour<=.99) ? console.log(fullName+" you may want to look at increasing how long you walk per day.") : console.log(fullName+" congratulations keep up the hard work. ");

