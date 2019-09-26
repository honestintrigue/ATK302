var myFont;
var x=0;

function preload() {
  myFont = loadFont('assets/SIXTY.ttf');  // find an otf or ttf
}

function setup() {
  createCanvas(1000, 800) ;
  mist = loadImage("assets/mistsuperhero.jpg");
}
function draw() {
  background("black");
  fill('red');   // SETS the color
  textFont(myFont);  // SETS the font
  textSize(50);	// SETS the size of the font
  text("hello world",x,50);
  x=x+1;
  if (x>width){
    x=0;
  }
}
