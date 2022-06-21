
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


$(document).ready(function () {

    /*click btn enviar Correo*/
    $("#enviar-datos").click(function () {

        alert("Tus datos se han enviado correctamente...");
    });


    /*cambiar color de subtitulo a Rojo con doble click*/
    $("#titulos").on("dblclick", function () {
        $(this).css({
            "color": "red"
        });
    });

    /**/
    /*cambiar color de subtitulo a Negro con un click*/
    $("#titulos").on("click", function () {
        $(this).css({
            "color": "black"
        });
    });

    $("h2").on("dblclick", function () {
        $(this).css({
            "color": "red"
        });
    });

    /**/
    /*cambiar color de subtitulo a Negro con un click*/
    $("h2").on("click", function () {
        $(this).css({
            "color": "black"
        });
    });

    /*ocultar o mostrar contenido de las card al hacer click en el titulo de la receta*/
    $(".card-title").on("click", function () {
        $('.img-top').toggle("slow");
        $('.card-text').toggle("slow");
    });

    /*hacer un smooth control*/
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top - 100
                },
                1500);
        }
    });

});