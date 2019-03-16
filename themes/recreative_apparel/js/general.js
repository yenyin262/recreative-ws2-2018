(function($) {
  $(window).bind('load', function() {
    $('#menu-primary-menu li a[href]').each(function() {
      if (this.href == window.location.href) {
        $(this)
          .parent()
          .css('border-top', '5px solid #0545b2');
      }
    });

    let scrollFlag = false;
    $('html, body').animate(
      {
        scrollTop: $('.sticky-nav').offset().top - 500
      },
      800,
      function() {
        scrollFlag = true;
      }
    );

    $(window).on('scroll', function() {
      if (scrollFlag) {
        $('html, body').animate(
          {
            scrollTop: $('.sticky-nav').offset().top
          },
          1000
        );
        $(window).off('scroll');
      }
    });
  });
})(jQuery);
