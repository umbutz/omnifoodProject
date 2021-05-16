$(document).ready(function () {

    /* For The Sticky */
    $('.sefeatures').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }

    },  {
        offset: '60px'
    });

    /* Scroll buttons */
    $('.scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.seplans').offset().top}, 500)
    });

    $('.scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.sefeatures').offset().top}, 500)
    });

    /* Navegation Scroll */

    $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { 
                return false;
            } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
                };
        });
        }
    }

    });

    $('.jsicon-nav').click(function() {
        var nav = $('.jsmain-nav');
        var icon = $('jsicon-nav i');

        nav.slideToggle(200);


    })
});