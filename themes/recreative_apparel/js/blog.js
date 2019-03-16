$(function(){

  if($('#inProgress')){

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

    // element to detect scroll direction of
  // const left = $('#left-arrow');
  // const right = $('#right-arrow'); 
  // const moveLeft = ($('.post1')[0].clientWidth)+10;
  
  // const handleRight = () => {
  //   console.log('right');
  //   console.log(moveLeft);
  //   $('#blogCarousel').css('margin-left', -moveLeft);
  // }

  // const handleLeft = () => {
  //   console.log('left');
  // }

  // right.click(handleRight);
  // left.click(handleLeft);

  const track = $('#blogCarousel');
  const slides = Array.from(track[0].children);
  const next = $('#left-arrow');
  const prev = $('#right-arrow'); 
  const slideWidth = slides[0].getBoundingClientRect().width;
  const newArray = [];
  let currentSlideIndex = 0;

  $('.post1').each(function() {
    newArray.push($(this)[0].offsetLeft);
  });
  console.log(newArray);
  // slides[0]
  const setSlidePosition = (slide,index) => {
    slide.style.left = `${slideWidth * index}px`;
  }
  slides.forEach(setSlidePosition);

  // add class active to first post when page load. 
  if(window.innerWidth < 768){
    $('#blogCarousel')[0].children[0].addClass('active-slide');
  }
  // when I click right, move slides to right

  next.click(() => {
    currentSlideIndex ++;
    let moveRight = newArray[currentSlideIndex];
    console.log(moveRight);
  });
  // when I click left, move slides to left
  prev.click(() => {
    currentSlideIndex --;
    console.log(track);
  });
  

  }

  
})

