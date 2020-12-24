var wall,thickness;
var bullet,speed, weight;
function setup() {
  createCanvas(1275,500);
   bullet=createSprite(50, 200, 50, 50);
   bullet.shapeColor="grey";
   bullet.velocityX=9;  
   thickness= Math.round(random(20,90))
   wall=createSprite(1100, 200, thickness, height/2);
   wall.shapeColor="black";
   speed= Math.round(random(233,321));
   weight= Math.round(random(30,32));
}

function draw() {
  background("lightblue");

 if ( hascollided(bullet, wall))
 {
   bullet.velocityX=0;
   var damage=0.5 *weight *speed *speed/(thickness *thickness* thickness);
 }
  if(damage>10)
  {
    wall.shapeColor="red";
  }

  if(damage<10)
  {
    wall.shapeColor="green";
  }

drawSprites();
}
function hascollided(bullet, wall)
{
 bulletRightEdge=bullet.x +bullet.width;
 wallLeftEdge=wall.x;
 if(bulletRightEdge>=wallLeftEdge)
{
return true
}
return false;

}