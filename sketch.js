const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body=Matter.Body;
var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 400, 600, 5);
  hero = new Hero(400,100,100,100);
  rope = new Rope(hero.body, { x: 100, y: 465 });
  monster = new Monster(300,200,100,100);

  box1 = new Box(280, 350, 30, 40);
  box2 = new Box(310, 350, 30, 40);
  box3 = new Box(340, 300, 30, 40);
  box4 = new Box(370, 300, 30, 40);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()

  hero.display();
  rope.display();
  monster.display();

}
