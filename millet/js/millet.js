(function($){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_MILLLET = ZAKOJIFARMAPP.namespace("millet");

    const mapTargetId = "p-cropfield-map_canvas";
    let centerPos = {lat:35.68177567810094, lng:137.91623926175816};
    let zoom = 17;

    ZAKOJIFARM_MILLLET.milletMap = ZAKOJIFARM_GLOBAL.viewGMap(mapTargetId, centerPos, zoom);

    ZAKOJIFARM_MILLLET.milletFields = {};

    ZAKOJIFARM_MILLLET.viewRiceMilletFieldInfoToMilletPage = function(fieldObj){
      ZAKOJIFARM_GLOBAL.viewCropFieldInfoToCropPage(ZAKOJIFARM_MILLLET.milletMap, fieldObj);
      ZAKOJIFARM_MILLLET.milletFields[fieldObj.id] = fieldObj;
    };

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
