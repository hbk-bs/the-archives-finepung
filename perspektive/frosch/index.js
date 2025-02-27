function setup() {
	createCanvas(100, 100);
	background("gray");

	let canvasWidth = width;
	let canvasHeight = height;

	//Kopf
	fill("black");
	stroke("white");
	let headRadius = canvasWidth * 0.25;
	circle(canvasWidth * 0.5, canvasHeight * 0.4, headRadius);

	//Bein rechts
	let legWidth = canvasWidth * 0.2;
	let legHeight = canvasHeight * 0.6;
	ellipse(canvasWidth * 0.6, canvasHeight * 0.8, legWidth, legHeight);

	//Bein links
	ellipse(canvasWidth * 0.4, canvasHeight * 0.8, legWidth, legHeight);

	// Arm links
	push();
	translate(canvasWidth * 0.5, canvasHeight * 0.5);
	rotate(radians(-40));
	let armWidth = canvasWidth * 0.3;
	let armHeight = canvasHeight * 0.15;
	ellipse(-canvasWidth * 0.2, -canvasHeight * 0.1, armWidth, armHeight);
	pop();

	//Arm rechts
	push();
	translate(canvasWidth * 0.5, canvasHeight * 0.5);
	rotate(radians(40));
	ellipse(canvasWidth * 0.2, -canvasHeight * 0.1, armWidth, armHeight);
	pop();

	//Bauch
	let bellyRadius = canvasWidth * 0.4;
	circle(canvasWidth * 0.5, canvasHeight * 0.6, bellyRadius);
}

function keyPressed() {
	if (key === "s") {
		save("perspective.png");
	}
}
