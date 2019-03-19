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
      { scrollTop: $('.sticky-nav').offset().top - 600}, 800,
      function() {
        scrollFlag = true;
      }
    );

    $(window).on('scroll', function() {
      if (scrollFlag) {
        $('.ra-blue-logo').css('display', 'none');
        $('html, body').animate(
          {scrollTop: $('.sticky-nav').offset().top}, 1000, function(){
            $('.rc-logo').css('display', 'none');
            $('.ra-front-page-logo').css('display', 'none');
            $('.text-logo').css('display', 'block');    
          }
        );
        $(window).off('scroll');
      }
    });
  });
})(jQuery);
