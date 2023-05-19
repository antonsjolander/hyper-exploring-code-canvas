const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw() {
	ctx.strokeStyle = "red";
	ctx.beginPath();
	ctx.moveTo(canvas.width / 2, 0);
	ctx.lineTo(canvas.width / 2, canvas.height);
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.moveTo(0, canvas.height / 2);
	ctx.lineTo(canvas.width, canvas.height / 2);
	ctx.strokeStyle = "green";
	ctx.stroke();
	ctx.closePath();
	ctx.moveTo(0, 0);
	ctx.lineTo(canvas.width, canvas.height);
	ctx.moveTo(canvas.width, 0);
	ctx.lineTo(0, canvas.height);
	ctx.stroke();
	ctx.beginPath();
	ctx.rect(canvas.width / 2 - 250, canvas.height / 2 - 250, 500, 500);
	ctx.strokeStyle = "blue";
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, 2 * Math.PI);
	ctx.strokeStyle = "purple";
	ctx.stroke();
	ctx.font = "200px Arial";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText("Hello World", canvas.width / 2, canvas.height / 2);
}

draw();

window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	draw();
});
