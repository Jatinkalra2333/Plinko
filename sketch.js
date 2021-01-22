const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particle = []
var plinko = [];
var division = [];
var ground
var divisionHeight = 300;
var platform



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(600,height,1200,20);
  
  
}

function draw() {
  background(255,255,255);  
  for(var k = 0; k <=width;k = k + 80){
    division.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }
    for(var j = 40; j <=width; j=j+50)
    {
      plinko.push(new Plinko(j,75));
    }
    for(var j = 15; j <= width-10; j=j+50)
    {
      plinko.push(new Plinko(j,175));
    }
  




  if(frameCount%90===0){
    particle.push(new Particle(random(width/2-10, width/2+10),10,10));
  }


for(var j = 0; j < particle.length; j++){

  particle[j].display();
}
for (var k = 0; k < division.length; k++) {
  
  division[k].display();
}

  ground.display();
 
  




  drawSprites();
}