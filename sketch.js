var bg,bgImg;
var cat,catImg;
var mouse,mouseImg;
var END=2;
var gameState="PLAY";

function preload()
{
  bgImg=loadImage("garden.png");
  cat_Img=loadImage("cat1.png"); 
  catAni=loadAnimation("cat2.png","cat3.png");
  mouseAni=loadAnimation("mouse2.png","mouse3.png");
  mouseImg=loadImage("mouse3.png");
  mousegift=loadAnimation("mouse1.png");
}

function setup()
{
  createCanvas(800,600);
  
  bg=createSprite(200,200,1000,800);
  bg.addImage(bgImg);
  bg.scale=1.2;
  
  cat=createSprite(550,550);
  cat.addImage(cat_Img);
  cat.scale=0.1;
  cat.setCollider("rectangle",-170,0,800,800,0);
  
  mouse=createSprite(50,550);
  mouse.addImage(mouseImg);
  mouse.scale=0.09;
  mouse.setCollider("rectangle",0,0,800,900,0);
}

function draw()
{
  background(255);

  if(cat.x - mouse.x < (cat.width-mouse.width)/2)
    {
      cat.velocityX=0; 
      cat.pause();
      mouse.addAnimation("gift_mouse",mousegift);
      cat.scale=0.1;
      mouse.changeAnimation("gift_mouse");
    }
  
  keyPress();
 
  drawSprites();
}

function  keyPress()
{
  if(keyDown("left"))
   {
     mouse.addAnimation("mouse_teasing",mouseAni);
     mouse.changeAnimation("mouse_teasing");
     
     cat.addAnimation("cat_running",catAni);
     cat.changeAnimation("cat_running");
     cat.velocityX=-4;
     cat.scale=0.1;
   }
}
