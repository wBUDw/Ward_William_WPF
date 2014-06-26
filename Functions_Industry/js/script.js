
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
     var sumTD = Number(game1TD)+Number(game2TD)+Number(game3TD);
     //return sumTD
     return sumTD;
 };

 //create var for gamesSumTD
 var gamesSumTD = totalTD(tDThrown[0],tDThrown[1],tDThrown[2]);

 //log gamesSumTD
 console.log(gamesSumTD);

 //calculate average td per game
 var aveTDGame = gamesSumTD/tDThrown.length;

 console.log(aveTDGame);

 //round aveTDGame to nearest hundredth
 var roundAveTD = aveTDGame.toFixed(2);

 console.log(roundAveTD);

 //result for touchdowns

 if (aveTDGame<3) {

     //create var for <3
     var less3 = firstName+" with "+gamesSumTD+" total touchdowns, averaging "+roundAveTD+" touchdowns per game. You are below average and may want to go back to practice mode.";
     //log less3
     console.log(less3);
     //alert of result of less3
     alert(less3);

 }else if(aveTDGame===3) {

     //create var for ===3
     var equal3 = firstName+" with "+gamesSumTD+" total touchdowns, averaging "+roundAveTD+" touchdowns per game. You are average and may want to spend a little time in practice mode to get you over the hump.";
     //log equal3
     console.log(equal3);
     //alert of result of equal3
     alert(equal3);

 }else {

     //create var for <3
     var greater3 = firstName+" with "+gamesSumTD+" total touchdowns, averaging "+roundAveTD+" touchdowns per game. You are above average and do not need to spend time in practice mode but do not let that get to your head.";
     //log greater3
     console.log(greater3);
     //alert of result of greater3
     alert(greater3);

 }
