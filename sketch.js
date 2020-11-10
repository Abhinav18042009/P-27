
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Bob1,Bob2,Bob3,Bob4,Bob5;
var Roof1;
var Rope1,Rope2,Rope3,Rope4,Rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	Bob1 = new Bob(200,380,100);
	Bob2 = new Bob(300,380,100);
	Bob3 = new Bob(400,380,100);
	Bob4 = new Bob(500,380,100);	
	Bob5 = new Bob(600,380,100);
	Roof1 = new Roof(width/2, 80, 500,30);
	Rope1 = new Rope(Bob1.body,Roof1.body,-200,0);
	Rope2 = new Rope(Bob2.body,Roof1.body,-100,0);
	Rope3 = new Rope(Bob3.body,Roof1.body,0,0);
	Rope4 = new Rope(Bob4.body,Roof1.body,100,0);
	Rope5 = new Rope(Bob5.body,Roof1.body,200,0);
	Engine.run(engine);
}


function draw() {
  background(200,200,200);
  rectMode(CENTER);
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  Roof1.display();
  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();
  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:-500,y:-105});
	}
}



