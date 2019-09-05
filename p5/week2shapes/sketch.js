function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400); // size of the canvas
  background('#C31D10');
  noStroke();

  fill(66, 215, 245);
  triangle(18, 18, 18, 360, 81, 360);

  fill(66, 215, 245);
  rect(0, 0, 100, 200);

  fill(66, 215, 245);
  quad(189, 18, 216, 18, 216, 360, 144, 360);

  fill(66, 215, 245);
  ellipse(252, 144, 72, 72);

  fill(66, 215, 245);
  triangle(288, 18, 351, 360, 288, 360);

  fill(66, 215, 245);
  arc(479, 300, 280, 280, PI, TWO_PI);
}
