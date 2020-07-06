const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(600,770,1200,10);

	binV1 = new Bin(900,710,10,100);
  binV2 = new Bin(1100,710,10,100);
  binH = new Bin(1000,760,210,10);

  ball = new Ball(200,745,40,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  ground.display();
  binV1.display();
  binV2.display();
  binH.display();
  ball.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.setStatic(ball.body, false);
    Matter.Body.applyForce(ball.body, ball.body.position, {x:500, y:-183});
  }
}