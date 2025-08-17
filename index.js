


































































































// Evento para dark mode.
// Obtiene el id del botón desde el html y le asigan el evento click
let botonDarkMode = document.getElementById("darkMode");
botonDarkMode.addEventListener("click", () => cambiarTema());

//Función para obtener el estado del darkMode recuperándolo desde el Storage
//del navegador
function chequearDarkMode() {
    const darkMode = localStorage.getItem("darkMode");
    console.log(darkMode);

    if (darkMode == "true") {
        document.body.classList = "darkMode";
    }
}

// Ejecución del código
chequearDarkMode();

let listadoPeliculas = cargarListado();
mostrarListado(listadoPeliculas);
//Let array = []










