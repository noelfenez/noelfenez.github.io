var px, py, vx, vy, ax, ay, vMultiplier;

function setup() {
  createCanvas(windowWidth, windowHeight);

  vx = 0;
  vy = 0;
  ax = 0;
  ay = 0;
  vMultipier = 0.05;
  px = windowWidth / 2;
  py = windowHeight / 2;
}

function draw() {
  background(150);
  textSize(40);
  text("Rx: " + rotationX, 100, 100);
  text("Ry: " + rotationY, 100, 150);
  text("Rz: " + rotationZ, 100, 200);
  drawBall();

}

function drawBall() {
  fill(70, 100, 60);
  
  ax = rotationY * vMultiplier;
  ay = rotationX * vMultiplier;
  vx += ax;
  vy += ay;
  px += vx;
  py += vy;
  
  ellipse(px, py, 100, 100);
}