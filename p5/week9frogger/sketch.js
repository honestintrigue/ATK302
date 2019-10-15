var cars = [];
var frogPos ;
var myState=0;
var timer=0;
var myImage;

function setup() {
  myImage=loadImage("assets/boogie.jpg");

  createCanvas(800, 800);

  //spawn cars!!!!!
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }
  frogPos = createVector(width/2, height-80) ;
  rectMode(CENTER) ;
  ellipseMode(CENTER) ;
}

function draw() {


switch(myState) {

case 0:  // splash screen
background(100);
textSize(30);
fill("red");
text("Welcome to my game, Click to start",50,50);

break;

case 1: // the game state
background(50);
game();
timer++;
if (timer>1200){
  myState=3;
  timer=0;
}
break;

case 2: // the win state
background(20);
textSize(30);
fill("red");
text("You Win!",100,100);
break;

case 3: // the lose state
background(80);
textSize(30);
fill("red");
text("You Lose!",100,100);
break;

}

}

function mouseReleased(){
switch(myState){
  case 0:
  myState=1;
  break;

  case 2: // the win
  resetTheGame();
  myState=0;
  break;

  case 3: //the lose
  resetTheGame();
  myState=0;
  break;
}
}


// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);


  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    ellipse(this.pos.x, this.pos.y, 100, 100);
    ellipse(this.pos.x-45, this.pos.y+25,50,50);
    ellipse(this.pos.x+45, this.pos.y+25,50,50);
  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}


function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}
function resetTheGame(){
  cars=[];
  for (var i = 0; i < 15; i++) {
    cars.push(new Car());
}


}


function game(){
  background(100);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1) ;
    }
  }
if (cars.length==0){
  myState=2;
}
  // draw the frog

image(myImage,frogPos.x, frogPos.y, 60, 60);
  checkForKeys() ;
}
