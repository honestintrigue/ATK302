var myState=0;
var timer=0;
var myImage;

function setup() {
  // put setup code here
  createCanvas(800,800);
  myImage=loadImage();
}

function draw() {
  // put drawing code here

  switch(myState){

    case 0:
    image(myImage,0,0); //put in ever case it will show in
    //put boogie in each case
    break;

    case 1:
    myTimer++;
    if (myTimer>200){
      myTimer=0;
      myState=2;
    }
    break;

    case 2:
    break;

    case 3:
    break;

    case 4:
    break;

  }
}

function mouseReleased(){
console.log(mouseX + ',' + mouseY);

  if (myState==0) {
    myState=1;
  }
}
