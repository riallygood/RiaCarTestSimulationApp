var car, wall, speed, weight;
function setup() {
  var canvas = createCanvas(1600,800);
  speed = random(55,90); 
  weight = random(400,1500); 
  car = createSprite(50,200,80,80);
  wall = createSprite(1500,200,60,height/2);
  car.velocityX = speed;

}
function draw() {
  background("black");
  if(wall.x-car.x <= car.width/2+wall.width/2){
    car.velocityX=0;
    var deformation = (0.5*weight*speed*speed)/22500;
    if (deformation < 100){
      car.shapeColor = rgb(0, 255, 0);
    }
    else if (deformation > 100 && deformation < 180){
      car.shapeColor = rgb(230, 230, 0);
    }
    else  {
      car.shapeColor = rgb(255, 0, 0);
    }
  }

  drawSprites();
}