function mostrarTexto(idBoton, idTexto) {
    let button2 = document.getElementById(idBoton);
    let texto2 = document.getElementById(idTexto)
    if (texto2.style.display === "none" || texto2.style.display === "") {
        texto2.style.display = "block";
        button2.textContent = "Ver menos"
    }
    else {
        texto2.style.display = "none";
        button2.textContent = "Ver más";
    }
}


