$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    const mapTargetId = "p-cropfield-map_canvas";
    let centerPos = {lat:35.68177567810094, lng:137.91623926175816};
    let zoom = 17;

    ZAKOJIFARM_RICE.riceMap = ZAKOJIFARM_GLOBAL.viewGMap(mapTargetId, centerPos, zoom);

    ZAKOJIFARM_RICE.riceFields = {};
    
    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage = function(fieldObj){
      ZAKOJIFARM_GLOBAL.viewCropFieldInfoToCropPage(ZAKOJIFARM_RICE.riceMap, fieldObj);
      ZAKOJIFARM_RICE.riceFields[fieldObj.id] = fieldObj;
    };
  }());
});
$(window).on('unload',function(){
  GUnload();
});

// if (typeof riceFields === "undefined") {
//   var riceFields = [];
// }

// $(window).on('load',function(){
//   const mapTargetId = "p-cropfield-map_canvas";
//   let centerPos;
//   let zoom;
//   if(riceFields.length == 1){
//     centerPos = riceFields[0].polCenter;
//     zoom = riceFields[0].zoom;
//   }
//   else{
//     centerPos = {lat:35.68177567810094, lng:137.91623926175816};
//     zoom = 17;
//   }
//   viewGMap(mapTargetId, centerPos, zoom, riceFields);
// });
// $(window).on('unload',function(){
//   GUnload();
// });
