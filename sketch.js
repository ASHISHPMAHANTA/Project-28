
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,treeImage;
var stone;
var slingShot;
var boy,boyImage;

var mango,mango1,mango2,mango3,mango4;

function preload()
{
	treeImage = loadImage("tree.png");
	boyImage = loadImage("boy.png");

}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

tree = createSprite(960,250,30,30);
tree.addImage("tree",treeImage);
tree.scale = 0.25;

boy = createSprite(290,215,30,30);
boy.addImage("boy",boyImage);
boy.scale = 0.11;


	Engine.run(engine);
  

	stone = new Stone(100,100);

	slingShot = new Slingshot(stone.body,{x:200,y:100});
	mango = new Mango(890,200,30,30);
	mango1 = new Mango(930,120,30,30);
	mango2 = new Mango(970,180,30,30);
	mango3 = new Mango(1030,140,30,30);
	mango4 = new Mango(1030,200,30,30);


}


function draw() {
  rectMode(CENTER);
  background(255);

  detectollision(stone,mango);
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);

  drawSprites();
 stone.display();
 slingShot.display();
mango.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();


}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	}
	
	function mouseReleased(){
	slingShot.fly();
	
	}

function detectollision(lstone,lmango){

mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance  = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

if(distance<=lmango.r+lstone.r){

Matter.Body.setStatic(mango.body,false);

}
}
