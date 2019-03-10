$(function() {
  
 
 
  if (window.location.search === '?page_id=18') {




    let modelCtrl = (function() {
      let data, max, percentage, degree, hScreen;

      return {
        calculateScroll: function(info,textR) {
          max = $('.wheelPercentage')['0'].offsetTop;
          data = info.path[1].pageYOffset - textR;
          hScreen = info.path[1].outerHeight;
          percentage = Math.round((data / (max- textR - hScreen / 2)) * 100);
          percentage = percentage > 100 ? 100 : percentage;
          degree = Math.round(percentage * 3.6);
        },

        getImgWidth: function() {
          let imageWidth;
          imageWidth = $('.imageBackground')['0'].clientWidth;
          return imageWidth / 420;
        },

        getScrollValue: function() {
          return degree;
        }
      };
    })();

    let viewCtrl = (function () {
        let DOMStrings = {
            'scroll': '.wheel',
            'imageBack': '.imageBackground'
        };

        return {

            displayScroll: function (deg, imageW) {
                if(window.innerWidth>425){
                $(DOMStrings.scroll).css('transform', `rotate(${deg}deg)`);
                $(DOMStrings.imageBack).css('left', (150 - (deg * imageW))+"%");
                }
            }
        };
    })();

    let controller = function(view, model) {
      window.onscroll = function(e) {

        let windowY = window.pageYOffset;
        let textR = $('.text-recycle').offset().top;

        if(windowY>textR){
        let movement, imageWidth;

        // calculate values
        model.calculateScroll(e,textR);

        // obtain Values from scroll

        movement = model.getScrollValue();
        imageWidth = model.getImgWidth();

        //create the view changes

        view.displayScroll(movement, imageWidth);
      }
      };
    };

    controller(viewCtrl, modelCtrl);

    // I will change to the MVC model once I have worked more on it.

    $('.fa-angle-down').on('click', function(e) {
      e.preventDefault();

      $('html, body').animate(
        {
          scrollTop: $(window).scrollTop() + 520
        },
        1500,
        'linear'
      );
    });

    $('.fa-angle-up').on('click', function(e) {
      e.preventDefault();

      $('html, body').animate(
        {
          scrollTop: $(window).scrollTop() - 520
        },
        1500,
        'linear'
      );
    });


/* ================
Testing mobile
 =================    */


if(window.innerWidth<=600){

    

    let m__d = 15;
    let movementdirectional = 0;
    let story1 = $('.story-recycle1')[0].offsetLeft-m__d;
    let story2 = $('.story-recycle2')[0].offsetLeft-m__d;
    let story3 = $('.story-recycle3')[0].offsetLeft-m__d;
    let story4 = $('.story-recycle4')[0].offsetLeft-m__d;
    let story5 = $('.story-recycle5')[0].offsetLeft-m__d;
    let story6 = $('.story-recycle6')[0].offsetLeft-m__d;
    
    
    $(window).on({
      touchstart: function(initialTouch) {
        let lMovement = Math.abs($('.lateralMovement')[0].offsetLeft)

        if(window.innerWidth/2<initialTouch.touches[0].clientX){
       
       
       if(lMovement<story2){movementdirectional = story2} 
        else if(lMovement<story3){movementdirectional= story3}
        else if(lMovement<story4){movementdirectional =story4}
        else if (lMovement<story5){movementdirectional =story5}
        else if (lMovement+20<story6){movementdirectional = story6;}
        else{movementdirectional = story1}

      }
      else{
        if (lMovement> story5){movementdirectional = story5;}
        else if (lMovement>story4){movementdirectional =story4}
        else if (lMovement>story3){movementdirectional =story3}
        else if (lMovement>story2){movementdirectional =story2}
        else if (lMovement>story1){movementdirectional =story1}
        
      }

        $('.lateralMovement').animate({'margin-left':-movementdirectional},'slow');
            
        
  }}) }
}})
