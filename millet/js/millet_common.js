$(function(){
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
  }());
});
