var g;
var mouseX = 0, mouseY = 0;

var p = {
  x: 200,
  y: 200,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0
};

var init = function() {
	g = document.querySelector('#c').getContext('2d');
	g.canvas.width = 400;
	g.canvas.height = 400;
	loop();
};

var update = function() {
  p.ax = mouseX - p.x;
  p.ay = mouseY - p.y;
  p.vx += p.ax * 0.1;
  p.vy += p.ay * 0.1;
  p.x += p.vx * 0.1;
  p.y += p.vy * 0.1;
  p.vx *= 0.8;
  p.vy *= 0.8;
};

var draw = function() {
	g.clearRect(0, 0, g.canvas.width, g.canvas.height);
	g.fillStyle = 'rgba(0, 0, 0, 0.2)';
	g.beginPath();
	var radius = 5;
	g.arc(p.x, p.y, radius, 0, Math.PI * 2);
	g.fill();
};

var loop = function() {
	update();
	draw();
	requestAnimationFrame(loop);
};

var mousemove = function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
};

window.onload = init;
window.onmousemove = mousemove;
