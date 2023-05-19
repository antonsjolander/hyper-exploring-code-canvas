import * as dat from "dat.gui";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gui = new dat.GUI();

const wave = {
	y: canvas.height / 2,
	length: 0.01,
	amplitude: 100,
	frequency: 0.01,
};

const strokeColor = {
	h: 200,
	s: 50,
	l: 50,
};

const waveFolder = gui.addFolder("wave");
waveFolder.add(wave, "y", 0, canvas.height);
waveFolder.add(wave, "length", -0.01, 0.01);
waveFolder.add(wave, "amplitude", -300, 300);
waveFolder.add(wave, "frequency", -0.01, 1);
waveFolder.open();
const strokeColorFolder = gui.addFolder("stroke color");
strokeColorFolder.add(strokeColor, "h", 0, 255);
strokeColorFolder.add(strokeColor, "s", 0, 100);
strokeColorFolder.add(strokeColor, "l", 0, 100);
strokeColorFolder.open();

let increment = wave.frequency;
function draw() {
	requestAnimationFrame(draw);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.moveTo(0, canvas.height / 2);
	for (let i = 0; i < canvas.width; i++) {
		ctx.lineTo(
			i,
			wave.y +
				Math.sin(i * wave.length + increment) *
					wave.amplitude *
					Math.sin(increment)
		);
	}
	ctx.stroke();
	ctx.strokeStyle = `hsl(${Math.abs(strokeColor.h * Math.sin(increment))}, ${
		strokeColor.s
	}%, ${strokeColor.l}%)`;
	increment += wave.frequency;
}

draw();
