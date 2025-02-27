// this is a comment
//. this is global scope
function setup() {
	// this is function scope
	// setup is executed once

	createCanvas(100, 100);
	const x = (n) => width * n;
	const y = (n) => height * n;
	background("lightgray");

	//first layer
	noStroke();
	fill("darkgray");
	rectMode(CORNER);
	rect(x(0.15), y(0.15), 120, 120);

	//second layer
	noStroke();
	fill("gray");
	rectMode(CORNER);
	rect(x(0.3), y(0.3), 80, 80);

	//third layer
	fill("black");
	rectMode(CORNER);
	rect(x(0.45), y(0.45), 60, 60);
}

function keyPressed() {
	if (key === "s") {
		save("perspective.png");
	}
}
