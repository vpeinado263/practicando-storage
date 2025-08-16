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