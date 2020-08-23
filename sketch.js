var fixedRect, movingRect;

function setup()
{
  createCanvas(1200,800);

  fixedRect = createSprite(400,100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = +5;

  movingRect = createSprite(400, 500, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -5;
}

function draw()
{
  background(0);

  bounceOff(movingRect, fixedRect);

  drawSprites();
}

function bounceOff(object1, object2)
{
  var xCenterDistance = object2.width/2 + object1.width/2;
  var yCenterDistance = object2.height/2 + object1.height/2;

  var rightDistance = object1.x - object2.x;
  var leftDistance = object2.x - object1.x;

  var topDistance = object1.y - object2.y;
  var bottomDistance = object2.y - object1.y;

  if (rightDistance < xCenterDistance && leftDistance < xCenterDistance)
  {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }

  if (topDistance < yCenterDistance && bottomDistance < yCenterDistance)
  {
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  }
}
