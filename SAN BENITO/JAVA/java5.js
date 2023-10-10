function mostrarInformacion(docenteId) {
    var infoDocente = document.getElementById("infoDocente" + docenteId);
    if (infoDocente.style.display === "block") {
        infoDocente.style.display = "none";
    } else {
        infoDocente.style.display = "block";
    }
}
