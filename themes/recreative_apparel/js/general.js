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
      let gap = window.innerWidth <= 425 ? 0 : 60 ;
      if ($window.scrollTop() >= navTop - gap) {
        $('.ra-blue-logo').css('display', 'none');
        $('.rc-logo').css('display', 'none');
        $('.white-logo').css('display', 'none');
        $('.text-logo').fadeIn();
        if (window.innerWidth <= 425) {
          console.log('mobile');
          $('.sticky-nav')
            .css('padding-top', '50px')
            .css('background', '#fff');
          $('.text-logo')
            .css('width', '100%')
            .css('background-position', 'center')
            .css('margin-left', '0');
        } 
        // else {
        //   if (!$('body').hasClass('single-post')) {
        //     $('.ra-front-page-logo').css('display', 'none');
        //     $('.text-logo').fadeIn();
        //   }
        // }
      } else {
        $('.sticky-nav')
        .css('padding-top', '0')
        .css('background', '#fff');
        $('.ra-blue-logo').css('display', 'block');
        $('.white-logo').css('display', 'block');
        $('.rc-logo').css('display', 'block');
        $('.text-logo').css('display', 'none');
      }
    });
  });
})(jQuery);
