var mist ;


function setup() {
  // put setup code here
  createCanvas(1000,1000);
  mist = loadImage("assets/mistsuperhero.jpg");
}

function draw() {
  // put drawing code here
  image(mist, 0,0,1000,1000);
}
