var a = jQuery.noConflict();
        a(document).ready(function() {
        a('#carousel').infiniteCarousel({
           transitionSpeed:8000, /*Tiempo de avance de las imagenes*/
           displayTime: 500,   /* El tiempo en milisegundos para hacer pausa*/
           thumbnailType: 'false',
           customClass: 'myCarousel',
           easeLeft: 'linear',
           easeRight:'linear',
           advance: true,
           autoPilot: true,
        });
});