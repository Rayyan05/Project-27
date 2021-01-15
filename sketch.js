//var ball1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var box1,box2,box3;
var ground1,ball1;
var bin;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



 
 
 ball1 = new Ball(500,400,30,{isStatic:true})
ball2 = new Ball(550,400,30)
ball3 = new Ball(600,400,30)
ball4 =  new Ball(650,400,30)
ball5 =  new Ball(700,400,30)

 //ground1 = new Ground(400,570,800,20)

 roof1 = new Roof(800,200,600,50);

chain1 = new Chain(ball1.body,roof1.body,-100,0)
World.add(world,chain1)

chain2 = new Chain(ball2.body,roof1.body,-50,0)
World.add(world,chain2)

chain3 = new Chain(ball3.body,roof1.body,+0,0)
World.add(world,chain3)

chain4 = new Chain(ball4.body,roof1.body,+50,0)
World.add(world,chain4)

chain5 = new Chain(ball5.body,roof1.body,+100,0)
World.add(world,chain4)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  //engine.world.gravity.y = 0;

  
 // ellipseMode(RADIUS)
  //fill("pink")
 // ellipse(ball1.position.x,ball1.position.y,20)

  
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
 //ground1.display();
 roof1.display();
 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();




 //keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-300,y:-15})
		//Matter.Body.setStatic(ball5.body,true)
	}
}



