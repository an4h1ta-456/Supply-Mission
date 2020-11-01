var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxLt, box1, boxRt, box2, 
boxMid, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)



	engine = Engine.create();
	world = engine.world;

	


	packageBody = Bodies.circle(width/2 , 200 , 5 ,{restitution:0.4, density: 1.2, isStatic:true});
	World.add(world, packageBody);
	Matter.Body.scale(packageBody, 50, 150);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	fill("brown");
	boxLt = Bodies.rectangle(300,610,20,100,{isStatic:true});
	World.add(world,boxLt);
	box1 = createSprite(300,610,20,100);
	fill("brown");
	boxMid = Bodies.rectangle(400,650,200,20,{isStatic:true});
	World.add(world, boxMid);
	box2 = createSprite(400,650,200,20);
	fill("brown");
	boxRt = Bodies.rectangle(500,610,20,100,{isStatic:true});
	World.add(world, boxRt);
	box3 = createSprite(500,610,20,100);

	
	
	

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
  keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === LEFT_ARROW) {
	helicopterSprite.x = helicopterSprite.x-20;
	translation = {x:-20,y:0};
	Matter.Body.translate(packageBody,translation);
  }
if (keyCode === RIGHT_ARROW) {
	helicopterSprite.x = helicopterSprite.x+20;
	translation = {x:20,y:0};
	Matter.Body.translate(packageBody,translation);
  }
if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);

  }
}




