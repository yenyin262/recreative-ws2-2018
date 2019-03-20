$(function(){
  
  if($('body').hasClass('blog')){
  
    const postLength = $('#blogCarousel')[0].scrollWidth;
    const wrapperWidth = $('#blogCarousel')[0].clientWidth;
    let scrollLeftAmount = $('#blogCarousel')[0].scrollLeft;
    let updateProgress = ((wrapperWidth + scrollLeftAmount)/postLength);
    $('#inProgress').width(`${updateProgress*100}%`);

    $('#blogCarousel').on('scroll', function(){
      scrollLeftAmount = $('#blogCarousel')[0].scrollLeft;
      updateProgress = ((wrapperWidth + scrollLeftAmount)/postLength) ;

      $('#inProgress').width(`${updateProgress*100}%`);

    })

  const track = $('#blogCarousel');
  const slides = Array.from(track[0].children);
  const next = $('#right-arrow');
  const prev = $('#left-arrow'); 
  const slideWidth = slides[0].getBoundingClientRect().width;
  const newArray = [];
  let currentSlideIndex = 0;

  $('.post1').each(function() {
    newArray.push($(this)[0].offsetLeft);
  });

  // need to fix this for when window size changes
  $(window).resize(function(){
    newArray.push($('.post1')[0].offsetLeft);
    console.log('resizing');
    track.css('margin-left','0px');
  });
  
  console.log(newArray);
  // slides[0]
  const setSlidePosition = (slide,index) => {
    slide.style.left = `${slideWidth * index}px`;
  }
  slides.forEach(setSlidePosition);

  // when I click right, move slides to right
  const handleSwipe = (currentSlideIndex) => {
    let moveDirection = newArray[currentSlideIndex];
    console.log(moveDirection);
    console.log((newArray[currentSlideIndex]/newArray[newArray.length-1])*100);
    track.css('margin-left',`-${moveDirection-newArray[0]}px`);
    $('#inProgress').width(`${(newArray[currentSlideIndex]/newArray[newArray.length-1])*100}%`); 
    // need percentage
  }
  
  next.on('click',function(){
    prev.removeClass('deactivateLink');
    if(window.outerWidth >= 768 || currentSlideIndex === (newArray.length-1)){
      next.addClass('deactivateLink');
    } else {
      currentSlideIndex++;
      handleSwipe(currentSlideIndex);
      console.log(currentSlideIndex);
    }
  });
  
  // when I click left, move slides to left
  prev.click(() => {
    if(currentSlideIndex === 0) {
      prev.addClass('deactivateLink');
    }
    next.removeClass('deactivateLink');
    currentSlideIndex--;
    handleSwipe(currentSlideIndex);
  });

  }
})

// track.on('scroll',function(){
  //   checkPosition();
  //   if(window.outerWidth >= 768 && currentSlideIndex === (newArray.length-1)){
  //     console.log('stopHere');
  //   } else {
  //     currentSlideIndex++;
  //     handleSwipe(currentSlideIndex);
  //   }
  // });


