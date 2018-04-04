(function($){
  "use strict";
  $(window).on('load', function() {
    //Slide show by slick.js.
    $('.p-top-img-sld').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.p-top-img-sld-thumb',
      autoplay:true,
      autoplaySpeed: 3000,
      speed: 1500
    });
    $('.p-top-img-sld-thumb').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.p-top-img-sld',
      focusOnSelect: true,
    });

    /* Invalidate below codes because plugin occurs error frequently.*/
    //Facebook plugin size update.
    // {
    //   let windowWidth = $(window).width();
    //   let htmlStr = $('.p-top-plugin-fb').html();
    //   let timer = null;
    //   console.error("FB 1 %d", windowWidth);
    //   $(window).on('resize',function() {
    //     let resizedWidth = $(window).width();
    //     console.error("FB 2 %d", resizedWidth);
    //     if(windowWidth != resizedWidth && resizedWidth < 500) {
    //       clearTimeout(timer);
    //       timer = setTimeout(function() {
    //         $('.p-top-plugin-fb').html(htmlStr);
    //         window.FB.XFBML.parse();
    //         let windowWidth = $(window).width();
    //         console.error("FB 3 %d", windowWidth);
    //       }, 500);
    //     }
    //   });
    // }
  });
})(jQuery);
