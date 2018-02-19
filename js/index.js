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
});
