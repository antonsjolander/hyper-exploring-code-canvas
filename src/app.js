import * as dat from "dat.gui";
const gui = new dat.GUI();
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const img = new Image();
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

img.src =
	"http://pixel.nymag.com/imgs/daily/vulture/2016/08/11/11-obama-sex-playlist.w529.h529.jpg";
img.onload = pixelate;

// ctx.mozImageSmoothingEnabled = false;
// ctx.webkitImageSmoothingEnabled = false;
// ctx.imageSmoothingEnabled = false;

const blocks = {
	value: 5,
};

gui.add(blocks, "value", 0, 50);

function pixelate() {
	const size = blocks.value * 0.01;
	const w = canvas.width * size;
	const h = canvas.height * size;

	ctx.drawImage(img, 0, 0, canvas.width, canvas.width);
	ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
}
