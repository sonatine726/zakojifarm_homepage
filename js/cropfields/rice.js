if (typeof riceFields === "undefined") {
  var riceFields = [];
}

$(window).on('load',function(){
  const mapTargetId = "p-ricefield-map_canvas";
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
