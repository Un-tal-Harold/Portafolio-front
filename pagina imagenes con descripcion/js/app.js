document.addEventListener('DOMContentLoaded', function () {
    // Datos de ejemplo
    var datos = {
        etiquetas: [
            'El eje cafetero','San andres','Piedra del peñol','Cartagena','Bogotá'
        ],
        datasets: [{
            data: [12,18,45,4,34],
            backgroundColor: ['#F3EB88 ', '#F3C288 ', '#88F39A ','#88D6F3 ','#CFA0F1 ','#F57D53']
            
        }]
    };

    // Configuración de la gráfica
    var opciones = {
        responsive: true,

    };

    // Crear la gráfica de torta
    var ctx = document.getElementById('miGrafica').getContext('2d');
    var miGrafica = new Chart(ctx, {
        type: 'pie',
        data: datos,
        options: opciones
    });
});
