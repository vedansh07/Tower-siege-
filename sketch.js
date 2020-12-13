const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    polygon_img=loadImage("polygon.png");


}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    base = new Ground(100, 305, 300, 170);
    base2 = new Ground(200,245,300,170);

    block1=new Box(300,315);
    block2=new Box(330,315);
    block3=new Box(360,315);
    block4=new Box(390,315);
    block5=new Box(420,315);
    block6=new Box(450,315);
    block7=new Box(480,315);

    block8=new Box(330,255);
    block9=new Box(360,255);
    block10=new Box(390,255);
    block11=new Box(420,255);
    block12=new Box(450,255);

    block13=new Box(360,195);
    block14=new Box(390,195);
    block15=new Box(420,195);

    block16=new Box(390,155);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    sling=new slingShot(polygon.body,{x:100,y:200});

}
//'this' is a keyword which is used to indicate an object created from the class.
function draw(){
    Engine.update(engine);

    ground.display();
    base.dispaly();
    base2.dispaly();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();

    block16.display();

    sling.display();
    imageMode(CENTER);
    image (polygon_img,polygon.position.x,polygon.position.y,40,40)

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}
