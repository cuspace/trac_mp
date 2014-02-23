var g;

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

window.onload = init;
