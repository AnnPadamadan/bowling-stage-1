var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  Constraint = Matter.Constraint


var bgImg;
var ball;
var pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8, pin9, pin10;
var ground;
  function preload(){
bgImg = loadImage("bowlingalley.jpg");

  }

function setup() {
  createCanvas(700, 700);
  engine = Engine.create();
  world = engine.world;
//ground = new Ground(350, 680, 700, 10);
base1 = new Ground(350, 200, 200, 10);
base2 = new Ground(350, 300, 200, 10);
base3 = new Ground(350, 400, 200, 10);
pin1 = new Pin(275, 125, 50, 75);
pin2 = new Pin(325, 125, 50, 75);
pin3 = new Pin(375, 125, 50, 75);
pin4 = new Pin(425, 125, 50, 75);
pin5 = new Pin(300, 225, 50, 75);
pin6 = new Pin(360, 225, 50, 75);
pin7 = new Pin(410, 225, 50, 75);
pin8 = new Pin(340, 325, 50, 75);
pin9 = new Pin(390, 325, 50, 75);

    
}
 


function draw() {
  background(bgImg);
 
 
  Engine.update(engine);
 //ground.display();
 base1.display();
 base2.display();
 base3.display();

  pin1.display();
  pin2.display();
  pin3.display();
  pin4.display();

  pin5.display();
  pin6.display();
  pin7.display();
  pin8.display();
  pin9.display();

}


