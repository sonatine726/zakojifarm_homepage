if (typeof riceFields === "undefined") {
  var riceFields = [];
}

$(window).on('load',function(){
  function viewGMap(mapTargetId, centerPos, zoom, riceFieldsList) {
    let latlng = new google.maps.LatLng(centerPos.lat, centerPos.lng);
    let options = {
        zoom: zoom,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    let mapObj = new google.maps.Map(document.getElementById(mapTargetId),options);
    addPolygon(mapObj, riceFieldsList);
  }

  function addPolygon(mapObj, riceFieldsList){
    function addRiceFieldPolygon(mapObj, polCenter, polArray, fieldName, field_url){
      let polygonObj = new google.maps.Polygon({
          paths: polArray,
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.35,
          map: mapObj
      });
      polygonObj.addListener( "click", (function(url){
        return function(){ location.href = url; };
      })(field_url));
      
      const markerOptions = {
        color: "#eaedf7",
        fontFamily: "Yu Gothic",
        fontSize: "15px" ,
        text: fieldName
      };
      new google.maps.Marker({
        map: mapObj,
        position: new google.maps.LatLng(polCenter.lat, polCenter.lng),
        label: markerOptions
      });
    }

    function addRiceFieldPolygonSet(mapObj, riceFieldsProp){
      for(let rfp of riceFieldsProp){
        addRiceFieldPolygon(mapObj, rfp.polCenter, rfp.polArray, rfp.fieldName, rfp.url);
      }
    }

    addRiceFieldPolygonSet(mapObj, riceFieldsList);
  }

  const mapTargetId = "p-ricefield-map_canvas";
  let centerPos;
  let zoom;
  if(riceFields.length == 1){
    centerPos = riceFields[0].polCenter;
    zoom = riceFields[0].zoom;
  }
  else{
    centerPos = {lat:35.68177567810094, lng:137.91623926175816};
    zoom = 15;
  }
  viewGMap(mapTargetId, centerPos, zoom, riceFields);
});
$(window).on('unload',function(){
  GUnload();
});
