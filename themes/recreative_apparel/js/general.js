<<<<<<< HEAD
// (function($) {
//   // 'use strict';

//   //Scroll animation
//   // const headerAnimation = () => {
//   //   const speed = 1000;
//   //   var position = $('#primary').offset().top - 500;
//   //   console.log(position);
//   //   $('html, body').animate({ scrollTop: position }, speed, 'swing');
//   //   return false;
//   // };
//   // setTimeout(headerAnimation, 1000);

//   // header animation
//   // $('.header-banner').toggle('slide', 'right', 1000);

//   // $('#menu-primary-menu a').click(function(e) {
//   //   e.preventDefault();
//   //   var link = $(this).attr('href');
//   //   $.ajax({
//   //     method: 'get',
//   //     url: link,
//   //     beforeSend: function(xhr) {
//   //       xhr.setRequestHeader('X-WP-Nonce', red_vars.wpapi_nonce);
//   //     }
//   //   }).done(function(response) {
//   //     console.log(response);
//   //     console.log('clicked ajax');
//   //     $('html').empty();
//   //     $('html').html(response);
//   //   });
//   // });
// })(jQuery);

// //   url: red_vars.rest_url + 'wp/v2/pages/' + red_vars.page_id,
=======
(function($) {
  'use strict';
  const headerAnimation = () => {
    const speed = 1000;
    var position = $('#primary').offset().top - 500;
    $("html, body").animate({scrollTop: position}, speed, "swing");
    return false;
  };

  $('#menu-primary-menu').click(function() {
    console.log('hey');
    setTimeout(headerAnimation, 1000);
  });
})(jQuery);
>>>>>>> 08347360509c85f490ec6410a62bdeee04a788e2
