
 /*
William Ward
6/19/14
Conditionals Wacky
 */

//alert("testing");

 //Tell user whether his World of Tanks Kills are below average, above average, or average

 //welcome the user
 var name = prompt("Please enter your name:");

 //verify they did not leave it blank, if not welcome them
 (name==="") ? name = prompt("You left the prompt blank. Please tell me what your name is.") : alert("Hello "+name +".");

 //log name
 console.log(name);

 //alert user what info we need
 alert(name+" we would like to know how many kills you got in World of Tanks. We need your amount from five games.");

//array to get kills per game
 var kills = [prompt(name+" how many kills did you get in game 1?"), prompt(name+" how many kills did you get in game 2?"), prompt(name+" how many kills did you get in game 3?"), prompt(name+" how many kills did you get in game 4?"), prompt(name+" how many kills did you get in game 5?")];

 //verify that kills[0] is a number or is not blank
 if (isNaN(kills[0]) || kills[0]==="") {

     //re-prompt for an answer
     kills[0] = prompt("You left the prompt blank or did not enter a number. Please "+name+" how many kills did you get in game 1?");

 }

 //verify that kills[1] is a number or is not blank
 if (isNaN(kills[1]) || kills[1]==="") {

     //re-prompt for an answer
     kills[1] = prompt("You left the prompt blank or did not enter a number. Please "+name+" how many kills did you get in game 2?");

 }

 //verify that kills[2] is a number or is not blank
 if (isNaN(kills[2]) || kills[2]==="") {

     //re-prompt for an answer
     kills[2] = prompt("You left the prompt blank or did not enter a number. Please "+name+" how many kills did you get in game 3?");

 }

 //verify that kills[3] is a number or is not blank
 if (isNaN(kills[3]) || kills[3]==="") {

     //re-prompt for an answer
     kills[3] = prompt("You left the prompt blank or did not enter a number. Please "+name+" how many kills did you get in game 4?");

 }

 //verify that kills[4] is a number or is not blank
 if (isNaN(kills[4]) || kills[4]==="") {

     //re-prompt for an answer
     kills[4] = prompt("You left the prompt blank or did not enter a number. Please "+name+" how many kills did you get in game 5?");

 }

 //log array kills
 console.log(kills);

 //get the sum for array kills
 var sumKills = Number(kills[0])+Number(kills[1])+Number(kills[2])+Number(kills[3])+Number(kills[4]);

 //log sumKills
 console.log(sumKills);

 //get average for array kills
 var averageKills = sumKills/5;

 //log averageKills
 console.log(averageKills);

 //round averageKills to the nearest hundredth
 averageKills = averageKills.toFixed(2);

 //if for the result1, result2, or result3
 if (averageKills<3){

     //result1 if averageKills is less than three
     var result1 = name+" you were below average on your kills.";

     //log result1
     console.log(result1);

     //alert user result1
     alert(result1);

 }else if (averageKills===3) {

     //result2 if averageKills is less than three
     var result2 = name+" you were average on your kills.";

     //log result2
     console.log(result2);

     //alert user result2
     alert(result2);

 }else {

     //result3 if averageKills is less than three
     var result3 = name+" you were above average on your kills.";

     //log result3
     console.log(result3);

     //alert user result3
     alert(result3);

 }