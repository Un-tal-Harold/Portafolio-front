const likes = document.querySelectorAll('#cantidad-lokes');
const bouttonlikes = document.querySelectorAll('#boton');
const simbololleno = document.querySelectorAll('#simbolo-lleno');
const simboloVacio = document.querySelectorAll('#simbolo-vacio')
const contenedor = document.querySelectorAll('#contSimbolo');
let truelike = 'novoto';
let cantidadLikes = '';
let disp = '';
document.addEventListener("DOMContentLoaded", function () {
    for (let i = 1; i <= 6; i++) {
        let boton = document.getElementById(`boton${i}`);
        if (boton) {
            boton.addEventListener("click", function () {
                // para sumar el like
                if (truelike === 'novoto') {
                    console.log(`Se hizo clic en el Botón ${i}`);
                    cantidadLikes = likes[i - 1].innerText;
                    cantidadLikes = parseInt(cantidadLikes);
                    likes[i - 1].innerText = cantidadLikes + 1;
                    simbololleno[i - 1].style.display = 'flex';
                    simboloVacio[i - 1].style.display = 'none';
                    console.log('ya voto')
                    simbololleno[i - 1].style.right = '-6px';
                    truelike = 'voto';
                    // Deshabilitar el botón después de votar
                    //boton.disabled = true;
                } else if (truelike === 'voto' && simbololleno[i-1].style.display === 'flex') {
                    // para restar el like
                    //console.log(`Se hizo clic en el Botón ${i}`);
                    cantidadLikes = likes[i - 1].innerText;
                    cantidadLikes = parseInt(cantidadLikes);
                    likes[i - 1].innerText = cantidadLikes - 1;
                    simbololleno[i - 1].style.display = 'none';
                    simboloVacio[i - 1].style.display = 'flex';
                    simboloVacio[i - 1].style.right = '-6px';
                    //console.log('se elimino el voto');
                    truelike = 'novoto';
                }
            });
        }
    }
});

function quetal(boton) {
    // Función adicional si es necesario
}
