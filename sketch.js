var car1,car2,car3,car4,wall1,wall2,wall3;
var speed1,weight1,speed2,weight2,speed3,weight3,speed4,weight4;
var obstacle1,obstacle2,obstacle3,obstacle4;
var x;
var thickness1,thickness2,thickness3,thickness4;
function setup() {
  createCanvas(1600,400);
  obstacle1=createSprite(1500,50,20,100);
  obstacle1.shapeColor="blue";
  speed1=random(55,90);
  weight1=random(400,1500);
  car1= createSprite(50,50,20,5);
  car1.velocityX=speed1;
  car1.shapeColor="white";
  wall1=createSprite(800,100,1600,2);
  wall1.shapeColor=(80,80,80);
  obstacle2=createSprite(1500,150,20,100);
  obstacle2.shapeColor="blue";
  speed2=random(55,90);
  weight2=random(400,1500);
  car2= createSprite(50,150,20,5);
  car2.velocityX=speed2;
  car2.shapeColor="white";
  wall2=createSprite(800,200,1600,2);
  wall2.shapeColor=(80,80,80);
  obstacle3=createSprite(1500,250,20,100);
  obstacle3.shapeColor="blue";
  speed3=random(55,90);
  weight3=random(400,1500);
  car3= createSprite(50,250,20,5);
  car3.velocityX=speed3;
  car3.shapeColor="white";
  wall3=createSprite(800,300,1600,2);
  wall3.shapeColor=(80,80,80);
  obstacle4=createSprite(1500,350,20,100);
  obstacle4.shapeColor="blue";
  speed4=random(55,90);
  weight4=random(400,1500);
  car4= createSprite(50,350,20,5);
  car4.velocityX=speed4;
  car4.shapeColor="white";
}

function draw() {
  background("black");
  carTouch();
  drawSprites();
}

function carTouch(){
  if(car1.isTouching(obstacle1)){
    x=(0.5*weight1*speed1*speed1)/22500;
    car1.velocityX=0;
    if(x<=100){
      car1.shapeColor="green";
    }else if(x>100 && x<180){
      car1.shapeColor="yellow";
    }else if(x>=180){
      car1.shapeColor="red";
    }
  }

  if(car2.isTouching(obstacle2)){
    x=(0.5*weight2*speed2*speed2)/22500;
    car2.velocityX=0;
    if(x<=100){
      car2.shapeColor="green";
    }else if(x>100 && x<180){
      car2.shapeColor="yellow";
    }else if(x>=180){
      car2.shapeColor="red";
    }
  }

  if(car3.isTouching(obstacle3)){
    x=(0.5*weight3*speed3*speed3)/22500;
    car3.velocityX=0;
    if(x<=100){
      car3.shapeColor="green";
    }else if(x>100 && x<180){
      car3.shapeColor="yellow";
    }else if(x>=180){
      car3.shapeColor="red";
    }
  }

  if(car4.isTouching(obstacle4)){
    x=(0.5*weight4*speed4*speed4)/22500;
    car4.velocityX=0;
    if(x<=100){
      car4.shapeColor="green";
    }else if(x>100 && x<180){
      car4.shapeColor="yellow";
    }else if(x>=180){
      car4.shapeColor="red";
    }
  }
}