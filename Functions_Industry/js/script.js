
 /*
William Ward
6/26/14
Functions Industry
 */

//alert("testing");

 //user Touchdowns for the week

 //Prompt for firstName
 var firstName = prompt("Please enter your first name:");

 //validate firstName with while loop
 while (firstName===""){

     //Re-prompt for firstName
     firstName = prompt("Please do not leave blank, enter your first name:")

 }


 //log firstName
 console.log(firstName);

 //create var welcome
 var welcome = "Welcome "+firstName+"!";

 //log welcome
 console.log(welcome);

 //alert to welcome user
 alert(welcome);

 //create var info
 var info = "Today "+firstName+" we need to know how many touchdowns you threw this week.";

 //log info
 console.log(info);

 //alert user to the info we will require
 alert(info);

 //create array for touchdowns thrown
 var tDThrown = [prompt("Game one, how many touchdowns did you throw this week?"), prompt("Game two, how many touchdowns did you throw this week?"), prompt("Game three, how many touchdowns did you throw this week?")];

 //validate tDThrown[0] with while loop
 while (tDThrown[0]==="" || isNaN(tDThrown[0])){

     //Re-prompt for tDThrown[0]
     tDThrown[0] = prompt("Please do not leave blank, and use only numbers. Game one, how many touchdowns did you throw this week?")

 }

 //validate tDThrown[1] with while loop
 while (tDThrown[1]==="" || isNaN(tDThrown[1])){

     //Re-prompt for tDThrown[1]
     tDThrown[1] = prompt("Please do not leave blank, and use only numbers. Game two, how many touchdowns did you throw this week?")

 }

 //validate tDThrown[2] with while loop
 while (tDThrown[2]==="" || isNaN(tDThrown[2])){

     //Re-prompt for tDThrown[2]
     tDThrown[2] = prompt("Please do not leave blank, and use only numbers. Game three, how many touchdowns did you throw this week?")

 }

 //log array tDThrown
 console.log(tDThrown);

 //anonymous function for totalTD
 var totalTD =function(game1TD,game2TD,game3TD){

     //calculate totalTD
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
