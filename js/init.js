(function($){
  $(function(){
  "use strict";

  var window_width = $(window).width();





    $('.carousel.carousel-slider').carousel({full_width: true});
    $('.carousel').carousel();
    $('.slider').slider({full_width: true});
    $('.parallax').parallax();
    $('.modal').modal();
    $('.scrollspy').scrollSpy();
    $('.button-collapse').sideNav({'edge': 'left', menuWidth: '240'});
    $('.datepicker').pickadate({selectYears: 20});
    $('select').not('.disabled').material_select();

    // Detect touch screen and enable scrollbar if necessary
      function is_touch_device() {
        try {
          document.createEvent("TouchEvent");
          return true;
        }
        catch (e) {
          return false;
        }
      }
      if (is_touch_device()) {
        $('#nav-mobile').css({
          overflow: 'auto'
        })
      }

    }); // end of document ready
})(jQuery); // end of jQuery name space
