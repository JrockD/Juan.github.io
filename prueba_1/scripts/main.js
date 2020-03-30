var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/logo.jpg') {
      miImage.setAttribute('src','images/logo2.jpg');
    } else {
      miImage.setAttribute('src', 'images/logo.jpg');
    }
}
var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');
function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Zacatelcoradio es lo maximo,' + miNombre;
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Zacatelcoradio es lo maximo,' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}
