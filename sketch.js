const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var man, manImg, manVoice;
var owl, owlImg;
var girl, girlImg;
var snowBall;
var slingShot;

function preload(){
  bg = loadImage("bg_snowfall.png");
  manImg = loadImage("man.png");
  owlImg = loadImage("owl.png");
  girlImg = loadImage("li'l_girl.png");
  //snowBall_img = loadImage("snow_splash.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  engine = Engine.create();
  world = engine.world;

  man = createSprite(300,windowHeight/2+160);
  man.addImage(manImg);
  man.scale = 0.42;

  owl = createSprite(windowWidth-470,150);
  owl.addImage(owlImg);
  owl.scale = 0.39;
  owl.velocityX = -2;

  girl = createSprite(windowWidth-500,windowHeight/2+150);
  girl.addImage(girlImg);
  girl.scale = 0.8;

  snowBall = new SnowBall(565,140,50,50);
  //World.add(world,snowBall);

  slingShot = new SlingShot(snowBall.body,{x:565, y:140});
}

function draw() {
  background(bg); 
  drawSprites();

  Engine.update(engine);

  //imageMode(CENTER);
  //image(snowBall_img, snowBall.position.x, snowBall.position.y,50,50);

  snowBall.display();
  slingShot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(snowBall.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}


