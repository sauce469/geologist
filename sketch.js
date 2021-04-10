const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone;
var iron;
var p1,p2,p3


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber=new Rubber (900,450,70);
    stone=new Stone (700,320,100,120);
    iron=new Iron (300,350);
    p1=new Rubber (500,400,15);
    p2=new Rubber (520,400,15);
    p3=new Rubber (540,400,15);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
    p1.display();
    p2.display();
    p3.display();

    
 
}