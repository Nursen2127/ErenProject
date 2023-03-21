var coun = 1;
if ($(document).scrollTop() > 100) {
    coun = coun + 1;
    $('.counter-count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}
$(window).scroll(function () {



    if ($(document).scrollTop() > 100 && coun < 2) {
        coun = coun + 1;
        $('.counter-count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
});

$(document).ready(function () {
    $('.select').selectpicker();
    var w = $(window).width(), h = $(window).height();

    if(w<991){
        $('.Sidebar-mobile').addClass('collapse');
    }

    $(".button a").click(function () {
        $(".overlay").toggleClass('overlay-active');
        $("body").toggleClass('over');
        $(".Right").toggleClass('Right-active');
        $(".Navtop").toggleClass('Navtop-passive');
        $(this).toggleClass('btn-open').toggleClass('btn-close');

    });





    var swiper1 = new Swiper('#Slider', {
        effect:'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },


    });

    var swiper3 = new Swiper('.swiper-container-proje', {
        //effect:'fade',
        //centeredSlides: true,
        //spaceBetween: 0,
        //slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },


    });


    var swiper2 = new Swiper('.A_projeler-slider .swiper-container1', {
        //effect:'fade',
        centeredSlides: true,
        spaceBetween: 0,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2'
        },


    });


    $(".A_projeler-tab .nav-item").click(function () {

        setTimeout(function () {
            var swiper3 = new Swiper('.A_projeler-slider .swiper-container2', {
                //effect:'fade',
                centeredSlides: true,
                spaceBetween: 0,
                slidesPerView: 1,
                navigation: {
                    nextEl: '.swiper-button-next2',
                    prevEl: '.swiper-button-prev2'
                },


            });
        }, 200);

    });




    $('.Urun_detay-galeri-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.Urun_detay-galeri-thum'
    });
    $('.Urun_detay-galeri-thum').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.Urun_detay-galeri-slider',
        //centerMode: true,
        dots: false,
        focusOnSelect: true
    });


    if ($(document).scrollTop() > 70) {

        $(".Navtop").addClass('Navtop-active');
    } else {
        $(".Navtop").removeClass('Navtop-active');
    }


    $(window).scroll(function () {

        var w = $(window).width(), h = $(window).height();
        if ($(document).scrollTop() > 70) {

            $(".Navtop").addClass('Navtop-active');
        } else {
            $(".Navtop").removeClass('Navtop-active');
        }
    });


    var w = $(window).width(), h = $(window).height();


    $(function () {

        $('#UpTotop').click(
            function () {
                $('body,html').animate({scrollTop: 0}, 800);
            });
        var $elem = $('body');
    });


});











