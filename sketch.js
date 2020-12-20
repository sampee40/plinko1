const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var d1, d2, d3, d4, d5, d6, d7;
var particles = [];
var plinkos = [];

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;
  
  

  ground = new Ground(0, 725, 1200, 10);

  d1 = new division(0,680,10,200);
  d2 = new division(80,680,10,200);
  d3 = new division(160,680,10,200);
  d4 = new division(240,680,10,200);
  d5 = new division(320,680,10,200);
  d6 = new division(400,680,10,200);
  d7 = new division(480,680,10,200);


  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,75,10));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175,10));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275,10));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,375,10));
     
  }





}

function draw() {
  background("orange");  
  Engine.update(engine);

   ground.display();

   d1.display();
   d2.display();
   d3.display();
   d4.display();
   d5.display();
   d6.display();
   d7.display();
   d8.display();
  d9.display();
  d10.display();
  for (var i = 0; i < plinkos.length; i++) {
     
   plinkos[i].display();
   
 }
 
 if(frameCount%60===0){
  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  
}

for (var j = 0; j < particles.length; j++) {
 
   particles[j].display();
 }


  drawSprites();
}