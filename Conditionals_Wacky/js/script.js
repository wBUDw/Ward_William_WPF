
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
 (name==="") ? name = prompt("Please tell me what your name is.") : alert("Hello "+name +".");

 //log name
 console.log(name);

 //alert user what info we need
 alert(name+" we would like to know how many kills you got in World of Tanks. We need your amount from five games.");

