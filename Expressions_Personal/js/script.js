 /*
William Ward
6/11/14
Expressions Industry
 */

//alert("testing");

//creating a var for a space
var space = " ";
//today we will determine how many tickets each person will get to the baseball game

//First i would like to get introduced to the user
var firstName = prompt("Hello what is your name?");

//log to check my prompt works
 console.log(firstName);

 //creating concatenating string var welcome
 var welcome = ("Hello"+space+firstName+"!");

//alert and log using var welcome to greet the user
 console.log(welcome)
 alert(welcome);

 //var for the number of tickets
 var tickets = 40

 //creating concatenating string var intro
 var intro = (firstName+space+"today we have 40 tickets for the baseball game.");

//I alert and log using var intro to tell the user how many tickets there are
 console.log(intro)
 alert(intro);

 //create concatenating string var info
 var info = ("I am going to ask you how many tickets you need but I need to know how many tickets three of your four friends need as well.");

 //An alert and log using var info to tell the user what information i need
 console.log(info)
 alert(info);

 //create bobs var and ticket var
 var friend1 = "Bob"
 var bobsNumTick = 5;


 //create concatenating string var bobsTick
 var bobsTick = ("I know that your friend Bob already needs"+space+bobsNumTick+space+"tickets.");

 //inform user with var bobsTick that bob needs 5 already
 console.log(bobsTick)
 alert(bobsTick);

 //create a new total after bob
 newTickTot = tickets;
 newTickTot -= bobsNumTick;
 console.log(newTickTot);

 //create an array for users friends
 var friends = [prompt(firstName+space+"what is the name of your second friend?"), prompt(firstName+space+"what is the name of your third friend?"), prompt(firstName+space+"what is the name of your fourth friend?")];
console.log(friends)

 //turn array prompts into var
 var friend2 = friends[0];
 var friend3 = friends[1];
 var friend4 = friends[2];


 //alert the user to how many tickets sre left
 alert(firstName+space+"after we subtract"+space+friend1+"\'s"+space+bobsNumTick+space+"tickets we have"+space+newTickTot+space+"tickets.");

 //create var using a prompt for the number of tickets needed by the user
 var userTickets = prompt("How many tickets do you need?")

//calculate the new total after bob minus how many tickets you need
 var newTickTot2 = newTickTot - userTickets;

 //check log to see if it is accurate
 console.log(newTickTot2);

 //create concatenating string var userBobTick
 var userBobTick =("Ok so you grabbed"+space+userTickets+space+"tickets and"+space+friend1+space+"grabbed"+space+bobsNumTick+space+"tickets. That leaves"+space+newTickTot2+space+"tickets.");

 //alert user to how many tickets are left
 console.log(userBobTick);
 alert(userBobTick);

//create var using a prompt to find out how many tickets friend2 needs
 var frnd2Tick = prompt("How many tickets does"+space+friend2+space+"need?");

 //calculate newTickTot2 minus friend1's tickets to get newTickTot3
 var newTickTot3 = newTickTot2 - frnd2Tick;

 //check log to check accuracy
 console.log(newTickTot3);

 //create concatenating string var userBobF2Tick
 var userBobFr2Tick = (firstName+space+"has"+space+userTickets+","+space+friend1+space+"has"+space+bobsNumTick+", and"+space+friend2+space+"has"+space+frnd2Tick+space+"tickets: Leaving"+space+newTickTot3+space+"tickets.");

 //alert user to left over tickets
 console.log(userBobFr2Tick);
 alert(userBobFr2Tick);

 //create a var using a prompt to find out how many tickets friend3 needs
 var frnd3Tick = prompt("How many tickets does"+space+friend3+space+"need?");

 //calculate newTickTot3 minus frnd3Tick
 var newTickTot4 = newTickTot3 - frnd3Tick;

 //check log to check accuracy
 console.log(newTickTot4);

 //create concatenating string var userBobF23Tick
 var userBobF2F3Tick = (firstName+space+"has"+space+userTickets+","+space+friend1+space+"has"+space+bobsNumTick+","+space+friend2+space+"has"+space+frnd2Tick+space+", and"+space+friend3+space+"has"+space+frnd3Tick+space+"tickets: Leaving"+space+newTickTot4+space+"tickets.");

 //alert user to left of tickets
 console.log(userBobF2F3Tick);
 alert(userBobF2F3Tick);

 //create a var using a prompt to find out how many tickets friend4 needs
 var frnd4Tick = prompt("How many tickets does"+space+friend4+space+"need?");

 //calculate newTickTot3 minus frnd3Tick
 var newTickTot5 = newTickTot4 - frnd4Tick;

 //check log to check accuracy
 console.log(newTickTot5);

 //create concatenating string var userBobF23Tick
 var Result = (firstName+space+"has"+space+userTickets+","+space+friend1+space+"has"+space+bobsNumTick+","+space+friend2+space+"has"+space+frnd2Tick+space+","+space+friend3+space+"has"+space+frnd3Tick+space+", and"+space+friend4+space+"has"+space+frnd4Tick+space+"tickets: Leaving"+space+newTickTot5+space+"tickets.");

 //alert user to left of tickets
 console.log(userBobF2F3Tick);
 alert(userBobF2F3Tick);