const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ground;
var left;
var right;
var top_wall;
var wall;
var wall2;
var ball;
var btn1;
var btn2;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	btn1 = createImg('right.png'); 
	btn1.position(220,30);
	 btn1.size(50,50);
	  btn1.mouseClicked(hForce);
	   btn2 = createImg('up.png');
		btn2.position(20,30); 
		btn2.size(50,50); 
		btn2.mouseClicked(vForce);
  
   ground=new Ground(400,540,770,20);
  right=new Ground(790,200,20,700);
  left=new Ground(10,200,20,700);
  top_wall=new Ground(200,10,1700,20);
  wall=new Ground(500,496,10,70);
  wall2=new Ground(600,496,10,70);
  
  var ball_options={
	restitution:0.95
  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  rectMode(CENTER);
  ellipse(RADIUS);
	
  }
  



function draw() {
	background(51);
	ellipse(ball.position.x,ball.position.y,20);
	Engine.update(engine);
  
	ground.show();
	top_wall.show();
	left.show();
	right.show();
    wall.show();
	wall2.show();
  
  }
  function hForce() {
	 Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
	 }
	  function vForce() { 
	   Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05}); }
