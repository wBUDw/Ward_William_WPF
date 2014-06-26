
 /*
William Ward
6/26/14
Functions Wacky
 */

//alert("testing");

 //call of duty kill-death ratio

 //prompt user for gamer tag
 var gamerTag = prompt("Please enter your gamer tag:");

 //validate not left blank
 while (gamerTag==="") {

     //re-prompt if left blank
     gamerTag = prompt("You left it blank. Please enter your gamer tag:");

 }

 //log gamer tag
 console.log(gamerTag);

 //create var welcome
 var welcome = ("Welcome "+gamerTag+"!");

 //log welcome
 console.log(welcome);

 //alert welcome
 alert(welcome);

 //create var info
 var info = gamerTag+" we need you to play five games of Call of Duty and we want you keep track of your kills and deaths.";

 //log info
 console.log(info);

 //alert info
 alert(info);

 //create array for kills
 var kills = [prompt("How many kills did you get in game 1?"), prompt("How many kills did you get in game 2?"), prompt("How many kills did you get in game 3?"), prompt("How many kills did you get in game 4?"),prompt("How many kills did you get in game 5?")];

 //validate prompt kills[0]
 while (kills[0]==="" || isNaN(kills[0])){

     //re-prompt if blank or not a number
     kills[0]=prompt("Please you left the prompt blank, entered a letter, or entered a word. How many kills did you get in game 1?");

 }

 //validate prompt kills[1]
 while (kills[1]==="" || isNaN(kills[1])){

     //re-prompt if blank or not a number
     kills[1]=prompt("Please you left the prompt blank, entered a letter, or entered a word. How many kills did you get in game 2?");

 }

 //validate prompt kills[2]
 while (kills[2]==="" || isNaN(kills[2])){

     //re-prompt if blank or not a number
     kills[2]=prompt("Please you left the prompt blank, entered a letter, or entered a word. How many kills did you get in game 3?");

 }

 //validate prompt kills[3]
 while (kills[3]==="" || isNaN(kills[3])){

     //re-prompt if blank or not a number
     kills[3]=prompt("Please you left the prompt blank, entered a letter, or entered a word. How many kills did you get in game 4?");

 }

 //validate prompt kills[4]
 while (kills[4]==="" || isNaN(kills[4])){

     //re-prompt if blank or not a number
     kills[4]=prompt("Please you left the prompt blank, entered a letter, or entered a word. How many kills did you get in game 5?");

 }

 //log kills
 console.log(kills);

 //create array for deaths
 var deaths = [prompt("How many deaths did you get in game 1?"), prompt("How many deaths did you get in game 2?"), prompt("How many deaths did you get in game 3?"), prompt("How many deaths did you get in game 4?"),prompt("How many deaths did you get in game 5?")];

 //validate prompt deaths[0]
 while (deaths[0]==="" || isNaN(deaths[0])){

     //re-prompt if blank or not a number
     deaths[0]=prompt("Please you left the prompt blank, entered a letter, or entered a word. How many deaths did you get in game 1?");

 }

 //validate prompt deaths[1]
 while (deaths[1]==="" || isNaN(deaths[1])){

     //re-prompt if blank or not a number
     deaths[1]=prompt("Please you left the prompt blank, entered a letter, or entered a word. How many deaths did you get in game 2?");

 }

 //validate prompt deaths[2]
 while (deaths[2]==="" || isNaN(deaths[2])){

     //re-prompt if blank or not a number
     deaths[2]=prompt("Please you left the prompt blank, entered a letter, or entered a word. How many deaths did you get in game 3?");

 }

 //validate prompt deaths[3]
 while (deaths[3]==="" || isNaN(deaths[3])){

     //re-prompt if blank or not a number
     deaths[3]=prompt("Please you left the prompt blank, entered a letter, or entered a word. How many deaths did you get in game 4?");

 }

 //validate prompt deaths[4]
 while (deaths[4]==="" || isNaN(deaths[4])){

     //re-prompt if blank or not a number
     deaths[4]=prompt("Please you left the prompt blank, entered a letter, or entered a word. How many deaths did you get in game 5?");

 }

 //log deaths
 console.log(deaths);

 //function to get sum of kills
 function totalKills(game1K,game2K,game3K,game4K,game5K){

     //calculate sum of kills array
     var sumKills = Number(game1K)+Number(game2K)+Number(game3K)+Number(game4K)+Number(game5K);
     //return sumKills
     return sumKills;

 }

 var killsSum = totalKills(kills[0],kills[1],kills[2],kills[3],kills[4]);

 //log killsSum
 console.log(killsSum);

 //function to get sum of deaths
 function totalDeaths(game1D,game2D,game3D,game4D,game5D){

     //calculate sum of deaths array
     var sumDeaths = Number(game1D)+Number(game2D)+Number(game3D)+Number(game4D)+Number(game5D);
     //return sumDeaths
     return sumDeaths;

 }

 var deathsSum = totalDeaths(deaths[0],deaths[1],deaths[2],deaths[3],deaths[4]);

 //log deathsSum
 console.log(deathsSum);

 //calculate kill-death ratio for game 1
 var kDGame1 = kills[0]/deaths[0];

 //log kDGame1
 console.log(kDGame1);

 //round kill-death ratio for game 1 to hundredths
 var roundKDG1 = kDGame1.toFixed(2);

 //log roundKDG1
 console.log(roundKDG1);

 //calculate kill-death ratio for game 2
 var kDGame2 = kills[1]/deaths[1];

 //log kDGame2
 console.log(kDGame2);

 //round kill-death ratio for game 2 to hundredths
 var roundKDG2 = kDGame2.toFixed(2);

 //log roundKDG2
 console.log(roundKDG2);

 //calculate kill-death ratio for game 3
 var kDGame3 = kills[2]/deaths[2];

 //log kDGame3
 console.log(kDGame3);

 //round kill-death ratio for game 3 to hundredths
 var roundKDG3 = kDGame3.toFixed(2);

 //log roundKDG3
 console.log(roundKDG3);

 //calculate kill-death ratio for game 4
 var kDGame4 = kills[3]/deaths[3];

 //log kDGame4
 console.log(kDGame4);

 //round kill-death ratio for game 4 to hundredths
 var roundKDG4 = kDGame4.toFixed(2);

 //log roundKDG4
 console.log(roundKDG4);

 //calculate kill-death ratio for game 5
 var kDGame5 = kills[4]/deaths[4];

 //log kDGame5
 console.log(kDGame5);

 //round kill-death ratio for game 5 to hundredths
 var roundKDG5 = kDGame5.toFixed(2);

 //log roundKDG5
 console.log(roundKDG5);



