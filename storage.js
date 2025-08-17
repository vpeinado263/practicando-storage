//CONTENIDO DE LAS CLASE
//LOCAL Y SESSION STORAGE
//FORMATO JSON

/******LOCAL STOTAGE******/

//setItem: Guarda un valor asociado a una clave en el storage
//Valor representa un variable con algún valor dentro, de cualquier tipo de dato:
//puede ser un string, boolen, integer, array, objeto, etc.

let dato = 5

//  key  :  value

localStorage.setItem("clave", dato);

//getItem: recupera un valor asociado a una clave en el storage.
localStorage.getItem("clave");

//removeItem: elimina una clave
localStorage.removeItem("clave");

//clear: limpia todo el contenido del storage
localStorage.clear();


/*** SESSION STORAGE ***/

// setItem: guarda un valor asociado a una clave en el storage
sessionStorage.setItem("clave", valor);

//getItem: recupera un valor asociado a una clave en el storage
sessionStorage.getItem("clave");

//removeItem: elimina una clave
sessionStorage.removeItem("clave");

//clear: Limpia todo el contenido del storage
sessionStorage.clear();

// GUARDANDO OBJETOS
// Primero lo comvertimos a JSON, el formato comprendido por el storage
// Los métodos del objeto JSON que nos provee Javascript son
// JSON.stringify()
// JSON.parse()
const alfajores = [
    {
        id: 0,
        marca: "Agila",
        descripción: "Alfajor minitorta clasica",
        precio: 100,
        img: "./img/agilaclasica.jpg",
    },
    {
        id: 1,
        marca: "Milka",
        descripción: "Alfajor con mouse de chocolate",
        precio: 90,
        img: "./img/milka mouse.jpg",
    },
];

alfajoresJSON = JSON.stringify("alfajores")
localStorage("alfajores", alfajores)