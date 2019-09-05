let ps;
let img;

function preload() {
  img = loadImage("assets/texture.png");
}







function setup() {
  // put setup code here

  createCanvas(640, 360, WEBGL);
  ps = new ParticleSystem(0, createVector(0, 75), img);



}

function draw() {
  background(145, 255, 175);

  fill(8,7,7);
  quad(356, 151, 526, 190, 487, 359, 389, 356);

  fill(8,7,7);
  quad(359, 159, 250, 183, 260, 226, 360, 203);

  fill(8,7,7);
  quad(245, 187, 147, 140, 128, 189, 254, 222);

  fill(8,7,7);
  quad(141, 144, 108, 97, 98, 145, 131, 170);

  fill(8,7,7);
  quad(525, 197, 539, 199, 530, 273, 515, 265);

  fill(8,7,7);
  quad(516,268,577,290,577,316,514,293);

  fill(8,7,7);
  quad(581,296,617,297,613,326,582,314);

  fill(8,7,7);
  quad(585,291,592,276,600,279,593,292);

  fill(8,7,7);
  quad(443,363,442,410,503,408,516,363);

  fill(8,7,7);
  quad(436,364,435,404,375,410,377,362);

  fill(8,7,7);
  quad(421,161,420,125,460,124,460,171);

  fill(8,7,7);
  quad(415,143,471,123,460,68,396,85);

  fill(8,7,7);
  quad(504,407,571,473,532,509,443,413);

  fill(8,7,7);
  quad(574,483,548,615,517,612,518,498);

  fill(8,7,7);
  quad(431,407,393,526,332,518,372,406);

  fill(8,7,7);
  quad(384,529,342,617,301,613,334,521);

  fill(8,7,7);
  quad(519,614,512,630,561,650,572,627);

  fill(8,7,7);
  quad(301,615,288,653,329,654,329,617);

  fill(8,7,7);
  triangle(514,290,505,289,520,217);

  fill(121, 128, 123);
  triangle(434,104,451,85,455,108);

  fill(121,128,123);
  triangle(426,101,406,93,415,112);

  fill(121,128,123);
  quad(538,198,530,198,522,274,532,271);

  fill(121,128,123);
  quad(523,273,575,300,576,290,530,270);

  fill(121,128,123);
  quad(147,137,138,158,247,199,244,184);

  fill(121,128,123);
  quad(246,183,250,197,356,175,356,160);

  fill(121,128,123);
  quad(385,153,419,354,435,354,404,160);

  fill(121,128,123);
  quad(449,353,472,175,494,179,469,353);

  fill(121,128,123);
  quad(385,350,383,359,493,361,493,354);

  fill(8,7,7);
  quad(432,364,442,361,442,405,433,401);

  fill(121,128,123);
  quad(502,405,570,471,557,481,482,409);

  fill(121,128,123);
  quad(573,475,546,614,531,609,551,484);

  fill(121,128,123);
  quad(372,403,333,514,352,517,396,404);

  fill(121,128,123);
  quad(331,517,300,611,321,610,348,523);

  let dx = map(mouseX, 0, width, -0.2, 0.2);
  let wind = createVector(dx, 0);
  ps.applyForce(wind);
  ps.run();
  for (let i = 0; i < 2; i++) {
    ps.addParticle();
  }

  // Draw an arrow representing the wind force
  drawVector(wind, createVector(0, -50, 0), 500);


  if (mouseIsPressed) {
    //this is where you put the pressed shapes









fill(8,7,7);
ellipse(mouseX, mouseY, 5, 5);



  } else {
    //this is where you put the unpressed shapes
    //rect(width/2, height/2, 50, 50);






  }

}

function mouseReleased () {
console.log(mouseX + ',' + mouseY);

}

function drawVector(v, pos, scayl) {
  push();
  let arrowsize = 4;
  // Translate to position to render vector
  translate(pos.x, pos.y);
  stroke(255);
  fill(255);
  strokeWeight(1);
  // Call vector heading function to get direction (note that pointing up is a heading of 0) and rotate
  rotate(v.heading());
  // Calculate length of vector & scale it to be bigger or smaller if necessary
  let len = v.mag() * scayl;
  // Draw three lines to make an arrow (draw pointing up since we've rotate to the proper direction)
  line(0, 0, len, 0);
  line(len, 0, len - arrowsize, +arrowsize / 2);
  line(len, 0, len - arrowsize, -arrowsize / 2);
  pop();
}
