var cars = [];
var frogPos;
var myState = -1;
var timer = 0;
var fighterLeft, fighterRight, fighter;
var slime;
var win;
var welcome;
var lose;
var cave;
var y = 650 ;
var myFont;

function preload(){
  myFont = loadFont('assets/spooky.ttf');
}

function setup() {

  createCanvas(800, 800);
  cave = loadImage("assets/caveback.png");
  fighterLeft = loadImage("assets/fighterleft.png");
  fighterRight = loadImage("assets/fighterright.png");
  fighter = fighterLeft;
  welcome = loadImage("assets/welcome.png");
  win = loadImage("assets/youwin.png");
  lose = loadImage("assets/youlose.png");
  slime = loadImage("assets/slime.png");


  //spawn cars!!!!!
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}

function draw() {


  switch (myState) {

    case -1: // splash screen
      image(welcome, width / 2, height / 2);
      break;

    case 0:
      background(66, 185, 245);
      textSize(50);
      fill("black");
      textFont(myFont);
      text("In the future, Year 5000. A boy named Alex lost his parents to the evil slime army. Now, he goes to their base in the purple caves to defeat them once and for all!",350,y,600,600);
      y = y - 3 ;
      if (y < 0) {
        myState = 1 ;
      }
      break;

    case 1: // the game state

      game();
      timer++;
      if (timer > 1200) {
        myState = 3;
        timer = 0;
      }
      break;

    case 2: // the win state
      image(win, width / 2, height / 2);

      break;

    case 3: // the lose state
      image(lose, width / 2, height / 2);
      break;

  }

}

function mouseReleased() {
  switch (myState) {

    case -1:
      myState =0
        break;


    case 0:
      myState = 1;
      break;

    case 2: // the win
      resetTheGame();
      myState = -1;
      break;

    case 3: //the lose
      resetTheGame();
      myState = 0-1;
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


  //this.timer=0;


  // methods
  this.display = function() {
    // fill(this.r, this.g, this.b);
    // ellipse(this.pos.x, this.pos.y, 100, 100);
    // ellipse(this.pos.x-45, this.pos.y+25,50,50);
    // ellipse(this.pos.x+45, this.pos.y+25,50,50);
    image(slime, this.pos.x, this.pos.y, 100, 100);
    // this.timer++;
    // if (this.timer > 20) {
    //   this.timer = 0;
    //   //this.birdNum=this.birdNum+1;
    // }

    //if (this.birdNum>birds.length-1){
    //this.birdNum=0;
  }


  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) fighter = fighterLeft;
  if (keyCode === RIGHT_ARROW) fighter = fighterRight;
}



function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}

function resetTheGame() {
  cars = [];
  for (var i = 0; i < 15; i++) {
    cars.push(new Car());
  }


}


function game() {
  image(cave, width / 2, height / 2);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }
  if (cars.length == 0) {
    myState = 2;
  }
  // draw the frog

  image(fighter, frogPos.x, frogPos.y, 200, 200);
  checkForKeys();
}