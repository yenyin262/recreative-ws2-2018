(function($) {
  'use strict';
  const emailBox = $('.subscribe-email');
  const confirmText = $('.confirm-text');
  const checkBox = $('.notification-check');

  emailBox.on('click', () => {
    emailBox.attr('placeholder', 'email');
    confirmText.css('display', 'block');
    checkBox.toggle();
    if ($(window).width() <= 500) {
      $('.subscribe-form').css('display', 'block');
      $('.social-icon-section').hide();
    }
  });
  $('html').on('click', event => {
    if (
      !$(event.target).hasClass('subscribe-form') &&
      !$(event.target).hasClass('subscribe-email') &&
      !$(event.target).hasClass('subscribe-checkbox') &&
      !$(event.target).hasClass('confirm-text')
    ) {
      emailBox.attr('placeholder', 'Subscribe');
      checkBox.hide();
      confirmText.css('display', 'none');
      $('.social-icon-section').show();

    }
  });

  //   $('.subscribe-form').on('focusout', function() {

  //   });
})(jQuery);
