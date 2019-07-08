document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

function cargarNombres(e) {
	e.preventDefault();
	//leer las llaves

	const origen = document.querySelector('#origen');
	const origenSeleccionado = origen.options[origen.selectedIndex].value;
	const genero = document.querySelector('#genero');
	const generoSeleccionado = genero.options[genero.selectedIndex].value;
	const cantidad = document.querySelector('#numero').value;


	let url = '';
	url += 'http://uinames.com/api/?';
	//si hay origen agregar
	if (origenSeleccionado !== '') {url += `region=${origenSeleccionado}&`;}
	if (generoSeleccionado
		!== '') { url += `gender=${generoSeleccionado}&`;}
	if (cantidad
		!== '') { url += `amount=${cantidad}&`;}

	fetch(url)
		.then(res => res.json())
		.then(data => {
			let html = `<h2>Nombres Generados</h2>`;
			html += '<ul class="lista">';
			data.forEach(resp => {
				html +=
					`
		 			<li>${resp.name}</li>
		 		`;
			})
			html += '</ul>';
			document.querySelector('#resultado').innerHTML = html;

		}
		)
		.catch(err => console.log(err))

	//  const xhr = new XMLHttpRequest();

	//  xhr.open('GET',url,true);

	//  xhr.onload = function(){
	//  	if (this.status === 200) {
	//  		const resp = JSON.parse(this.responseText);
	//  		let html = `<h2>Nombres Generados</h2>`;


	//  		html  += '<ul class="lista">';
	//  			resp.forEach(function(res){
	//  				html+=`
	//  					<li>${res.name}</li>
	//  				`;
	//  			})
	//  		html  += '</ul>';

	//  		document.querySelector('#resultado').innerHTML = html;

	//  	}
	//  }
	//  xhr.send();
}