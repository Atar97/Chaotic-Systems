import Test from './physics/test';
import { createGzip } from 'zlib';

document.addEventListener('DOMContentLoaded', () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(100, 100, 400, 300); 
    ctx.beginPath();
    ctx.arc(100, 200, 50, 0, 2*Math.PI);
    ctx.stroke();
})
