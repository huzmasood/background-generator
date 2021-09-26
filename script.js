var css    = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body   = document.getElementById("gradient");
var random = document.getElementById("random");

body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

css.textContent = body.style.background + ";";

function setGradient() {
	body.style.background =
		"linear-gradient(to right, " +
		color1.value +
		", " +
		color2.value +
		")";

	css.textContent = body.style.background + ";";
}

function rgbToHex(r, g, b) {
	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function generateRandom() {
	color1.value = rgbToHex(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
	color2.value = rgbToHex(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
	setGradient();
}

function copyFunction() {
	navigator.clipboard.writeText(css.textContent);
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", generateRandom);