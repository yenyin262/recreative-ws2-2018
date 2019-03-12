$(function(){

  if(window.location.search === "?page_id=158"){

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
  }

  // element to detect scroll direction of
  const el = $('#blogCarousel');
  let lastX = el.scrollLeft();
  
  el.on('scroll', function() {
    var 
    currX = el.scrollLeft(),
        x = (currX > lastX) ? 'right' : ((currX === lastX) ? 'none' : 'left');

  // do something here…
    console.log(x);

  // update last scroll position to current position
  lastX = currX;
  });
})

