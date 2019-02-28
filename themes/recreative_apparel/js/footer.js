(function($) {
    'use strict';
    console.log('footer')
    $('.subscribe-email').on('focus', ()=> {
        $('.subscribe-email').attr('placeholder', 'email');
        $('.notification-check').css("display","block");
    })
    // .blur(function() {
    //     $('.subscribe-email').attr('placeholder', 'Subscribe');
    //     $('.subscribe-checkbox').css("display","none");
    //     $('.subscribe-text').css("display","none");
    // });

  })(jQuery);
  