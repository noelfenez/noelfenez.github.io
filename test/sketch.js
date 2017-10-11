document.ontouchmove = function(event){
 event.preventDefault();
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 rectMode(CENTER);
 stroke(0);
 noFill();
 strokeWeight(5);
}

function draw(){
 background(100,120,75);
 
	beginShape();
	for (var i = 0; i < touches.length; i++) {
		vertex(touches[i].x, touches[i].y);
		textSize(35);
		text(touches[i].x,touches[i].x,touches[i].y);
		text(touches[i].y,touches[i].x,touches[i].y);
	}
	
	endShape(CLOSE);
	fill(100, 220, 75);

 for(var i=0;i<touches.length;i++){
  rect(touches[i].x,touches[i].y,150,150);
  }
}