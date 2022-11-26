const insert = document.getElementById('insert');
const body = document.body;

window.addEventListener('keydown', (e) => {
	console.log(e);

	insert.innerHTML = `
		<div class="key">
			${e.key}
			<small>event.key</small>
		</div>
		
		<div class="key">
			${e.code}
			<small>event.code</small>
		</div>

		<div class="key">
			${e.keyCode}
			<small>event.keyCode</small>
		</div>
	`;

	if(e.key == 'r') {
		body.style.background = '#FF9595';
	} 
	else if (e.key == 'b') {
		body.style.background = '#95B3FF';
	}
	else if (e.key == 'g') {
		body.style.background = '#95FF9F';
	}
	else if (e.key == 'p') {
		body.style.background = '#B795FF';
	}
	else {
		body.style.background = '#e1e1e1';
	}
});
