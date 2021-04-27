const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
});


// Se agrega la barra de darkMode

var donen = document.querySelector(":root");
function onOff() {
	if (document.getElementsByClassName("d-right")[0]) {
		document
			.getElementsByClassName("clickOnOrOff")[0]
			.classList.remove("d-right");
		donen.style.setProperty("--white", "#fff");
		donen.style.setProperty("--black", "#000");
	} else {
		document.getElementsByClassName("clickOnOrOff")[0].classList.add("d-right");
		donen.style.setProperty("--white", "#000");
		donen.style.setProperty("--black", "#fff");
	}
};

// revisar codigo por error

window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');

    // Agregamos los listener de los enlaces para filtrar por categoría.
    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('activo'));
            evento.target.classList.add('activo');

            const categoria = evento.target.innerHTML.toLowerCase();
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
            console.log(categoria);
            
        })        
    })

    // Agregar listener para la barra de busqueda.
document.querySelector('#barra-busqueda').addEventListener('input', (evento) =>{
    const busqueda = evento.target.value;
    grid.filter((item) => item.getElement().dataset.etiquetas.includes(busqueda));

});
});

