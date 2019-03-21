(function($) {
  $(window).bind('load', function() {
    const navTop = $('.sticky-nav').offset().top;
    const $window = $(window);

    //Add current page to border top
    $('#menu-primary-menu li a[href]').each(function() {
      if (this.href == window.location.href) {
        $(this)
          .parent()
          .css('border-top', '5px solid #0545b2');
      }
    });

    $('html, body').animate({ scrollTop: navTop - 600 }, 800);

    $(window).on('scroll', function() {
      if ($window.scrollTop() >= navTop - 60) {
        $('.ra-blue-logo').css('display', 'none');
        $('.rc-logo').css('display', 'none');
        if (!$('body').hasClass('single-post')) {
          $('.ra-front-page-logo').css('display', 'none');
          $('.text-logo').fadeIn();
        }
      } else {
        $('.ra-blue-logo').css('display', 'block');
        $('.white-logo').css('display', 'block');
        $('.rc-logo').css('display', 'block');
        $('.text-logo').css('display', 'none');
      }
    });
  });
})(jQuery);
