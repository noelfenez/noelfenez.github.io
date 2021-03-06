var px, py, vx, vy, ax, ay, vMultiplier,s;

function setup() {
  createCanvas(windowWidth, windowHeight);
  s = 25;
  vx = 0;
  vy = 0;
  ax = 0;
  ay = 0;
  vMultiplier = 0.05;
  px = windowWidth / 2;
  py = windowHeight / 2;
}

function draw() {
  background(150);
  textSize(10);
  text("Rx: " + rotationX, 100, 100);
  text("Ry: " + rotationY, 100, 150);
  text("Rz: " + rotationZ, 100, 200);
  drawBall();

}

function drawBall() {
  fill(100, 50, 60);

  ax = rotationY * vMultiplier;
  ay = rotationX * vMultiplier;
  vx += ax;
  vy += ay;
  px += vx;
  py += vy;
  
  ellipse(px, py, 25, 25);
  
  if (px > windowWidth - s / 2) {
		px = windowWidth - s / 2;
		vx = -vx;
	}
	if (px < 0 + s / 2) {
		px = 0 + s / 2;
		vx = -vx * 0.5;
	}
	if (py > windowHeight - s / 2) {
		py = windowHeight - s / 2;
		vy = -vy * 0.5;
	}
	if (py < 0 + s / 2) {
		py = 0 + s / 2;
		vy = -vy * 0.5;
	}
}