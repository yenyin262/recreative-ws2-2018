$(function () {

  if ($('body').hasClass('page-id-18')) {
     
    controller(viewCtrl, modelCtrl);
    arrowController(arrowModel, arrowView);
    mobileController(mobileModel, mobileView);

    window.onresize = ()=>{
      $('.lateralMovement').css('margin-left',0);
    }
 }
})

let modelCtrl = (function () {
  let data, max, percentage, degree, hScreen;

  return {
    calculateScroll: function (info, textR) {

      data = window.pageYOffset - textR;
     
      max = $('.wheelPercentage')[0].offsetTop;
      hScreen = $(window).innerHeight();
      percentage = Math.round((data / (max - textR - hScreen / 2)) * 100);
      percentage = percentage > 100 ? 100 : percentage;
      degree = Math.round(percentage * 3.6);
    },

    getImgWidth: function () {
      let imageWidth;
      imageWidth = $('.imageHolder img')[0].clientWidth;
      return imageWidth;
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
        imageW = imageW * 0;
        $(DOMStrings.imageBack).css('left', (150 - (deg * .85 + imageW)) + '%');
      }
    }
  };
})();

let controller = function (view, model) {
  window.onscroll = function (e) {


    let windowY = window.pageYOffset;
    let textR = $('.text-recycle')[0].offsetTop;


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

/* ================
Arrow Up and arrow down
 =================    */


let arrowModel = (() => {

  let baseselector, mT, top;

  top = 0;
  mT = 110;
  baseselector = $('.story-recycle');

  let data = {
    recorder: [],
    recorderInverse: '',

  }

  // calculate the position of each element
  let calculatePosition = () => {

    baseselector.each(function () {
      if ($(this)[0].offsetTop) { data.recorder.push($(this)[0].offsetTop - mT) }
    });

    //calculate the reverse position of each element
    data.recorderInverse = data.recorder.slice().reverse();
  }

  return {

    calcPosition: () => {
      data.recorder.length = 0;
      calculatePosition();
    },
    findPosition: () => {
      top = window.pageYOffset;
      let fP = data.recorder.find(element => {
        return top < (element - 1)
      });

      return {
        'position': fP,
        'top': top,
        'record': data.recorder,
      }
    },

    findUpPosition: () => {
      top = window.pageYOffset;
      let uPosition = data.recorderInverse.find(element => {
        return top > element
      });


      return {
        'position': uPosition,
        'record': data.recorder,
      }
    }
  }
})();

let arrowView = (() => {
  //controlling window 
  
    $('.lateralMovement').css('margin-left', 0);
    return {
      screenMovement: function (MoveIt) {
        if (window.innerWidth > 600) {
        $('html, body').animate({ scrollTop: MoveIt }, 500, 'linear');
        }
      }
    }
  }
)();

let arrowController = ((aModel, aView) => {
  let finalScore;
  
    $('.fa-angle-down').click(function () {
    
    let aFindPos = aModel.findPosition()
    //search for the positions
    aModel.calcPosition();
    //obtain final Score From aModel
    finalScore = aFindPos.position;
    //fixing last position retourning at the top
    (aFindPos.top + window.innerHeight) > $('.wheelPercentage')[0].offsetTop ? finalScore = aFindPos.record[0] : '';
    //selecting new position

    aView.screenMovement(finalScore);
    
  });


  $('.fa-angle-up').click(function () {
    
    aModel.calcPosition();
    finalScore = aModel.findUpPosition().position;
    finalScore ? '' : finalScore = aModel.findPosition().record[0];
    aView.screenMovement(finalScore);
    
  })
});

/* ================
Testing mobile - scroll movement on touch
 =================    */

let mobileModel = (() => {
  let baseselector, movementdirectional, mT, lMovement, sideReport;
  $('.lateralMovement').css('margin-left', 0);
  mT = 20;
  movementdirectional = 0;
  baseselector = $('.story-recycle');


  let data = {
    recorder: [],
    recorderInverse: '',
    window: '',
  }

  data.window = window.innerWidth;
  baseselector.each(function () {
    if ($(this)[0].offsetLeft) { data.recorder.push($(this)[0].offsetLeft - mT) }
  });
  data.recorder[0] = 0;

  let positionLateral = () => {

    if (data.window !== window.innerWidth) {
      $('.lateralMovement').css({ 'margin-left': 0, 'opacity': 0 }, 'slow').css({ 'opacity': 1 }, 500);
      data.window = window.innerWidth;
      data.recorder.length = 0;

      baseselector.each(function () {
        if ($(this)[0].offsetLeft) { data.recorder.push($(this)[0].offsetLeft - mT) }
      })
      data.recorder[0] = 0;

    }

    data.recorderInverse = data.recorder.slice().reverse();
  };


  return {
    calculatePositionLateral: () => {

      positionLateral();
    },

    calculateCurrentItem: (item) => {
      lMovement = Math.abs($('.lateralMovement')[0].offsetLeft);

      if (window.innerWidth / 2 < item.originalEvent.clientX) {
        movementdirectional = data.recorder.find(element => {
          return lMovement < element
        });
        sideReport = 1;
      }
      else {
        movementdirectional = data.recorderInverse.find(element => { return lMovement > element });
        sideReport = 0;
      }

      movementdirectional ? '' : movementdirectional = data.recorder[0];
      let controlMovement = movementdirectional === data.recorder[0] && sideReport === 1 && lMovement > 100;
      let color = controlMovement ? 0 : 1;

      return {
        movemente: movementdirectional,
        cMovemente: controlMovement,
        color: color,
      }

    }
  }


})()
let mobileView = (() => {
  
  let moveLateral = (data) => {
    if (window.innerWidth <= 600) {
    $('.lateralMovement').animate({ 'margin-left': -data.movemente, 'opacity': data.color }, data.cMovemente ? 0.5 : 'slow').animate({ 'opacity': 1 }, 500);
  }}

  return {
    activatemoveLateral: (UI) => {
      moveLateral(UI);
    }
  }

})()
let mobileController = ((mModel, mView) => {

 
  $(window).click(function (initialTouch) {
   
    //calculate position of the contenedors element

    mModel.calculatePositionLateral();

    //calculate position of the main element

    let UIMovement = mModel.calculateCurrentItem(initialTouch);

    //interact with View 

    mView.activatemoveLateral(UIMovement)
    
  })
})








