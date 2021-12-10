var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var balls = [];
var plinkos = [];
var divisions =[];
var ball;
var raqueta;
var dv1, dv2, dv3, dv4, dv5, dv6;
var mifuente;

var score =0;
var gameState="play"

function preload() {
}

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  raqueta=new raquet(300, 300, 120, 20, PI/7)
  dv1=new Divisions(1190, 340, 10, 500)
  dv2=new Divisions(1130, 360, 10, 460)
  dv3=new Divisions(1070, 380, 10, 420)
  dv4=new Divisions(1010, 400, 10, 380)
  dv5=new Divisions(950, 420, 10, 340)
  dv6=new Divisions(890, 440, 10, 300)
 
}
 
function draw() {
  background("black");
  textSize(35)
  text("Puntuación : "+score,20,40);
  fill("white");

  textSize(15)
  textFont('Pixel')
  text("Mueve la raqueta con el raton para intentar poner la pelotas en contenedores", 330, 50)
  text("Ganaras más puntos conforme avances en los contenedores", 330, 70)


  
  
  ground.display();

if(frameCount % 200===0){
  balls.push(new Ball(random(150, 300), 200, 10))
}


raqueta.display();
dv1.display();
dv2.display();
dv3.display();
dv4.display();
dv5.display();
dv6.display();

Engine.update(engine);


if(balls!=null){
  for(var m=0; m<balls.length; m++){
  balls[m].display();
  balls[m].score1();
  }


  }


    
}


function mouseDragged(){
  Matter.Body.setPosition(raqueta.body, {x: mouseX , y: mouseY});
}