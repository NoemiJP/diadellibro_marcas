$(document).ready(function () {
    $("#tooltip").tooltip();
    var oscuro = false;
    $("#iniciar").click(function (event) {
        $('#myModal').modal('show');
    });
    $("#buscar").click(function (event) {
        alert("La búsqueda aun no ha sido implementada en la web");
    });
    $('#modo-oscuro').click(function () {
        if (!oscuro) {
            $('body').css('background-color', '#19180A');
            oscuro = true;
        } else {
            $('body').css('background-color', '#fff');
            oscuro = false;
        }
    });

    $('.card-body img').hover(function () {
        $(this).css('opacity', '0.4');

    }, function () {
        $(this).css('opacity', '1');
    });
});