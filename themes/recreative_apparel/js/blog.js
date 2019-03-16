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
  const left = $('#left-arrow');
  const right = $('#right-arrow'); 
  const moveLeft = ($('.post1')[0].clientWidth)+10;
  
  const handleRight = () => {
    console.log('right');
    console.log(moveLeft);
    $('#blogCarousel').css('margin-left', -moveLeft);
  }

  const handleLeft = () => {
    console.log('left');
  }

  right.click(handleRight);
  left.click(handleLeft);
  }

  
})

