import * as dat from "dat.gui";

const gui = new dat.GUI();
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
