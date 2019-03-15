$(function () {

  if (window.location.search === '?page_id=18') {

    let modelCtrl = (function () {
      let data, max, percentage, degree, hScreen;

      return {
        calculateScroll: function (info, textR) {
          max = $('.wheelPercentage')['0'].offsetTop;
          data = info.path[1].pageYOffset - textR;
          hScreen = info.path[1].outerHeight;
          percentage = Math.round((data / (max - textR - hScreen / 2)) * 100);
          percentage = percentage > 100 ? 100 : percentage;
          degree = Math.round(percentage * 3.6);
        },

        getImgWidth: function () {
          let imageWidth;
          imageWidth = $('.imageBackground')['0'].clientWidth;
          return imageWidth / 420;
        },

        getScrollValue: function () {
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
          if (window.innerWidth > 600) {
            $(DOMStrings.scroll).css('transform', `rotate(${deg}deg)`);
            $(DOMStrings.imageBack).css('left', (150 - (deg * imageW)) + '%');
          }
        }
      };
    })();

    let controller = function (view, model) {
      window.onscroll = function (e) {

        let windowY = window.pageYOffset;
        let textR = $('.text-recycle').offset().top;

        if (windowY > textR) {
          let movement, imageWidth;

          // calculate values
          model.calculateScroll(e, textR);

          // obtain Values from scroll

          movement = model.getScrollValue();
          imageWidth = model.getImgWidth();

          //create the view changes

          view.displayScroll(movement, imageWidth);
        }
      };
    };

    controller(viewCtrl, modelCtrl);

    // I will change to the MVC model once I have worked more on it.\


    /* ================
    Arrow Up and arrow down
     =================    */

    
    if (window.innerWidth > 600) {
      let recorder, baseselector, recorderInverse, finalScore, top, mT;
      top = 0;
      mT = 110;

      recorder = []
      baseselector = $('.lateralMovement')[0].childNodes;
      baseselector.forEach(element => {
        if (element.offsetTop) { recorder.push(element.offsetTop - mT) }
      });
      recorder.pop();
      recorderInverse = recorder.slice().reverse();


      $('.fa-angle-down').on('click', function () {
        top = window.pageYOffset;
        finalScore = recorder.find(element => {
          return top +mT < element
        });
        finalScore ? '' : finalScore = recorder[0];
        screenMovement(finalScore-mT)
      });


      $('.fa-angle-up').on('click', function () {
        top = window.pageYOffset;
        finalScore = recorderInverse.find(element => {
          return top > element
        });
        finalScore ? '' : finalScore = recorder[0];
        screenMovement(finalScore - mT);
      });

      let screenMovement = function (MoveIt) {
        $('html, body').animate({
          scrollTop: MoveIt + mT 
        }, 1500, 'linear'
        );
      }
    }

    /* ================
    Testing mobile - scroll movement on touch
     =================    */


    if (window.innerWidth <= 600) {
      let recorder, baseselector, recorderInverse, movementdirectional, mT, lMovement;

      mT = 20;
      movementdirectional = 0;
      recorder = []
      baseselector = $('.lateralMovement')[0].childNodes;

      baseselector.forEach(element => {
        if (element.offsetLeft) { recorder.push(element.offsetLeft - mT) }
      });
      recorder.pop();
      recorderInverse = recorder.slice().reverse();
      

      $(window).on({
        touchstart: function (initialTouch) {
          lMovement = Math.abs($('.lateralMovement')[0].offsetLeft)

          if (window.innerWidth / 2 < initialTouch.touches[0].clientX) {
            movementdirectional = recorder.find(element => {
              return lMovement < element});
            }
          else {
            movementdirectional = recorderInverse.find(element => {return lMovement > element});
            }

          movementdirectional ? '' : movementdirectional = recorder[0];

          let degree = (movementdirectional / recorder[recorder.length-1]) * 360;


          //View controller. 

          $('.lateralMovement').animate({ 'margin-left': -movementdirectional }, 'slow');

          $('.imageBackground').animate({ 'margin-left': -(degree + 15) }, 'slow');

          $('.wheel').animate({ rotate: degree }, {
            step: function (now) {
              $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            },
            duration: 'slow'
          }, 'linear');
        }
      })
    }
  }
})
