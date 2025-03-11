const numCircles = 5;  
const bounceHeight = 80;  
const waitTime = 30; 
let circleY = [];
let circleState = [];  
let startTime = 0; 
let currentCircle = 0; 

function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent('sketch');
  background(255, 0, 0);  
  angleMode(DEGREES);

  for (let i = 0; i < numCircles; i++) {
    circleY[i] = height / 2;  
    circleState[i] = 0;  
  }
}

function draw() {
  background("white");  

  strokeWeight(0);
  stroke(270);  
  fill(255, 0, 0); 

  for (let i = 0; i < numCircles; i++) {
    const x = width / (numCircles + 1) * (i + 1);  

    if (circleState[i] == 1) {
      circleY[i] -= 5;  
      if (circleY[i] <= height / 2 - bounceHeight) {  
        circleState[i] = -1; 
      }
    }

    if (circleState[i] == -1) {
      circleY[i] += 5;  
      if (circleY[i] >= height / 2) {  
        circleState[i] = 0; 
      }
    }

    ellipse(x, circleY[i], 10, 10);
  }

  if (circleState[currentCircle] == 0 && frameCount >= startTime) {
    circleState[currentCircle] = 1;  
    startTime = frameCount + waitTime;  
    currentCircle = (currentCircle + 1) % numCircles;  
  }
}
