let particle1, particle2;
let speed = 3; // Konstante Geschwindigkeit der Partikel

function setup() {
    createCanvas(windowWidth, windowHeight);
    // Partikel 1 startet oben links und bewegt sich in die Mitte
    particle1 = new Particle(0, 0, color(255, 0, 0)); 
    // Partikel 2 startet unten rechts und bewegt sich in die Mitte
    particle2 = new Particle(width, height, color(250, 0, 0));
}

function draw() {
    background("white");

    // Update und Zeichnen der Partikel
    particle1.update(particle2.x, particle2.y);
    particle1.draw();
    
    particle2.update(particle1.x, particle1.y);
    particle2.draw();

    // Kollisionserkennung und Reaktion
    if (dist(particle1.x, particle1.y, particle2.x, particle2.y) < particle1.radius + particle2.radius) {
        // Nach Kollision, setze die Partikel zurück an den Rand
        particle1.resetPosition();
        particle2.resetPosition();
    }
}

// Partikel-Klasse
class Particle {
    constructor(x, y, c) {
        this.x = x;
        this.y = y;
        this.color = c;
        this.radius = 20;
        this.dx = 0;
        this.dy = 0;
    }

    // Update der Partikelbewegung, basierend auf dem Ziel
    update(targetX, targetY) {
        // Berechne den Vektor zum Ziel
        let angle = atan2(targetY - this.y, targetX - this.x);
        
        // Berechne die Geschwindigkeit in X- und Y-Richtung basierend auf dem Winkel
        this.dx = cos(angle) * speed;
        this.dy = sin(angle) * speed;

        // Update der Position
        this.x += this.dx;
        this.y += this.dy;
    }

    // Methode, um die Partikel nach Kollision zurückzusetzen
    resetPosition() {
        if (this.color.levels[0] === 255) {
            // Wenn die Partikel rot ist (particle1), setze sie an den oberen Rand
            this.x = 0;
            this.y = 0;
        } else {
            // Wenn die Partikel blau ist (particle2), setze sie an den unteren Rand
            this.x = width;
            this.y = height;
        }
    }

    // Zeichnen des Partikels auf dem Canvas
    draw() {
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.radius * 2);
    }
}
