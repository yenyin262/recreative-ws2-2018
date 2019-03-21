(function($) {
  const emailBox = $('.subscribe-email');
  const confirmText = $('.confirm-text');
  const checkBoxDiv = $('.notification-check');
  const subscribeDiv = $('.subscribe-form');
  const subscribeBtn = $('.subscribe-btn');

  emailBox.on('click', () => {
    emailBox.attr('placeholder', 'email');
    confirmText.css('display', 'block');
    checkBoxDiv.show();
    if ($(window).width() <= 500) {
      subscribeDiv.css('display', 'block');
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
      checkBoxDiv.hide();
      confirmText.css('display', 'none');
    }
  });

  subscribeBtn.on('click', e => {
    e.preventDefault();
    const val = emailBox.val();
    const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (email_regex.test(val)) {
      subscribeDiv.replaceWith(
        '<h3 class="blue-text">Welcome to Club Recreative!</h3>'
      );
    } else {
      checkBoxDiv.show();
      subscribeBtn.css('color', 'red');
      emailBox
        .css('border-bottom', '2px solid red')
        .effect('shake', { times: 2, distance: 80 }, 600);
        confirmText.css('display', 'block');
      }

  });
})(jQuery);
