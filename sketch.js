
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;
var myengine,myworld;
var gameState="onSling";
var bImg,bckImg;
var score=0;
function preload()
{
  getBackgroundImg();
}
function setup()
{
    createCanvas(1200,400);
    myengine=Engine.create();
    myworld=myengine.world;
    bird=new Bird(100,100,50,50);
    ground=new Ground(600,380,1200,50);
    ground1=new Ground(200,300,400,200);
    box1=new Box(720,310,70,70);
    pig1=new Pig(820,330,50,50);
    box2=new Box(920,310,70,70);
    log1=new Log(820,290,300,PI/2);
    
    
    box3=new Box(720,220,70,70);
    pig2=new Pig(820,240,50,50);
    box4=new Box(920,220,70,70);
    log2=new Log(820,200,300,PI/2);

    box5=new Box(820,130,70,70);
    log3=new Log(720,100,130,PI/8);
    log4=new Log(920,100,130,-PI/7);

    slng=new Slingshot(bird.mybodies,{x:200,y:120});
    //console.log(bird.mybodies);
}

function draw()
{ if(bckImg)
   background(bckImg);
  //background("white"); 
  
  noStroke();
  textSize(35);
  fill("white"); 
  text("Score:"+ score,width-300,50);
  Engine.update(myengine);
    bird.display();
    ground.display();
    ground1.display();
    box1.display();
    pig1.display();
    box2.display();
    log1.display();
    box3.display();
    pig2.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    slng.display();
    pig1.score();
    pig2.score();
}

function mouseDragged()
{
  if(gameState!=="launched")
  {
  Body.setPosition(bird.mybodies,{x:mouseX,y:mouseY});
  }
}

function mouseReleased()
{
  
  slng.fly();
 gameState="launched";
}

function keyPressed()
{
  if(keyCode===32)
  {
    slng.attach(bird.mybodies);
  }
  
}


async function getBackgroundImg()
{
  //call API using fetch.
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  console.log(response);
  var responseJSON=await response.json();
  dtime=responseJSON.datetime;
 console.log(dtime);
 var hour=dtime.slice(11,13);
 console.log(hour);
 if(hour>=06 && hour<=19)
 {
  bg="sprites/bg.png";
  
 }
 else
 {
  bg="sprites/bg2.jpg";
   }
  bckImg=loadImage(bg);
  console.log(bckImg);
}