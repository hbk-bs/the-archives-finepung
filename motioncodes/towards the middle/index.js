let particle1, particle2;
let speed = 3; 

function setup() {
    createCanvas(windowWidth, windowHeight);
   
    particle1 = new Particle(0, 0, color(255, 0, 0)); 
   
    particle2 = new Particle(width, height, color(250, 0, 0));
}

function draw() {
    background("white");

    particle1.update(particle2.x, particle2.y);
    particle1.draw();
    
    particle2.update(particle1.x, particle1.y);
    particle2.draw();

    if (dist(particle1.x, particle1.y, particle2.x, particle2.y) < particle1.radius + particle2.radius) {
    
        particle1.resetPosition();
        particle2.resetPosition();
    }
}

class Particle {
    constructor(x, y, c) {
        this.x = x;
        this.y = y;
        this.color = c;
        this.radius = 20;
        this.dx = 0;
        this.dy = 0;
    }

    update(targetX, targetY) {
 
        let angle = atan2(targetY - this.y, targetX - this.x);
        
        this.dx = cos(angle) * speed;
        this.dy = sin(angle) * speed;

        this.x += this.dx;
        this.y += this.dy;
    }

    resetPosition() {
        if (this.color.levels[0] === 255) {
            this.x = 0;
            this.y = 0;
        } else {
            this.x = width;
            this.y = height;
        }
    }

    draw() {
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.radius * 2);
    }
}
