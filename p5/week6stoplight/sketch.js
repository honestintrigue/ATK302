let myState=0;
 var myTimer = 0 ;

function setup() {
  // put setup code here
  createCanvas(800,800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  fill("yellow");
  rect(width/2, height/2,150,500);

switch (myState){
  case 0:
  fill("red");
  ellipse(width/2,200,100,100);
  myTimer++;
  if (myTimer >= 300) {

        myState++ ;
        myTimer = 0 ;

     }

     fill("grey");
     ellipse(width/2,height/2,100,100);

     fill("grey");
     ellipse(width/2,600,100,100);


  break;

  case 1:
  fill("orange");
  ellipse(width/2,height/2,100,100);
  myTimer++;
  if (myTimer >= 300) {

        myState++ ;
        myTimer = 0 ;

     }

     fill("grey");
     ellipse(width/2,200,100,100);

     fill("grey");
     ellipse(width/2,600,100,100);


  break;

  case 2:
  fill("green");
  ellipse(width/2,600,100,100);

  fill("grey");
  ellipse(width/2,height/2,100,100);

  fill("grey");
  ellipse(width/2,200,100,100);

  break;
}

}
