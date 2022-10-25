//crear elementos dentro de react
const e = React.createElement;

//¡Esto es un componente React!
const Button = () => e(
'button',
{ onClick: () => alert("Has hecho click!") },
'Haz Click!'
);

// Seleccionamos el div dentro de nuestro index.html
const domContainer = document.querySelector('#button_container');

//llamamos método de React (crea la base para utilizar librería dentro de nuestro <div>).
const root = ReactDOM.createRoot(domContainer);
// Con el método render vamos a mostrar el componente Button
root.render(e(Button));