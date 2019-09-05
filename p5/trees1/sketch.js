function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400); // size of the canvas

}


function draw() {


    background(66, 215, 245);
    noStroke();

    fill(14, 15, 15);
    triangle(18, 18, 18, 360, 81, 360);

    fill(14, 15, 15);
    rect(80, 80, 63, 63);

    fill(14, 15, 15);
    quad(247, 125, 283, 207, 3, 209, 7, 116);

    fill(252, 202, 3);
    ellipse(145, 108, 200, 200);  //(x,y,width,height)

    fill(250, 248, 247);
    ellipse(147, 72, 201, 75, 201, 117, 149, 114);

    fill(14,15,15);
    triangle(347, 252, 345, 83, 387, 190);

    fill(148, 9, 14);
    rect(0, 331, 715, 344, 4, 394, 709, 393);

    fill(14, 15, 15);
    arc(479, 300, 280, 280, PI, TWO_PI);

    fill(255);
    text(mouseX + ',' + mouseY, 30, 30) ;
}

function mouseReleased () {

console.log(mouseX + ',' + mouseY);




}
