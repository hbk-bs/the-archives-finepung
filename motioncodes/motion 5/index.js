// Initialisierung von Variablen
let t = 0; // Zeitparameter für die Animation
let speed = 0.02; // Geschwindigkeit der Animation
let amplitude = 100; // Amplitude der Bewegung (Maximalgröße der "Wellen")
let phaseShift1 = 0; // Phasenverschiebung für die erste Linie
let phaseShift2 = Math.PI; // Phasenverschiebung für die zweite Linie (um 180 Grad versetzt)

function setup() {
  createCanvas(windowWidth, windowHeight); 
  noFill(); 
  stroke(255, 0, 150); 
  strokeWeight(10); 
}

function draw() {
  background("white"); 

  // Erste "verflochtene" Linie
  beginShape();
  for (let x = 0; x < width; x++) {
    let y = sin(x * 0.05 + t + phaseShift1) * amplitude; // Sinuswelle für vertikale Bewegung
    let z = cos(x * 0.05 + t + phaseShift1) * amplitude; // Kosinuswelle für eine zusätzliche Dimension
    curveVertex(x, height / 2 + y + z); // Kurve basierend auf den berechneten Werten
  }
  endShape();

  // Zweite "verflochtene" Linie (leicht verschoben)
  beginShape();
  for (let x = 0; x < width; x++) {
    let y = sin(x * 0.05 + t + phaseShift2) * amplitude; // Sinuswelle für vertikale Bewegung
    let z = cos(x * 0.05 + t + phaseShift2) * amplitude; // Kosinuswelle für eine zusätzliche Dimension
    curveVertex(x, height / 2 + y + z); // Kurve basierend auf den berechneten Werten
  }
  endShape();

  // Zeit erhöhen, um die Animation zu ermöglichen
  t += speed;
}
