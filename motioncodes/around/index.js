class Particle {
  constructor(x, y, radius, speed, index, totalParticles) {
    this.x = x;
    this.y = y;
    this.radius = radius; 
    this.index = index;   
    this.totalParticles = totalParticles; 
    this.speed = speed;   
    this.angle = (TWO_PI / this.totalParticles) * this.index; 

    
    this.color = color(random(255), random(255), random(255));
    this.alpha = 150; 
  }
  
  update() {
    
    this.angle += this.speed; 
    this.x = width / 2 + this.radius * cos(this.angle); 
    this.y = height / 2 + this.radius * sin(this.angle); 
  }

  display() {
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.alpha); // RBG-Werte + Transparenz
    noStroke();
    ellipse(this.x, this.y, 20, 20); 
  }
}

let particles = [];
let numParticles = 8;  
let radius = 150;      
let speed = 0.02;      
let centerColor;      

function setup() {
  const canvas = createCanvas(600, 600);
  canvas.parent("sketch");
  background(0);

 
  centerColor = color(random(255), random(255), random(255));

 
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle(width / 2, height / 2, radius, speed, i, numParticles));
  }
}

function draw() {
  background(0, 20);

  
  fill(centerColor); 
  noStroke();
  ellipse(width / 2, height / 2, 60, 60); 

 
  for (let i = 0; i < particles.length; i++) {
    particles[i].update(); 
    particles[i].display(); 
  }
}
