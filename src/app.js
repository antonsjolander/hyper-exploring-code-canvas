import * as dat from "dat.gui";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.beginPath();
ctx.moveTo(0, canvas.height / 2);

const gui = new dat.GUI();

const wave = {
	y: canvas.height / 2,
	length: 0.01,
	amplitude: 100,
};

gui.add(wave, "y", 0, canvas.height);
gui.add(wave, "length", -0.01, 0.01);

for (let i = 0; i < canvas.width; i++) {
	ctx.lineTo(i, wave.y + Math.sin(i * wave.length) * wave.amplitude);
}

ctx.stroke();
