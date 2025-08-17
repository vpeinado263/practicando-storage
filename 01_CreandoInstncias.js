

// Evento para guardar formulario pelicula
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", guardarPelicula);

// Evento para dark mode.
// Obtiene el id del botón desde el html y le asigna el evento click
let botonDarkMode = document.getElementById("darkMode");
botonDarkMode.addEventListener("click", cambiarTema);

// Funcion asociada al evento para cambiar tema a darkMode
// (chequear "darkMode" en el css)
// En este caso está aplicada directamente sobre el body
function cambiarTema() {
    document.body.classList.toggle("darkMode");

    if (document.body.classList == "darkMode") {
        localStorage.setItem("darkMode", true);
    } else {
        localStorage.setItem("darkMode", false);
    }
}

function chequearDarkMode() {
    const darkMode = localStorage.getItem("darkMode");
    console.log(darkMode);

    if (darkMode = "true") {
        document.body.classList = "darkMode";
    }
}

chequearDarkMode();
