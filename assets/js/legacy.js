"use strict";
jQuery(document).ready(function () {
  // Shrink header on scroll
  // ---------------------------------------------------------------------------------------
  var header = jQuery('.header.fixed');
  function refresh() {
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 99) {
      header.addClass('shrink');
    } else {
      header.removeClass('shrink');
    }
    jQuery.waypoints('refresh');
  }
  ;
  jQuery(window).load(function () {
    refresh();
  });
  jQuery(window).scroll(function () {
    refresh();
  });
  jQuery(window).on('touchstart', function () {
    refresh();
  });
  jQuery(window).on('scrollstart', function () {
    refresh();
  });
  jQuery(window).on('scrollstop', function () {
    refresh();
  });
  jQuery(window).on('touchmove', function () {
    refresh();
  });


  jQuery('.sf-menu a, .scroll-to').click(function () {

      if (jQuery(this).hasClass('btn-search-toggle')) {
          jQuery('.header-search-wrapper').fadeToggle();
          jQuery('.header').toggleClass('header-overlay');
      }
      else {

          //var headerH = $('header').outerHeight();
          var headerH = 0;
          jQuery('.sf-menu a').removeClass('active');
          jQuery(this).addClass('active');
          jQuery('html, body').animate({
              scrollTop: jQuery(jQuery(this).attr('href')).offset().top - headerH + 'px'
          }, {
              duration: 1200,
              easing: 'easeInOutExpo'
          });
          return false;

      }
  });

  // fixed menu toggle
  jQuery('.menu-toggle').on('click', function(e){
    e.preventDefault();
    if(jQuery('.navigation').hasClass('opened')) {
      jQuery(this).find('.fa').removeClass('fa-times').addClass('fa-bars');
      jQuery('.navigation').removeClass('opened').addClass('closed');
    } else {
      jQuery(this).find('.fa').removeClass('fa-bars').addClass('fa-times');
      jQuery('.navigation').removeClass('closed').addClass('opened');
    }
  });

});

jQuery(window).load(function () {
    jQuery('body').scrollspy({offset: 100, target: '.navigation'});
});
jQuery(window).load(function () {
    jQuery('body').scrollspy('refresh');
});
jQuery(window).resize(function () {
    jQuery('body').scrollspy('refresh');
});

jQuery(window).load(function () {
    if (location.hash != '') {
        var hash = '#' + window.location.hash.substr(1);
        if (hash.length) {
            jQuery('html,body').delay(0).animate({
                scrollTop: jQuery(hash).offset().top - 44 + 'px'
            }, {
                duration: 1200,
                easing: "easeInOutExpo"
            });
        }
    }
});
