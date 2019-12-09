// header
$(document).ready(function(){
    $('.slider').bxSlider();
  });
// data
  $(document).ready(function(){
    $('.data-slider').bxSlider({
      auto: 'true',
      nextSelector: 'null'
    });
  });
  // logo
  $(document).ready(function(){
    $('.logo-slider').bxSlider({
      minSlides: '6',
      maxSlides: '6',
      moveSlides: '1',
      slideWidth: '120',
      auto: 'true',
      nextSelector: 'null',
      pager: false
     
    });
  });
