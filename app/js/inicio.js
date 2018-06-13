var Usuario = /** @class */ (function () {
    function Usuario(nombre, apellido, urlImagen) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.urlImagen = urlImagen;
    }
    return Usuario;
}());
var paola = new Usuario('PAOLA', 'GUAMANI', 'https://cocina-casera.com/wp-content/uploads/2015/04/brownie_chocolate_receta.jpg');
console.log('Usuario: ', paola);
function cambiarImagen() {
    var etiquetaImagen = document.getElementById('imagen');
    etiquetaImagen.src = paola.urlImagen;
}
function cambiarBorderTabla() {
    var etiquetaTabla = document.getElementById('tablapaola');
    etiquetaTabla.class = etiquetaTabla.class + ' borde-rojo';
}
function crearContenido() {
    var etiquetaContenedora = document.getElementById('contenido');
    var parrado = document.createElement("p");
    parrado.innerHTML = 'fhdsjd';
    var imagenm = document.createElement("img");
    imagenm.src = paola.urlImagen;
    etiquetaContenedora.appendChild(parrado);
    etiquetaContenedora.appendChild(imagenm);
}
