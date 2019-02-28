(function($) {
    'use strict';
    console.log('hello')

    $('.recycle-form-btn').on('click', function(){
        console.log('clicked')
        $('.recycle-form').replaceWith(
            "<div class='recycle-form-msg'>" +
            "<svg width='140px' height='140px' viewBox='0 0 140 140' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>" +
            "<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>" +
            "<g id='Shoopingcart-final-' transform='translate(-314.000000, -762.000000)' stroke='#0545B2'>" +
            "<g id='Group-2' transform='translate(316.000000, 764.000000)'>" +
            "<circle id='Oval' stroke-width='3' cx='68' cy='68' r='68'></circle>" +
            "<polyline id='Path-3' stroke-width='9' stroke-linecap='round' stroke-linejoin='round' points='38 66.3555309 61 89.03125 98.5 46'></polyline>" +
            "</g></g></g></svg>" +
            "<h3 class='blue-text heading'>Thank you!</h3>" +
            "<p class='blue-text'>Expect Email from us soon.</p></div>");
    });

  })(jQuery);
  