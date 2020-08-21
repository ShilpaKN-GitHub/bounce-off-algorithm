var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(400,100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = +5;

  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -5;
}

function draw() {
  background(0,0,0);

  var xCenterDistance = fixedRect.width/2 + movingRect.width/2;
  var yCenterDistance = fixedRect.height/2 + movingRect.height/2;

  var rightDistance = movingRect.x - fixedRect.x;
  var leftDistance = fixedRect.x - movingRect.x;

  var topDistance = movingRect.y - fixedRect.y;
  var bottomDistance = fixedRect.y - movingRect.y;

  if (rightDistance < xCenterDistance && leftDistance < xCenterDistance) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }

  if (topDistance < yCenterDistance && bottomDistance < yCenterDistance)
  {
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }

  drawSprites();
}