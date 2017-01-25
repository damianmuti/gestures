$(document).ready(function(){
  gest.start();

  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    variableWidth: true,
    autoplay: false,
    arrows: false
  });

  gest.options.subscribeWithCallback(function(gesture) {
    //handle gesture .direction .up .down .left .right .error
    console.log(gesture.direction);

    if(gesture.left){
      $('.slider').slick('slickNext');
    }

    if(gesture.right){
      $('.slider').slick('slickPrev');
    }
  });

});
