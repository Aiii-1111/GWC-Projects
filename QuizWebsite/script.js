//Functions for question outcomes
function cakeOutcome(cake)
{
  if(cake==1) //determine which option  has been clicked
  {
    cakeScore = 1;
  }
  else if (cake == 2)
  {
    cakeScore = 2;
  }
  else
  {
    cakeScore = 3;
  }
  console.log(cakeScore);
  questionsAnswered+=1;
  
  cake1.removeEventListener("click",cakeOutcome1);//so users can't spam click buttons
  cake2.removeEventListener("click",cakeOutcome2);
  cake3.removeEventListener("click",cakeOutcome3);

  if(questionsAnswered == nQuestions)
  {
    console.log("The quiz is complete!");
    updateResult();
  }
}
const cakeOutcome1 = function(){cakeOutcome(1);} //pre assigning parameters to the functions
const cakeOutcome2 = function(){cakeOutcome(2);}
const cakeOutcome3 = function(){cakeOutcome(3);}

function kirbyOutcome(kirby)
{
  if(kirby==1)//determine which option  has been clicked
  {
    kirbyScore = 1;
  }
  else if (kirby == 2)
  {
    kirbyScore = 2;
  }
  else
  {
    kirbyScore = 3;
  }
  console.log(kirbyScore);
  questionsAnswered+=1;
  
  kirby1.removeEventListener("click",kirbyOutcome1);//so users can't spam click buttons
  kirby2.removeEventListener("click",kirbyOutcome2);
  kirby3.removeEventListener("click",kirbyOutcome3);

  if(questionsAnswered == nQuestions)
  {
    console.log("The quiz is complete!");
    updateResult();
  }  
}
const kirbyOutcome1 = function(){kirbyOutcome(1);} //pre assigning parameters to the functions
const kirbyOutcome2 = function(){kirbyOutcome(2);}
const kirbyOutcome3 = function(){kirbyOutcome(3);}

function pjskOutcome(pjsk)
{
    if(pjsk==1) //determine which option  has been clicked
  {
    pjskScore = 1;
  }
  else if (pjsk == 2)
  {
    pjskScore = 2;
  }
  else
  {
    pjskScore = 3;
  }
  console.log(pjskScore);
  questionsAnswered+=1;
  
  pjsk1.removeEventListener("click",pjskOutcome1); //so users can't spam click buttons
  pjsk2.removeEventListener("click",pjskOutcome2);
  pjsk3.removeEventListener("click",pjskOutcome3);

  if(questionsAnswered == nQuestions)
  {
    console.log("The quiz is complete!");
    updateResult();
  }  
}
const pjskOutcome1 = function(){pjskOutcome(1);} //pre assigning parameters to the functions
const pjskOutcome2 = function(){pjskOutcome(2);}
const pjskOutcome3 = function(){pjskOutcome(3);}

function updateResult()
{
  totScore = cakeScore+kirbyScore+pjskScore;

  if(totScore<=3)
  {
    document.getElementById("result").innerHTML = "You are the funny friend! you love making your friends laugh by sending them silly memes!";
  }
  else if (totScore>3 && totScore<=6) 
  {
    document.getElementById("result").innerHTML= "You are the hardworking friend! you sometimes overwork yourself and get tired so make sure to take a break !!";
  }
  else
  {
    document.getElementById("result").innerHTML = "You are the cool friend! you're the best dressed member of the group and are always cool as a cucumber lol";
  }
  
}

//set up question variables//
let nQuestions = 3;//overall number of questions
let questionsAnswered = 0; //number of questions answered
let totScore = 0;

let cakeScore = 0; //get all scores & inputs for question 1
let cake1 = document.getElementById("q1a1");
let cake2 = document.getElementById("q1a2");
let cake3 = document.getElementById("q1a3");

let kirbyScore = 0;//get all scores & inputs for question 2
let kirby1 = document.getElementById("q2a1");
let kirby2 = document.getElementById("q2a2");
let kirby3 = document.getElementById("q2a3");

let pjskScore = 0;//get all scores & inputs for question 3
let pjsk1 = document.getElementById("q3a1");
let pjsk2 = document.getElementById("q3a2");
let pjsk3 = document.getElementById("q3a3");

//Creating event listeners//
//question 1 event listeners
cake1.addEventListener("click",cakeOutcome1);
cake2.addEventListener("click",cakeOutcome2);
cake3.addEventListener("click",cakeOutcome3);

//question 2 event listeners
kirby1.addEventListener("click",kirbyOutcome1);
kirby2.addEventListener("click",kirbyOutcome2);
kirby3.addEventListener("click",kirbyOutcome3);

//question 3 event listeners
pjsk1.addEventListener("click",pjskOutcome1);
pjsk2.addEventListener("click",pjskOutcome2);
pjsk3.addEventListener("click",pjskOutcome3);

//restart the quiz//
restart  = document.getElementById("restart")
restart.addEventListener("click",reset)

function reset() 
{
  nQuestions = 3;//overall number of questions
  questionsAnswered = 0; //number of questions answered
  totScore = 0;

  cakeScore = 0; 
  kirbyScore = 0;
  pjskScore = 0; 
  
  document.getElementById("result").innerHTML = " "

  //question 1 event listeners
  cake1.addEventListener("click",cakeOutcome1);
  cake2.addEventListener("click",cakeOutcome2);
  cake3.addEventListener("click",cakeOutcome3);

  //question 2 event listeners
  kirby1.addEventListener("click",kirbyOutcome1);
  kirby2.addEventListener("click",kirbyOutcome2);
  kirby3.addEventListener("click",kirbyOutcome3);

  //question 3 event listeners
  pjsk1.addEventListener("click",pjskOutcome1);
  pjsk2.addEventListener("click",pjskOutcome2);
  pjsk3.addEventListener("click",pjskOutcome3);
}
