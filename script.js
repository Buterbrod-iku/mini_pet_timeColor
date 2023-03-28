const play = () => {
	let color = document.getElementById('color').innerText;
	let component_color = document.getElementById('color');
	let body = document.getElementById('body');
	color = parseInt(color, 16);
	color += 10;
	color = color.toString(16);
	let div = document.getElementById('color');
	body.style.cssText = `background-color: #${color}`;
	component_color.textContent = color;
	console.log(color);
}
const timer = () =>{
	setInterval(() =>{
		let time = document.getElementById('time').textContent;
		let component = document.getElementById('time');
		time = parseInt(time, 10);
		time += 1;
		component.textContent = time;
		play();
	}, 100)
}
window.onload = function load() {
	timer()
}