
 /*
William Ward
6/18/14
Conditionals Industry
 */

//alert("testing");

 //Creating a conditional for turning in your score to a game

 //Prompt User for name
 var name = prompt("What is your name?");

 //verify they entered their name with a ternary
 //welcome user or re-prompt for name
 (name==="") ? name = prompt("Please enter your name this time.") : alert("Hello "+name +".");

 //log name
 console.log(name);

 //var for info for the user
 var info = name+", I will need to know what team you are on, what team you played, how many points your team scored and how many points your opponent scored.";

 //log what info we will be requiring of the user
 console.log(info);

 //Alert user to what info we will be requiring of them
 alert(info);

 //prompt for the team the user was on
  var teams = [prompt(name+", what team do you play for?") , prompt(name+", what team did you play?")];

 //verify they did not leave the the prompt teams[0] blank
 if(teams[0]===""){

     //re-prompt for teams[0]
     teams[0] = prompt(name+", you did not enter anything. Please tell me what team you play for?");

    //log teams[0]
     console.log(teams[0])
 }

 //verify they did not leave the the prompt teams[1] blank
 if(teams[1]===""){

     //re-prompt for teams[1]
     teams[1] = prompt(name+", you did not enter anything. Please what team did you play?");

     //log teams[0]
     console.log(teams[1])
 }

 //log teams
 console.log(teams);

 //prompt for the scores of the game the user was in
 var scores = [prompt(name+", what was your score?") , prompt(name+", what was the other team's score?")];

 //verify that prompt scores[0] is a number or not blank
 if (isNaN(scores[0]) || scores[0]===""){

     //re-prompt for scores[0]
     scores[0] = prompt(name+", you did not enter anything or was not a number. Please what was your score?");

     //log scores[0]
     console.log(teams[0])
 }

 //verify that prompt scores[1] is a number or not blank
 if (isNaN(scores[1]) || scores[1]===""){

     //re-prompt for scores[1]
     scores[1] = prompt(name+", you did not enter anything or was not a number. Please what was their score?");

     //log scores[1]
     console.log(teams[1])
 }

 //log teams
 console.log(scores);

 //get the score diff to determine win,lose, tie.
 var scoreDiff = scores[0]-scores[1];

 // if for the result
 if (scoreDiff > 0){

     //var for the result if scoreDiff is greater than 0
     var result1 = name+" your "+teams[0]+" played against the "+teams[1]+". The score of the game was, "+teams[0]+" "+scores[0]+", and the "+teams[1]+" "+scores[1]+". The "+teams[0]+" beat the "+teams[1]+" by "+scoreDiff+" points.";

     //log result
     console.log(result1);

     //alert result
     alert(result1);

 }else if (scoreDiff===0){

     //var for the result if scoreDiff is equal to 0
     var result2 = name+" your "+teams[0]+" played against the "+teams[1]+". The score of the game was, "+teams[0]+" "+scores[0]+", and the "+teams[1]+" "+scores[1]+". The "+teams[0]+" tied with the "+teams[1]+".";

     //log result
     console.log(result2);

     //alert result
     alert(result2);

 }else{

     //var for the result if scoreDiff is less than 0
     var result3 = name+" your "+teams[0]+" played against the "+teams[1]+". The score of the game was, "+teams[1]+" "+scores[1]+", and the "+teams[0]+" "+scores[0]+". The "+teams[1]+" beat the "+teams[0]+" by "+Number(scoreDiff*-1)+" points.";

     //log result
     console.log(result3);

     //alert result
     alert(result3);

 }
