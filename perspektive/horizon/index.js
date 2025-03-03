// this is a comment

function setup() {
	// this is function scope
	// setup is executed once
	createCanvas(200, 100);
	background("pink");
	//sun
	fill("lightyellow");
	noStroke();
	circle(100, 55, 40);
	//water
	fill("lightblue");
	noStroke();
	rect(0, 57, 200, 43);
}

function keyPressed() {
	if (key === "s") {
		save("perspective.png");
	}
}
