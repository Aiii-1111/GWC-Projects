////variable
//assets
let playerSprite, npcSprite, itemSprite, walls, parkour;//sprites
let textBox,nextButton;//textBox
let emptyBg1, nightBg1, stationBg1;//backgrounds
let emptyBg2,nightBg2,stationBg2;
let playerSpriteImg,someone,coolGuy,randomGuy,robber;//sprite images
let titleScrnSprite,titleScrnImg;//title screen assets
let font;//

//game variables
let dialogue;
let dialogueCount = 0;
let collision = false
let nPaperCranes = 0;

dialogue = [
  ["player", "player", "player", "player", "player", "Someone", "Someone", "Someone", "Someone", "Someone", "Someone", "Player", "Someone", "Player","Player","player","Someone","player","Someone","player",//end of lv1
   "player","muggers","Player","Cool Guy","muggers","Player","Cool Guy","player","Cool Guy","Player","player","Cool Guy","player","Cool Guy","player","Narrator","Cool Guy","player","Cool Guy","player",//end of lv2
   "player","Random Guy","player","Random Guy","player","player","Random guy","Random Guy","Player","Random Guy",//end if lv3
   "Player","Player","Someone","Someone","Player","Player","Narrator"
   ], // Who is speaking
  [
    "...",
    "There's nothing here",
    "nothing to do or see or achieve",
    "I wonder...",
    "If I folded 1000 paper cranes and made a wish,\nCould I become *something*?",
    "sighhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
    "I am so lonelyyyyyyyyyyyyyyy~\nI have nobodyyyyyyyyyyyyyy~",
    "All on my own T-T",
    "!",
    "That sound...That smell...It's... ANOTHER HUMAN BEING >o<",
    "Oh my god you have no idea how glad I am to see another person,\n I've been going mad with just me and my pet rock, Geoffrey-with-a-G",
    "Right...do you by any chance know how to get out of here?",
    "Oh...right uhm well I don't know exactly where the exit is\n but I think I saw it over there somewhere",
    "Okay, thanks",
    "That guy seemed lonely...Is there anything I can give him to help?",
    "Hey take this, it's mine and I want you to look after it for me while I'm gone\n It's my music box",
    "???",
    "I'm leaving this with you. I'm going to come and get it back soon",
    "...!\nOkay!!",
    "Bye!\n see you later!",//end of lv1 lines
    "Woah look at this town\n It's so cool!",
    "Oi gimme all yo cash plz",
    "!!!",
    "Hey! It's not cool to mug people!\nGo away please!",
    "!!!\nO-Okay!",
    "Thanks, you saved me!",
    "Any time man\n You new around here?",
    "yeah",
    "It sucks that you had to go through that after just getting here\nI really hate this place, nothing but nasty stuff",
    "There's no way that fully true...Is there anything\nI can do to show him just how awesome and sparkly this place is?",
    "Here take this",
    "A bag of glitter?",
    "Yup, Open it",
    "But it will go everywhere if I open it",
    "Exactly",
    "Cool Guy Opens the bag of glitter and it\nit explodes into the sky",
    "Wow it's so pretty\nThe glitter looks like stars",
    "See, this place isn't so bad\nIt's nice if you look close enough",
    "Thank you mysterious stranger\nGood luck on your travels",
    "Thanks, see you later Cool Guy",  //end of lv2 lines
    "Woah this place is super busy...\nIs there a map anywhere?",
  "hey are you okay?",
  "yeah just lost. It's so busy here",
  "I know right. I can't stand it but unfortunately\nthere's nowhere else to go",
  "That's not true!\nI have an idea...",
  "Come with me!",
  "Woah it's so nice and quiet here\nI think I'll stay here for a bit",
  "Thank you so much and good luck with\n your travels stranger",
  "Thanks. See you around!",
  "Bye",//end of lv 3 lines
    "Hey, I'm back!\nDid you miss me?",
    "Woah this place looks nicer than I remember",
    "Hey You're back\nHere I took good care of you music box\n",
    "How was it, Did you manage\nto do what you wanted?",
    "...Yeah I guess I did",
    "But I'm really glad to be home",
    "The End!"
    
    
  
  ] // dialogue lines
];



////main code
function preload()
{
  //sprite imgs
  playerSpriteImg = loadImage("assets/left1.1.png");
  someone = loadImage("assets/pinkSprite.png");
  coolGuy = loadImage("assets/pSprite.png");
  randomGuy = loadImage("assets/blueSprite.png");
  //robber = loadImage("assets/dpSprite.png");
  //bg imgs
  titleScrnImg =loadImage("assets/titlescrn.jpg");
  emptyBg1 = loadImage("assets/bg1.1.jpg");
  emptyBg2 = loadImage("assets/bg1.2.jpg");
  nightBg1 = loadImage("assets/bg2.1.jpg");
  nightBg2 = loadImage("assets/bg2.2.jpg");
  stationBg1 = loadImage("assets/bg3.1.jpg");
  stationBg2 = loadImage("assets/bg3.2.jpg");
  //font
  font = loadFont("assets/EduAUVICWANTHand-VariableFont_wght.ttf");
}
function setup() 
{
  //creating the canvas 
  createCanvas(854, 480);

  nPaperCranes = 0;

  //creating sprites
  world.gravity.y = 9.81;
  //item
  itemSprite = new Sprite();
  itemSprite.x = -40;
  itemSprite.width  = 10,
  itemSprite.height = 10;
  itemSprite.collider = "static";
  
  //npc
  npcSprite = new Sprite(20, 20, "kinematic");
  npcSprite.x = -480;
  npcSprite.y = height-20;
  //player
  playerSprite = new Sprite(20, 20, "dynamic");
  playerSprite.x = 10;
  playerSprite.y = height - 10;
  playerSprite.rotationLock = true;
  playerSprite.image = playerSpriteImg;
  //text box & next button
  textBox = new Sprite(200, 50, 375, 75, "static");
  textBox.color = "white";
  nextButton = new Sprite(200, 100, 75, 20, "static");
  nextButton.text = "Next";
  nextButton.color = "#d4eafc";
  //game boundaries
  walls = new Group();
  walls.color = "#000000";
  new walls.Sprite(0, 0, 5, 960, "static");//left wall
  new walls.Sprite(-100, height, width * 2 + 200, 5, "static");  //floor
  new walls.Sprite(width, 0, 5, height * 2, "static");//right wall
  //obstacles
  parkour = new Sprite();
  parkour.width = 100;
  parkour.height = 5;
  parkour.x = -70;
  parkour.y = -200;
  parkour.collider = "static";
  //title screen
  titleScrnSprite = new Sprite()
  titleScrnSprite.image = titleScrnImg;
  titleScrnSprite.x = width/2;
  titleScrnSprite.y = height/2;
  titleScrnSprite.collider = "static";

  //text setup
  textSize(10);
  textFont(font);


}
function draw() 
{
  //create background based on level
  if(dialogueCount<20)
  {
    background(emptyBg1);
  }
  else if(dialogueCount<35)
  {
    background(nightBg1);
  }
  else if(dialogueCount<40)
  {
    background(nightBg2);
  }
  else if (dialogueCount<46)
  {
    background(stationBg1);
  }
  else if(dialogueCount<50)
  {
    background(stationBg2);
  }
  else
  {
    background(emptyBg2);
  }

  //on screen text
  fill(255);
  rect(width/2,7,130,15);//for seeing papercrane count regardless of bg color
  fill(0);
  text("Paper Cranes Folded: "+nPaperCranes,width/2,20);

  
  //movement
  if ((kb.pressing("up") || kb.pressing("w"))) {
    playerSprite.y += -4;
  }
  else if ((kb.pressing("right") || kb.pressing("d"))) {
    playerSprite.vel.x = 5;
  }
  else if ((kb.pressing("left") || kb.pressing("a"))) {
    playerSprite.vel.x = -5;
  }
  else 
  {
    playerSprite.vel.x = 0;
  }

  //title screen
  if(dialogueCount ==0 && titleScrnSprite.x ==width/2)  
  {
    if(titleScrnSprite.mouse.presses())
    {
      titleScrnSprite.x = -500;
      playerSprite.x = 10;
    }
  }
  
  //Level 1  
  if (dialogueCount < 4) //Initial MC monologue
  {
    textBox.text = dialogue[0][dialogueCount]+"\n"+dialogue[1][dialogueCount];
    if (nextButton.mouse.presses()) 
    {
      dialogueCount += 1;
      textBox.text = dialogue[0][dialogueCount]+"\n"+dialogue[1][dialogueCount];
    }
  }
  if(dialogueCount==4)//1st NPC appears
  {
    npcSprite.x = 480;
    npcSprite.y = height-10;
    npcSprite.image = someone;
    
  }
  if(playerSprite.collides(npcSprite))//When player touches NPC, play dialogue
  {
    collision = true;
  }
  if (dialogueCount < 15 && collision ==true) 
  {
    textBox.text = dialogue[0][dialogueCount]+"\n"+dialogue[1][dialogueCount];
    if (nextButton.mouse.presses()) 
    {
      dialogueCount += 1;
      textBox.text = dialogue[0][dialogueCount]+"\n"+dialogue[1][dialogueCount];
    }
  }
  if (dialogueCount==14)//item appears on screen
  {
    collision = false;
    parkour.x = 60;
    parkour.y = 430;
    parkour.color = "#e0dae8";
    itemSprite.x = 60;
    itemSprite.y = 425;
    if(playerSprite.collides(itemSprite))//player obtains item
    {
      itemSprite.x = -100;
      dialogueCount+=1;
    }
  }
  if(playerSprite.collides(npcSprite))//player gives item to npc 
  {
    collision = true
  }
  if (dialogueCount < 19 && collision ==true) 
  {
    textBox.text = dialogue[0][dialogueCount]+"\n"+dialogue[1][dialogueCount];
    if (nextButton.mouse.presses()) 
    {
      dialogueCount += 1;
      textBox.text = dialogue[0][dialogueCount]+"\n"+dialogue[1][dialogueCount];
    }
  }
  if (dialogueCount==19)//moving on to next level
  {
    collision = false;
    parkour.x = -250;
    if(playerSprite.x>790)
    {
      playerSprite.x = 10
      npcSprite.x = -70;
      dialogueCount+=1;
    }
  }

  //level 2
  if (dialogueCount < 29 && dialogueCount>19 ) //collision doesn't need to be true here
  {// player enters city
    textBox.text = dialogue[0][dialogueCount]+"\n"+dialogue[1][dialogueCount];
    if (nextButton.mouse.presses()) 
    {
      dialogueCount += 1;
      textBox.text = dialogue[0][dialogueCount]+"\n"+dialogue[1][dialogueCount];
    }
    if(dialogueCount>19 && dialogueCount<25)//mugger appears 
    {
      itemSprite.x = 400; //Item sprite used here as the mugger
      //itemSprite.image = 
    }
    else//mugger disappears
    {
      itemSprite.x = -90;
      //itemSprite.image = 
    }
  }
  if(dialogueCount == 23)//lv2 npc appears, dialogue continues until line 28 (see above if statement)
  {
    npcSprite.x = 480;
    npcSprite.y = height - 20;
    npcSprite.image = coolGuy
  }
  if(dialogueCount==29) // making lv2 parkour appear
  {
    itemSprite.x =760;
    itemSprite.y = 425;
    //itemSprite.image = ;
    parkour.color = "#877a8c";
    parkour.x = 750 ;
    parkour.y = 430;
    if(playerSprite.collides(itemSprite))//player obtains item
    {
      itemSprite.x = -100;
      dialogueCount+=1;
    }
  }
  if(dialogueCount==29 && playerSprite.collides(npcSprite)&&itemSprite.x ==-100)// dialogue to continues if item obtained and  player collides w/ npc
  {
    collision = true;

  }
  if (dialogueCount>29 && dialogueCount<39 && collision ==true)//to end of lv2 dialogue
  {
    textBox.text = dialogue[0][dialogueCount]+"\n"+dialogue[1][dialogueCount];
    if (nextButton.mouse.presses()) 
    {
      dialogueCount += 1;
      textBox.text = dialogue[0][dialogueCount]+"\n"+dialogue[1][dialogueCount];
    }  
  }
  if(dialogueCount==39)//going from lv2 to lv3
  {
    collision = false;
    parkour.x = -60;
    if(playerSprite.x>790)
    {
      playerSprite.x = 10;
      npcSprite.x = -70;
      dialogueCount+=1;
    }
  }
  //level 3
  if(dialogueCount>39 && dialogueCount<44)//start lv3 dialogue
  {
    textBox.text = dialogue[0][dialogueCount]+"\n"+dialogue[1][dialogueCount];
    if (nextButton.mouse.presses()) 
    {
      dialogueCount += 1;
      textBox.text = dialogue[0][dialogueCount]+"\n"+dialogue[1][dialogueCount];
    }
    if(dialogueCount>40)//makes npc Sprite appear
    {
    npcSprite.x =175
    npcSprite.image = randomGuy;
    itemSprite.y = height-20;
    }
  }
  if(dialogueCount==44)//lv3 parkour appears
  {
    collision = false;
    parkour.x = 450;
    parkour.y = 430;
    parkour.color = "#e0dae8";
    itemSprite.x = 460;
    itemSprite.y = 425;
    if(playerSprite.collides(itemSprite))//player obtains item
    {
      itemSprite.x = -100;
      dialogueCount+=1;
    }  
  }
  if(dialogueCount==45 && playerSprite.collides(npcSprite)&&itemSprite.x ==-100)// dialogue to continues if item obtained and  player collides w/ npc
  {
    collision = true
    parkour.x = -130;
  }
  if(dialogueCount>44 && collision==true && dialogueCount<49)
  {
    textBox.text = dialogue[0][dialogueCount]+"\n"+dialogue[1][dialogueCount];
    if (nextButton.mouse.presses()) 
    {
      dialogueCount += 1;
      textBox.text = dialogue[0][dialogueCount]+"\n"+dialogue[1][dialogueCount];
  }
  }//end of lv3 dialogue
  if(dialogueCount == 49 && playerSprite.x>=790)
  {
    playerSprite.x = 10;
    dialogueCount+=1;
  }
  
  //epilogue
  if(dialogueCount==50)
  {
    npcSprite.image = someone;
    npcSprite.x = 700;
  }
  if (dialogueCount>49 && dialogueCount<56)
  {
    textBox.text = dialogue[0][dialogueCount]+"\n"+dialogue[1][dialogueCount];
    if (nextButton.mouse.presses()) 
    {
      dialogueCount += 1;
      textBox.text = dialogue[0][dialogueCount]+"\n"+dialogue[1][dialogueCount];
    }
  }
  
  //obtaining paper cranes based on how far in the story the player has gone
  if (dialogueCount>=55)
  {
    nPaperCranes = 1000;
  }
  else if (dialogueCount>=49)
  {
    nPaperCranes = 999;
  }
  else if (dialogueCount>=39)
  {
    nPaperCranes = 800;
  }
  else if(dialogueCount >=19)
  {
    nPaperCranes = 500;
  }
  else if(dialogueCount >=4)
  {
    nPaperCranes = 200;
  }
  else
  {
    nPaperCranes = 0;
  }

}

//Ignore
  /*function playDialogue(end) 
  {
    if (dialogueCount < end) 
    {
      textBox.text = dialogue[0][dialogueCount]+"\n"+dialogue[1][dialogueCount];

      if (nextButton.mouse.presses()) {
        dialogueCount += 1;
        textBox.text = dialogue[0][dialogueCount]+"\n"+dialogue[1][dialogueCount];
      }
    }
  }*/
  //for debugging
  //fill("#00ffff")
  //text("(x,y)"+playerSprite.x+", "+playerSprite.y,width/2+100,20)
  //text("Dialogue Count: "+dialogueCount,700,50);

