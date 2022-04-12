var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage, obstacles, obstacleImg1, obstacleImg2, obstacleImg3, obstacleImg4, obstacleImg5, obstacleImg6;


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");

  obstacleImg1= loadImage("obstacle1.png");
  obstacleImg2= loadImage("obstacle2.png");
  obstacleImg3= loadImage("obstacle3.png");
  obstacleImg4= loadImage("obstacle4.png");
  obstacleImg5= loadImage("obstacle5.png");
  obstacleImg6= loadImage("obstacle6.png");

}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();

  spawnObstacles();

  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}
function spawnObstacles()
{
  //write code here to spawn the obstacles
  if (frameCount % 120 === 0){
    obstacles= createSprite(600,165,10,40);
    obstacles.velocityX= -3;
    var rand= Math.round(random(1,6));
    //switch is used to randomly put the obstacles on the screen
    switch(rand){
      case 1:obstacles.addImage(obstacleImg1);
      break;
      case 2:obstacles.addImage(obstacleImg2);
      break;
      case 3:obstacles.addImage(obstacleImg3);
      break;
      case 4:obstacles.addImage(obstacleImg4);
      break;
      case 5:obstacles.addImage(obstacleImg5);
      break;
      case 6:obstacles.addImage(obstacleImg6);
      break;
      default : break;
    }
    //scale is used to decrease the size of the obstacle by half
    obstacles.scale=0.5;
    //lifetime is used so that the code doesn't leak and cause problem
    obstacles.lifetime=200;
  }
}
