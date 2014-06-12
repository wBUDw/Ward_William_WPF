
 /*
William Ward
6/11/14
Expressions Industry
 */

//alert("testing");

//average age of your parents and you

 //var for spaces
 var space = " ";

 //prompt for first name
var firstName = prompt("What is your first name?");
 //log firstName
 console.log(firstName);

 //Welcome the user
var welcome = "Welcome"+space+firstName+".";
//log welcome
 console.log(welcome);
 //alert welcome
 alert(welcome);

 //prompt for dads age
 var dadsAge = prompt(firstName+space+"what is your dad's age?");
 //cast dadsAge

 //log dadsAge
 console.log(dadsAge);

 //prompt for moms age
 var momsAge = prompt(firstName+space+"what is your mom's age?");
 //log momsAge
 console.log(momsAge);

 //prompt user for his age
 var yourAge = prompt(firstName+space+"how old are you?");
 //log yourAge
 console.log(yourAge);


 //calculate average age
 var averageAge = (Number(dadsAge)+Number(momsAge)+Number(yourAge))/3;
 //log averageAge
 console.log(averageAge);

 //var result in concatenating string
 var result = (firstName+space+"your dad is"+space+dadsAge+space+"years old, your mom is"+space+momsAge+", and you are"+space+yourAge+". That makes your average age"+space+parseInt(averageAge)+"." );
 //log result
 console.log(result);
 //alert result
 alert(result);
