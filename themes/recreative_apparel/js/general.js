(function($) {
  $(window).bind('load', function() {
    $('#menu-primary-menu li a[href]').each(function() {
      if (this.href == window.location.href) 
      {
          $(this).parent().css('border-top', '5px solid #0545b2');
      }
    });
  });
})(jQuery);
