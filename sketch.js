var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  speed = random -(55,90);
  weight = random(400,1500);

  car = createSprite(20,200,50,20);
  car.velocityX = speed;
  
  wall = createSprite(1550,390,20,100)
  wall.shapecolor = "black";

  deformation = 0.5*weight*speed*speed/22500
}

function draw() {
  background(255,255,255); 
  
  if(wall.x - car.x < wall.width/2 + car.width/2 && deformation < 100){
    car.shapecolor = "green"; 
    car.velocityX = 0;
  }

  if(wall.x - car.x < wall.width/2 + car.width/2 &&  100 < deformation < 180 ){
    car.shapecolor = "yellow";
    car.velocityX = 0; 
  }
  drawSprites();
}