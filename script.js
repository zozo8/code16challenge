let canvas, ctx, counter = 0;
function step(timestamp) {
    for (let i = 0; i < 200; i++) {
        for (let j = 0; j < 200; j++) {
            ctx.fillStyle = `hsl(${(((i + j) * i) + timestamp) % 360},100%, 50%)`;
            ctx.fillRect(j * 5, i * 5, 5, 5);
        }
    }
    ctx.fillText("#code16challenge by Zozo", (counter += 10) % 730 - 430, 50 + (Math.sin(counter / 100) + 1) * 40);
    window.requestAnimationFrame(step);
}
this.onload = function () {
    ctx = document.getElementById('canvas').getContext('2d');
    ctx.font = "20px c64";
    window.requestAnimationFrame(step);
}