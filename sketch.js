
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score;
var survivalTime = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
  ground=createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
}


function draw() {
 
 background(225);
 stroke("white");
 textSize(20);
 fill("white");
text("Score" + score, 500,50);
  
stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("SurvivalTime:" + survivalTime,100,50);
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
     if(keyDown("space")) {
      monkey.velocityY = -12;
    }
   
     monkey.velocityY = monkey.velocityY + 0.8;
  
     monkey.collide(ground);
   spawnObstacles();
   Foodie();
  drawSprites();

}



function spawnObstacles(){
    if (frameCount % 60 === 0) {
    obstacle = createSprite(330,325,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.15;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
    }
}

function Foodie(){
    if (frameCount % 80 === 0) {
      banana = createSprite(400,Math.round(random(120,200)),20,30);
      banana.addImage(bananaImage);
      banana.scale = 0.1;
      banana.velocityX = -5;
      banana.lifeTime =200;
      FoodGroup.add(banana);
    }
}
