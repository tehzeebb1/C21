var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  /*gameObject4 = createSprite(700, 100, 50, 50);
  gameObject4.shapeColor = "purple";*/
  
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect, fixedRect);
//movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

/*if(isTouching(movingRect,gameObject4))
{
  console.log("Hey! rectangle are touching")
  movingRect.shapeColor = "lightblue";
  gameObject4.shapeColor = "lightblue";
}
else{
  movingRect.shapeColor = "blue";
  gameObject4.shapeColor = "blue";
}*/
 
  drawSprites();
}

