class Particle {
  constructor(_x, _y, _targetX, _targetY) {
    this.x = _x;
    this.y = _y;
    this.targetX = _targetX; 
    this.targetY = _targetY;  
    this.speed = 0.5;         
    this.angle = random(TWO_PI);  
    this.radius = 20;            
    this.history = [];           
    this.maxRadius = 300;        
    this.growing = true;         
  }

  
  display() {
    fill(255, 0, 0);  
    noStroke();
    circle(this.x, this.y, 10);
  }

  
  update() {
    let angleStep = 0.05;  
    this.angle += angleStep;

    
    if (this.growing) {
      this.radius += 0.1;  
      if (this.radius >= this.maxRadius) {
        this.growing = false;  
      }
    } else {
      this.radius -= 0.1;  
      if (this.radius <= 20) {  
        this.growing = true;   
        this.history = [];     
      }
    }

    this.x = this.targetX + cos(this.angle) * this.radius;
    this.y = this.targetY + sin(this.angle) * this.radius;

    
    this.history.push({ x: this.x, y: this.y });

    
    if (this.history.length > 100) {
      this.history.shift();  
    }
  }

  
  resetIfClose() {
    const distance = dist(this.x, this.y, this.targetX, this.targetY);
    if (distance < 10) {  
      this.x = random(width);  
      this.y = random(height); 
      
      this.targetX = width / 2;
      this.targetY = height / 2;
      this.angle = random(TWO_PI);  
      this.radius = 20;  
      this.history = []; 
    }
  }

  
  drawHistory() {
    noFill();
    stroke(255, 100, 100, 150);  
    beginShape();
    for (let i = 0; i < this.history.length; i++) {
      vertex(this.history[i].x, this.history[i].y);
    }
    endShape();
  }
}

let particle1;
let particle2;

function setup() {
  const canvas = createCanvas(550, 550);
  canvas.parent("sketch");
  background(255); 
  
  let randomY = random(height);  
  particle1 = new Particle(0, randomY, width / 2, height / 2);  
  particle2 = new Particle(width, randomY, width / 2, height / 2); 
}

function draw() {
  background(255, 10); 

  
  particle1.update();
  particle1.display();
  particle1.drawHistory();  
  
  particle2.update();
  particle2.display();
  particle2.drawHistory();  

  
  particle1.resetIfClose();
  particle2.resetIfClose();
}

