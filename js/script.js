(function () {
    $('.menu-button').click(function () {
        if ($('.my-container').hasClass('new-bg')) {
            $('.my-container').removeClass('new-bg');
            $('.logo-img2').addClass('hidden-logo');
            $('.logo-img').removeClass('hidden-logo');
            $('.navbar-toggler-icon').removeClass('navbar-toggler-icon-close');
        } else {
            $('.my-container').addClass('new-bg');
            $('.logo-img').addClass('hidden-logo');
            $('.logo-img2').removeClass('hidden-logo');
            $('.navbar-toggler-icon').addClass('navbar-toggler-icon-close');
        }
    });
}());
$(document).ready(function () {
    const slider = $("#slider-1").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        items:1
    });
});
$(document).ready(function () {
    const slider = $("#slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3,
            },
            1299: {
                nav: true,
                dots: false
            }
        }
    });
});
$(document).ready(function () {
    const slider = $("#slider-2").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3,
                nav:true,
                dots:false
            },
        }
    });
});
