
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var circle1,circle2,circle3,circle4,circle5,Roof,Rope1,Rope2,Rope3,Rope4,Rope5;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	circle1=new rename(400,600);
	circle2=new rename(300,600);
	circle3=new rename(200,600);
	circle4=new rename(500,600);
	circle5=new rename(600,600);
	Roof=new roof();
	Rope1=new rope(circle3.body,Roof.body,-200,0);
	Rope2=new rope(circle2.body,Roof.body,-100,0);
	Rope3=new rope(circle1.body,Roof.body,0,0);
	Rope4=new rope(circle4.body,Roof.body,+100,0);
	Rope5=new rope(circle5.body,Roof.body,+200,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  circle1.display();
  Roof.display();
  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(circle3.body,circle1.body.position,{x:-730,y:0});
}	
}


