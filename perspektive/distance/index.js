// this is a comment
//. this is global scope

function setup() {
	// this is function scope
	// setup is executed once
	createCanvas(100, 100);
	background("pink");
	//land
	fill("lightyellow");
	noStroke();
	rect(0, 57, 100, 43);
	//foreground
	fill("lavender");
	noStroke();
	rect(35, 20, 60, 70);
	//background
	fill("lavender");
	noStroke();
	rect(10, 46, 10);
}

function keyPressed() {
	if (key === "s") {
		save("perspective.png");
	}
}
