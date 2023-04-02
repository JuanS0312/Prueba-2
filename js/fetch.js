const imagenContainer = document.getElementById("imagen");

function BuscarPerro() {

	let perro = document.getElementById("perro").value.trim().toLowerCase();
	console.log(perro);
	fetch(`https://dog.ceo/api/breed/${perro}/images/random/10`)
		.then((response) => response.json())
		.then((data) => {
			procesarRespuesta(data);
			imagenContainer.innerHTML = "";

			data.message.forEach((element) => {
				const img = document.createElement("img");
				img.src = element;
				imagenContainer.appendChild(img);
			});
		})
		.catch(err => console.log(err));

}

function procesarRespuesta(data) {
	console.log(data);
}	