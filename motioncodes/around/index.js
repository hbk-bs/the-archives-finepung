class Particle {
  constructor(x, y, radius, speed, index, totalParticles) {
    this.x = x;
    this.y = y;
    this.radius = radius; // Radius des Kreises
    this.index = index;   // Position in der Reihenfolge
    this.totalParticles = totalParticles; // Gesamtzahl der Partikel
    this.speed = speed;   // Geschwindigkeit der Bewegung
    this.angle = (TWO_PI / this.totalParticles) * this.index; // Startwinkel basierend auf der Reihenfolge

    // Zufällige Farbe für jedes Partikel
    this.color = color(random(255), random(255), random(255));
    this.alpha = 150; // Transparenz
  }

  // Partikel im Kreis bewegen
  update() {
    // Berechne die Position des Partikels entlang des Kreises
    this.angle += this.speed; // Der Winkel wird nach jeder Frame-Aktualisierung erhöht
    this.x = width / 2 + this.radius * cos(this.angle); // X-Position auf dem Kreis
    this.y = height / 2 + this.radius * sin(this.angle); // Y-Position auf dem Kreis
  }

  // Partikel zeichnen
  display() {
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.alpha); // RBG-Werte + Transparenz
    noStroke();
    ellipse(this.x, this.y, 20, 20); // Zeichne das Partikel als Kreis
  }
}

let particles = [];
let numParticles = 8;  // Anzahl der Partikel
let radius = 150;      // Radius des Kreises
let speed = 0.02;      // Geschwindigkeit der Partikel (kann angepasst werden)
let centerColor;       // Variable für die zufällige Farbe des Zentrums

function setup() {
  const canvas = createCanvas(600, 600);
  canvas.parent("sketch");
  background(0);

  // Erzeuge eine zufällige Farbe für das zentrale Objekt
  centerColor = color(random(255), random(255), random(255));

  // Erzeuge Partikel in einer festen Reihenfolge um das Zentrum
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle(width / 2, height / 2, radius, speed, i, numParticles));
  }
}

function draw() {
  background(0, 20); // Hintergrund mit weichem Verblassen

  // Zeichne das Zentrum (ein stillstehender Kreis mit zufälliger Farbe)
  fill(centerColor); // Zufällige Farbe für das Zentrum
  noStroke();
  ellipse(width / 2, height / 2, 60, 60); // Zentrales Objekt (stillstehend)

  // Aktualisiere und zeige alle Partikel
  for (let i = 0; i < particles.length; i++) {
    particles[i].update(); // Aktualisiere die Position des Partikels
    particles[i].display(); // Zeige das Partikel
  }
}
