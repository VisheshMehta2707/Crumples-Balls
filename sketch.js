var ground;
var Box1,Box2,Boxe3;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	myEngine = Engine.create();
	myWorld = myEngine.world;
    ground = new Ground()
	 Box1 = new Box(600,700,20,100)
	 Box2 = new Box(700,700,20,100 )
	 Box3 = new Box( 650,750,100,20)
	 ball = new Ball (110,750,50)
	


	Engine.run(myEngine);
  
}


function draw() {
  background("black");
  ground.display()
  Box1.display()
  Box2.display()
  Box3.display()
  ball.display()
}
 function keyPressed(){
if (keyCode== UP_ARROW)
 {
  Matter.Body.applyForce( ball.Ball,ball.Ball.position,{x:1,y:-0.3})

 }


 }







