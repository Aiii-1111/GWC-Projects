//Move the catcher with wasd &  arrow keys to catch the falling objects. 
/* VARIABLES */;
let catcher, fallingObject;
let pauseButton
let bgImg,font;

let paused = false;
let score = 0;
let difficulty  = 4;
let catcherVel = 5;

/* PRELOAD LOADS FILES */
function preload() 
{
  bgImg = loadImg("bg.webp");
  font = loadFont("Caveat-Regular.ttf");
}

/* SETUP RUNS ONCE */
function setup() 
{
  createCanvas(400, 400);


  //Create catcher 
  catcher = new Sprite(200, 380, 100, 20);
  catcher.color = color(95, 158, 160);
  catcher.collider = "kinematic";

  //Create falling object
  fallingObject = new Sprite(100, 0, 10);
  fallingObject.color = color(0, 128, 128);
  fallingObject.vel.y = 4;

  //create pause button
  pauseButton = new Sprite(10, 10, 10, 10);
  pauseButton.collider = "static";
  pauseButton.color = "#d4e4ff";

}

/* DRAW LOOP REPEATS */
function draw() 
{
  background(bgImg);
  // Draw directions to screen
  fill(255);
  textSize(12);
  textFont(font);
  text("Move the \ncatcher with the \nwasd or\narrow keys to \ncatch the falling \nstars! .", width - 100, 20);
  text("Score: " + score, 50, 15);

  //If fallingObject reaches the bottom, move back to random position at top and decrement the score
  if (fallingObject.y >= height) 
  {
    fallingObject.vel.x = 0;
    fallingObject.y = 0;
    fallingObject.x = Math.floor(Math.random() * width) + 1;
    fallingObject.vel.y = Math.floor(Math.random() * 3) + difficulty;
    score -= 1;
  }
  //move the catcher
  if (kb.pressing("left") || kb.pressing("a")) 
  {
    catcher.vel.x = -catcherVel;
  }
  else if (kb.pressing("right") || kb.pressing("d")) 
  {
    catcher.vel.x = catcherVel;
  }
  else 
  {
    catcher.vel.x = 0;
  }

  //keep catcher within screen boundaries
  if (catcher.x >= width - 50) 
  {
    catcher.x = width - 50;
  }
  else if (catcher.x <= 50) 
  {
    catcher.x = 50;
  }

  //move fallingObject to top when it hits the catcher and increment score
  if (fallingObject.collides(catcher)) 
  {
    score += 1
    fallingObject.vel.x = 0;
    fallingObject.y = 0;
    fallingObject.x = Math.floor(Math.random() * width) + 1;
    fallingObject.vel.y = Math.floor(Math.random() * 3) + difficulty;
  }
  //handle player win/lose events
  textSize(20);
  if (score < 0) 
  {
    pause();
    text("you lose\npress the button in the corner\n to play again!", width / 2-100, height / 2);
    if (pauseButton.mouse.presses()) 
    {
      score = 0;
      resume();
    }

  }
  else if (score > 9) 
  {
    pause();
    text("You Win!\npress the button in the corner\nto play again!", width / 2-100, height / 2);
    if (pauseButton.mouse.presses()) 
    {
      score = 0;
      difficulty+=2;
      catcherVel+=2; // increases the difficulty whenever a player wins
    }
  }

  //pause & resume the game
  if (pauseButton.mouse.presses()) 
  {
    if (paused == false) 
    {
      pause();
    }
    else 
    {
      resume(Math.floor(Math.random() * 3) + 4);
    }
  }

}
/*FUNCTIONS*/

function pause() 
{
  fallingObject.vel.y = 0;
  catcher.collider = "static";
  paused = true;
}
function resume(fallingObjVel) 
{
  fallingObject.vel.x = 0;
  fallingObject.vel.y = fallingObjVel;
  catcher.collider = "kinematic";
  paused = false;
}

/*there is a bug somewhere as sometimes, the ball randomly disappears and you can't carry on playing so if you find it let me know please!!!*/
