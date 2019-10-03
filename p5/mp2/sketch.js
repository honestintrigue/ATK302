var myState=0;
var timer=0;
var gif_loadImg, gif_createImg;

function preload() {
  gif_loadImg = loadImage("assets/gifboogie.gif");
  gif_createImg = createImg("assets/gifboogie.gif");
}


function setup() {
  // put setup code here
  createCanvas(1000,1000);
  background(0);
  //myImage=loadImage();
}

function draw() {
  // put drawing code here
  image(gif_loadImg, 50, 50);
  gif_createImg.position(50, 350);
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
