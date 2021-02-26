var groundSprite;   
const Engine = Matter.Engine;
   const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000,500);


	engine = Engine.create();
  world = engine.world;
  
  groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)  

 holder1=new Holder(870,450,100,20);
 //holder2=new Holder(810,410,20,100);
 //holder3=new Holder(910,410,20,100);

 paperBall=new Paper(100,450)

 ground = Bodies.rectangle(900, 400, width, 10 , {isStatic:false} );
 World.add(world, ground);

 Engine.run(engine);
  
}

function draw() {
  Engine.update(engine);

   background("white");

   
  holder1.display();
  //holder2.display();
  //holder3.display();

  paperBall.display();   

  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:25,y:-25})
Matter.Body.setStatic(paperBall.body,false)  
  }
}



