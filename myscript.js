function mostrarDescripcion(element) {
    // Obtener todas las descripciones
    let descripciones = document.querySelectorAll(".descripcion");

    // Cerrar todas las descripciones excepto la actual
    descripciones.forEach(desc => {
        if (desc !== element.querySelector(".descripcion")) {
            desc.style.display = "none";
        }
    });

    // Alternar visibilidad de la descripción actual
    let descripcion = element.querySelector(".descripcion");
    descripcion.style.display = (descripcion.style.display === "block") ? "none" : "block";
}