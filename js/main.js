var g;
var mouseX = 0, mouseY = 0;

var p = {
	x: 200,
	y: 200
};

var init = function() {
	g = document.querySelector('#c').getContext('2d');
	g.canvas.width = 400;
	g.canvas.height = 400;
	loop();
};

var update = function() {
  p.x = mouseX //- p.x;
  p.y = mouseY //- p.y;
};

var draw = function() {
	g.clearRect(0, 0, g.canvas.width, g.canvas.height);
	g.fillStyle = 'rgba(0, 0, 0, 0.5)';
	g.beginPath();
	var radius = 10;
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
