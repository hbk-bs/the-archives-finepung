// this is a comment
//. this is global scope

function setup() {
	// this is function scope
	// setup is executed once
	createCanvas(200, 100);
	background("pink");
	//sky
	fill("lightblue");
	rect(30, 20, 140, 60, 20);
	//view sun
	fill("lightyellow");
	noStroke();
	circle(50, 48, 30);
	//view land
	fill("seagreen");
	noStroke();
	rect(30, 48, 140, 30, 0, 0, 20);
	//view street
	fill("darkgray");
	triangle(140, 78, 70, 48, 60, 78);
	//rear
	noFill();
	stroke("lightgray");
	strokeWeight(6);
	rect(30, 20, 140, 60, 20);
}

