var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload() {

  monkeyimg = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 600);
  monkey = createSprite(50, 530, 30, 60);
  monkey.addAnimation("monkey", monkeyimg);
  monkey.scale = 0.2

  ground = createSprite(300, 590, 600, 20);

  FoodGroup = new Group()
  ObstaclesGroup = new Group()
  
  score=0
  

}


function draw() {
background("white")
  if (keyDown("space")) {
    monkey.velocityY = -3
  }
  monkey.velocityY = monkey.velocityY + 0.3

  monkey.collide(ground);

  spawnFood();

  spawnObstacles();

  if (ObstaclesGroup.isTouching(monkey)) {
    monkey.velocityY = 0;
    ObstaclesGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    ObstaclesGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
  
  }
  
score=score+Math.round(frameCount/4)
  
  textSize(12)
  text("score="+score,300,300)
  
  
  
  
  drawSprites();
}




function spawnFood() {
  if (frameCount % 80 === 0) {
    banana = createSprite(600, 250, 40, 10);
    banana.y = random(120, 200);
    banana.velocityX = -5;
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    banana.addImage(bananaImage);
    banana.scale = 0.1
    FoodGroup.add(banana);
  }
}

function spawnObstacles() {
  if (frameCount % 130 === 0) {
    obstacle = createSprite(600, 550, 40, 10);
    obstacle.velocityX = -5;
    obstacle.lifetime = 300;
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.25;
    ObstaclesGroup.add(obstacle);
  }
}