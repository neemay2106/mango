
var boyImg,mango1,boy,mango2,mango3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()

{
  boyImg = loadImage('sprites/boy.png');
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango2 = new mango(200,200,30);
	mango1 = new mango(200,150,30);
	mango3 =  new mango(200,100,30);
    
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  mango3.display();
  mango2.display();
  mango1.display();
  image(boyImg,200,340,200,300);
 
}



