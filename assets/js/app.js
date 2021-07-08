$(document).ready(function () {

    $("a").click(function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var gato = this.hash;

            $("html").animate({
                    scrollTop: $(gato).offset().top - 72,
                },
                800
            );
        }
    });

});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
    $('[data-toggle="popover"]').popover()
})

