$(function() {
  $('.p-top-img-sld').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.p-top-img-sld-thumb'
  });
  $('.p-top-img-sld-thumb').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.p-top-img-sld',
    focusOnSelect: true,
  });
  if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
    $('.u-tel-number').each(function() {
      var str = $(this).html();
      $(this).html($('<a>').attr('href', 'tel:' + $(this).text().replace(/-/g, '')).append(str + '</a>'));
    });
  }
});

$(window).on('load',function(){
	// fade-in
    $(window).scroll(function (){
        $('.u-fade-in').each(function(){
            var POS = $(this).offset().top;  //fade-inがついている要素の位置
            var scroll = $(window).scrollTop();  //スクロール一
            var windowHeight = $(window).height();  //ウィンドウの高さ

            if (scroll > POS - windowHeight + windowHeight/5){
                $(this).css("opacity","1" );
            } else {
                $(this).css("opacity","0" );
            }
        });
    });
});