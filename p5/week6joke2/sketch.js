var myState = 0;
var myTimer = 0;

function setup() {
  // put setup code here
  createCanvas(1000, 1000);

}

function draw() {
  // put drawing code here
  background("red");
  switch (myState) {
    case 0:
      text("What’s black, red, black, red, black, red?", 10, 30);
      textSize(30);
      fill("black");
      myTimer++;
      if (myTimer >= 300) {

        myState++;
        myTimer = 0;

      }
      break;
      //for joke 2 put timer code ^
    case 1:
      text("A zebra with a sun burn", 30, 50);
      textSize(30);
      fill("black");
      break;


  }





}
