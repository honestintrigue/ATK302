var myCar1; //declair it
var myCar2;
var myCar3;


function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  myCar1 = new Car(); //spawn 1 car
  myCar2 = new Car();
  myCar3= new Car();
}

function draw() {
  // put drawing code here
  background(100);
  myCar1.display();
  myCar1.move();

  myCar2.display();
  myCar2.move();

  myCar3.display();
  myCar3.move();

}

function Car() {
  //attributes
  //methods
  this.xPos = 100;

  }




  this.display = function() {

    rect(this.xPose=this.xPose+1);
  }

  this.move = function() {
    this.xPos = this.xPos + 1;

  }
