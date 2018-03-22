if (typeof riceFields === "undefined") {
  var riceFields = [];
}

$(window).on('load',function(){
  const mapTargetId = "p-cropfield-map_canvas";
  let centerPos;
  let zoom;
  if(riceFields.length == 1){
    centerPos = riceFields[0].polCenter;
    zoom = riceFields[0].zoom;
  }
  else{
    centerPos = {lat:35.68177567810094, lng:137.91623926175816};
    zoom = 17;
  }
  viewGMap(mapTargetId, centerPos, zoom, riceFields);
});
$(window).on('unload',function(){
  GUnload();
});

$(function() {
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
});
