document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "formulario-enviado.html";
});

document.querySelector(".button-back").addEventListener("click", function () {
    window.location.href = "index.html";
});