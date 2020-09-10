
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;
    

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	boxleft=createSprite(500,315, 10,150);
	boxleft.shapeColor="red";
	boxm=createSprite(660,385,320,10, {isStatic:true} );
	boxm.shapeColor="red";
	boxright=createSprite(820,315,10,150);
	boxright.shapeColor="red";
	ball = new Ball(200,100,20,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   keyPressed();
   
  ground.display();
  ball.display();
  

 drawSprites();
 
}
function keyPressed() {
if(keyCode===UP_ARROW){
 Matter.Body.applyForce(ball.body,ball.body.position,{x:1,y: -3});
	isStatic: true
}

}




