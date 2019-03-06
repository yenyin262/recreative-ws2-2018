(function($) {
  'use strict';
  const headerAnimation = () => {
    const speed = 1000;
    var position = $('#primary').offset().top - 100;
    $("html, body").animate({scrollTop: position}, speed, "swing");
    return false;
  };

  $('#menu-primary-menu').click(function() {
    console.log('hey');
    setTimeout(headerAnimation, 1000);
  });
})(jQuery);
