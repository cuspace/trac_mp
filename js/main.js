var g;
var mouseX = 0, mouseY = 0;
var ac = new webkitAudioContext();
var osc = ac.createOscillator();
osc.connect(ac.destination);
osc.start(0);

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
	g.canvas.width = window.innerWidth;//400;
	g.canvas.height = window.innerHeight;//400;
	loop();
};

var update = function() {
  p.ax = mouseX - p.x;
  p.ay = mouseY - p.y;
  p.vx += p.ax * 0.1;
  p.vy += p.ay * 0.1;
  p.x += p.vx * 0.5;
  p.y += p.vy * 0.5;
  p.vx *= 0.9;
  p.vy *= 0.9;

  var v = Math.sqrt(p.vx*p.vx + p.vy*p.vy);
  osc.frequency.value = 440 * v * 0.1;
};

var draw = function() {
	//g.clearRect(0, 0, g.canvas.width, g.canvas.height);
	g.fillStyle = 'rgba(51, 204, 51, 0.2)';
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