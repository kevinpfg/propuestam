const botonNo = document.getElementById("no");
const botonSi = document.getElementById("si");
const mensaje = document.getElementById("mensaje");
const pregunta = document.getElementById("pregunta");
const musica = document.getElementById("musica");

// Activar música al primer click
document.body.addEventListener("click", () => {
    musica.play();
});

// Botón NO se mueve
botonNo.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    botonNo.style.left = x + "px";
    botonNo.style.top = y + "px";
});

// Botón SÍ
botonSi.addEventListener("click", () => {
    pregunta.style.display = "none";
    botonSi.style.display = "none";
    botonNo.style.display = "none";
    mensaje.style.display = "block";

    crearCorazones();
});

// Corazones flotando
function crearCorazones() {
    setInterval(() => {
        const corazon = document.createElement("div");
        corazon.classList.add("corazon");
        corazon.innerHTML = "💖";

        corazon.style.left = Math.random() * window.innerWidth + "px";
        corazon.style.top = window.innerHeight + "px";

        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 4000);
    }, 300);
}