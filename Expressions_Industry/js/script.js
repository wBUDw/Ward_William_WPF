/*
William Ward
6/11/14
Expressions Industry
 */

//alert("testing");

//Making stat collector for a running back

//ask for users name in a var prompt firstName
var firstName = prompt("Hello what is your name?");

//var for spaces
var space = " ";

//Introduce the running back
var welcome = ("Welcome"+space+firstName+", I am going to ask you for your stats.");

//log and alert the welcome
console.log(welcome);
alert(welcome);

//creating var array prompt rushStats
var rushStats = [prompt(firstName+space+"how many times did you carry the football?"), prompt(firstName+space+"how much yards did you get while carrying the football?"), prompt(firstName+space+"how many times did you score a rushing touchdown?"), prompt(firstName+space+"how many times did you fumble the football?")];
console.log(rushStats);

//using rushStat array to create var for rushCar
var rushCar = rushStats[0];
//log for rushCar
console.log(rushCar);

//using rushStat array to create var for rushYard
var rushYard = rushStats[1];
//log for rushYard
console.log(rushYard);

//using rushStat array to create var for rushTD
var rushTD = rushStats[2];
//log for rushTD
console.log(rushTD);

//using rushStat array to create var for rushFum
var rushFum = rushStats[3];
//log for rushCar
console.log(rushFum);

//creating var array prompt recStats
var recStats = [prompt(firstName+space+"how many times did you catch the football?"), prompt(firstName+space+"how much yards did you get on catches?"), prompt(firstName+space+"how much yards after the catch did you get?"), prompt(firstName+space+"how many times did receive a catch for a touchdown?")];
//log for recStats
console.log(recStats);

//using recStats array to create var recCat
var recCat = recStats[0];
//log for recStats
console.log(recCat);

//using recStats array to create var recYard
var recYard = recStats[1];
//log for recStats
console.log(recYard);

//using recStats array to create var recYac
var recYac = recStats[2];
//log for recStats
console.log(recYac);

//using recStats array to create var recTD
var recTD = recStats[3];
//log for recStats
console.log(recTD);

//var games played currently at zero
var gamesPlayed = 0;

//calculate gamesPlayed plus one (++)
gamesPlayed ++;
console.log(gamesPlayed);

//calculate rushYard per rushCar
var yardsPCar = rushYard / rushCar;
//log for yardsPCar
console.log(yardsPCar);

//calculate recYard per recCat
var yardsPCat = recYard / recCat;
//log for yardsPCat
console.log(yardsPCat);

//calculate recYac per recCat
var yacPCat = recYac / recCat;
//log for yardsPCat
console.log(yacPCat);

//result for first game in concatenating string
var resultRush = ("Congratulations"+space+firstName+", in"+space+gamesPlayed+space+"game you had"+space+rushCar+space+"carr/y/ies, for"+space+rushYard+space+"yard/s,"+space+rushTD+space+"touchdown/s,"+space+rushFum+space+"fumble/s, and averaged"+space+yardsPCar+space+"yard/s per carry.");
//log and alert the Result
console.log(resultRush);
alert(resultRush);

//result for first game in concatenating string
var resultRec = ("Also"+space+firstName+", in"+space+gamesPlayed+space+"game you had"+space+recCat+space+"catch/es, for"+space+recYard+space+"yard/s,"+space+recYac+space+"yard/s after the catch,"+space+recTD+space+"touchdown/s, averaged"+space+yardsPCat+space+"yard/s per catch, and averaged"+space+yacPCat+space+"yard/s after the catch per catch.");
//log and alert the ResultRec
console.log(resultRec);
alert(resultRec);
