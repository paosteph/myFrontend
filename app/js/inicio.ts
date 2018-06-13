class Usuario {
    constructor(
        public nombre: string,
        public apellido: string,
        public urlImagen: string,
    ){

    }
}

const paola = new Usuario('PAOLA', 'GUAMANI', 'https://cocina-casera.com/wp-content/uploads/2015/04/brownie_chocolate_receta.jpg');
console.log('Usuario: ',paola);

function cambiarImagen() {
    const etiquetaImagen:any = document.getElementById('imagen');
    etiquetaImagen.src = paola.urlImagen;
}

function cambiarBorderTabla() {
    const etiquetaTabla: any = document.getElementById('tablapaola');
    etiquetaTabla.className = 'borde-rojo';
}

function crearContenido() {
    const etiquetaContenedora = document.getElementById('contenido');
    const parrado = document.createElement("p");
    parrado.innerHTML = 'fhdsjd';
    const imagenm = document.createElement("img");
    imagenm.src = paola.urlImagen;
    etiquetaContenedora.appendChild(parrado);
    etiquetaContenedora.appendChild(imagenm);
}