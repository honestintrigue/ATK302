var myState=0;
var myTimer=0;
var B1,B2;
var y=-10;




function setup() {
  // put setup code here
  createCanvas(1000,1000);
  background(0);
  B1=loadImage("assets/boogie1.png");
  B2=loadImage("assets/boogie2.png");
}

function draw() {
  // put drawing code here


  switch(myState){

    case 0:
    image(B1,0,0,500,500);
    textSize(30);
    text("Wait for it",360,480);
    myTimer++;
    if (myTimer>200){
      myTimer=0;
      myState=1;
    }

    break;

    case 1:
    image(B2,0,0,500,500);
    textSize(30);
    text("Click",360,480);


    break;

    case 2:
    image(B2,0,0,500,500);
    fill(255, 235, 10);
    ellipse(479,258,50,50);
    textSize(30);
    text("Click",360,480);
    break;

    case 3:
    image(B2,0,0,500,500);
    fill(255, 235, 10);
    ellipse(479,258,50,50);
    textSize(25);
    text("Mr.Boogie doesn't like light",63,y);
    y=y+1;
    if (y>40){
      myState=4;
    }
    break;

    case 4:
    image(B2,0,0,500,500);
    fill(255, 235, 10);
    ellipse(479,258,50,50);
    textSize(25);
    text("Mr.Boogie doesn't like light",63,y);
    break;

  }
}

function mouseReleased(){
console.log(mouseX + ',' + mouseY);


  myState++;
  if (myState>4){
    myState=0;
    y=-10;
  }
}
