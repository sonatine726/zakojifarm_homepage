(function($){
  (function() {
    $('.p-millet-img-sld').slick({
      infinite: true,
      dots:true,
      slidesToShow: 1,
      centerMode: true, //要素を中央寄せ
      centerPadding:'30px', //両サイドの見えている部分のサイズ
      autoplay:true, //自動再生
      autoplaySpeed: 3000,
      speed: 1500,
      responsive: [{
        breakpoint: 480,
          settings: {
            centerMode: false,
          }
      }]
    });
  }());
})(jQuery);

$(window).on('unload',function(){
  GUnload();
});
