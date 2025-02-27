// this is a comment
//. this is global scope

function setup() {
	createCanvas(100, 100);
	const x = (n) => width * n;
	const y = (n) => height * n;
	const s = (n) => width * n;
	background(220);
	noStroke();

	//triangle(0, 100, 30, 30, 100, 100);

	//triangle(100, 0, 30, 30, 0, 0);
	fill("black");
	rectMode(CORNER);
	const x1 = x(0.2);
	const y1 = y(0.2);
	const s1 = s(0.2);

	rect(x1, y1, 20, 20);
	fill("gray");

	quad(x1, y1, x1 - 20, y1 - 20, x1 - 20, y1 + 100, x1, y1 + 20, s(0.2), s(0.2));
	const x2 = x1 + 20;
	quad(
		x2,
		y1,
		x2 + 90,
		y1 - 30,
		x2 + 100,
		y1 + 120,
		x2,
		y1 + 20,
		s(0.2),
		s(0.2)
	);
}

function keyPressed() {
	if (key === "s") {
		save("perspective.png");
	}
}
