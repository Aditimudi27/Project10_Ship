var ship,ShipImg;
var sea,seaImg;

function preload(){
  seaImg=loadImage("sea.png");
  ShipImg=loadAnimation("ship-1.png","ship-2.png");

}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,180,400,20);
  sea.addImage("sea",seaImg);
  sea.x = sea.width /8;
  sea.scale=0.3;

  ship= createSprite(200,180,400,20);
  ship.addAnimation("movingShip", ShipImg);
  ship.scale=0.3;

}

function draw() {
  background("blue");
  sea.velocityX=-4;
  if (sea.x < 0){
    sea.x = sea.width/8;
  }
  drawSprites();
  }