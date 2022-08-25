(function ($) {
    "use strict";
    // Toggler navbar
    $(".nav-menu-content-dropdown").click(function() {
        $(this).find("ul").toggleClass("show");
    })
    $(".nav-menu-content-dropdown").click(function() {
        $(this).toggleClass("show");
    })
    $(".toggle").click(function() {
        $(".nav-menu-content").toggleClass("show");
    })
    $(".toggle-close").click(function() {
        $(".nav-menu-content").toggleClass("show");
    })
    $(".explore-tabs .nav-link").click(function() {
        $(".explore-tabs").toggleClass("dropnav");
    })

    AOS.init({ offset: 0, duration: 500, delay: 50 });

})(window.jQuery);

$("a[href*=\\#]:not([href=\\#])").on("click", function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
            $("html,body").animate({
                scrollTop: target
                    .offset()
                    .top - 80
            }, 200, 'swing', function () {
                window.location.hash = '';
            });
            return false;
        }
    }
});

$(window).scroll(function () {
    onScroll();
    if ($(this).scrollTop() > ($("#home").height() - 54)) {
        $('.nav').addClass('sticky');
    } else {
        $('.nav').removeClass('sticky');
    }
});

function onScroll() {
    var scrollPos = $(document).scrollTop();
    $(".nav a").each(function() {
      var currLink = $(this);

      try {
        var refElement = $(currLink.attr("href"));
        if (
          (refElement.position().top - 100) <= scrollPos &&
          (refElement.position().top - 100) + refElement.height() > scrollPos
        ) {
          $(".nav li a").removeClass("active");
          currLink.addClass("active");
        } else {
          currLink.removeClass("active");
        }
      } catch (e) {
        // Ignore href='javascript:;'
      }
    });
}

var owlSlider = $('#owl-testimony');
owlSlider.owlCarousel({
    navigation: true,
    nav: false,
    dots: false,
    dotsEach: 1,
    autoWidth: false,
    loop: true,
    responsiveClass: true,
    margin: 24,
    items: 1,
    autoplay: true,
    smartSpeed: 300,
    animateIn: 'ease-in-out',
    animateOut: 'ease-in-out',
    responsive: {
        480: {
            items: 1,
        },
        992: {
            slideBy: 1,
            items: 4
        }
    }
});

$(".owl-previous").click(function() {
    owlSlider.trigger('prev.owl.carousel')
})
$(".owl-next").click(function() {
    owlSlider.trigger('next.owl.carousel')
})