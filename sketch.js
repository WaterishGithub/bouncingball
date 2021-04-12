const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var myEngine, myWorld, ball
function setup() {
  createCanvas(800,400);
  myEngine = Engine.create()
  myWorld = myEngine.world
  var ball_option ={
    restitution:1


  }
  ball = Bodies.circle(300, 100, 30, 30, ball_option)
  World.add(myWorld, ball);
  console.log(ball)
}

function draw() {
  background(255,255,255);  
  Engine.update(myEngine)
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 30, 30)
}