
let t = 0; 
let speed = 0.02; 
let amplitude = 100; 
let phaseShift1 = 0; 
let phaseShift2 = Math.PI; 

function setup() {
  createCanvas(windowWidth, windowHeight); 
  noFill(); 
  stroke(255, 0, 150); 
  strokeWeight(10); 
}

function draw() {
  background("white"); 

  
  beginShape();
  for (let x = 0; x < width; x++) {
    let y = sin(x * 0.05 + t + phaseShift1) * amplitude; 
    let z = cos(x * 0.05 + t + phaseShift1) * amplitude; 
    curveVertex(x, height / 2 + y + z); 
  }
  endShape();

  
  beginShape();
  for (let x = 0; x < width; x++) {
    let y = sin(x * 0.05 + t + phaseShift2) * amplitude; 
    let z = cos(x * 0.05 + t + phaseShift2) * amplitude; 
    curveVertex(x, height / 2 + y + z); 
  }
  endShape();

  
  t += speed;
}
