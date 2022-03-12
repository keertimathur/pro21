var supermans
var crystal
var money
var road
var cashG
var diamondsG
var score=0;
var bombImage
var bombG
var gameoverImg
var gameState;
var END
var PLAY;
var restart;

function preload(){
  supermans=loadImage("superman.png");
  crystal=loadImage("diamonds.png");
  money=loadImage("cash.png");
  road=loadImage("Road.png");
  bombImage=loadImage("bomb.png");
  gameoverImg=loadImage("gameOver.png");
  restart=loadImage("restart.png")
}

function setup(){
     createCanvas(windowWidth,windowHeight);
  path=createSprite(width/2,200);
  path.addImage("p",road);
  path.velocityY=50

  superman=createSprite(300,300,50,50);
  superman.addImage("p",supermans);
  superman.scale=0.15
  cashG=new Group();
  diamondsG=new Group();
  bombG=new Group ();

  
  


}

function draw(){
  background("black");



  if (path.y>400){
    path.y=0;
  }
superman.x=World.mouseX;

if (superman.isTouching(diamondsG)){
  diamondsG.destroyEach();
  score=score+30
}

if(superman.isTouching(cashG)){
  cashG.destroyEach();
  score=score+10;
  
}



if (superman.isTouching(bombG)){
     gameState=END;

 bombG.destroyEach();
  score=0;
  cashG.destroyEach();
  diamondsG.destroyEach();
  superman.destroy();

 cashG.setVelocityYEach(0);
  diamondsG.setVelocityYEach(0);
  bombG.setVelocityYEach(0);
  superman.velocityY=0
   path.velocityY=0
   diamondsG.setLifetimeEach(0);

   gameover=createSprite(700,300,50,50);
  gameover.addImage("g",gameoverImg);
  gameover.scale=2;
//restarts=createSprite(700,500,50,50);
//restarts.addImage("r",restart);
//restarts.scale=0.2

//if(mousePressedOver(restarts)){
 // window.location.reload();

//}

}


createDiamonds();
spawncash();
spawnBomb();


  drawSprites();
textSize(30);
fill("cyan");
text("Score-"+score,10,30);

}

function createDiamonds()
{
if(World.frameCount%30==0)
{
  diamonds=createSprite(Math.round(random(70,920),40,30,30));
  diamonds.addImage("d",crystal);
  diamonds.scale=0.13
  diamonds.velocityY=20;
  diamonds.lifetime=20;
  diamondsG.add(diamonds);
}
}

function spawncash(){
  if(World.frameCount%60==0)
  {
    cash=createSprite(Math.round(random(70,900),50,20,20));
    cash.addImage("c",money);
    cash.scale=0.13;
    cash.velocityY=20;
    cash.lifetime=20;
    cashG.add(cash);
  }
}

function spawnBomb(){
  if(World.frameCount/40==2)
  {
    bomb=createSprite(Math.round(random(50,1000),30,30,30));
    bomb.addImage("b",bombImage);
    bomb.scale=0.13;
    bomb.velocityY=20;
    bomb.lifetime=30;
    bombG.add(bomb);

  }

}


