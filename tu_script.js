document.addEventListener("DOMContentLoaded", function () {
    // Agrega un listener de clic a cada botón
    for (let i = 1; i <= 15; i++) {
        let boton = document.getElementById(`boton${i}`);
        if (boton) {
            boton.addEventListener("click", function () {
                // Esta función se ejecutará cuando se haga clic en el botón
                console.log(`Se hizo clic en el Botón ${i}`);
            boton.innerText='harold';
                // Puedes hacer más cosas aquí según tus necesidades
            });
        }
    }
});