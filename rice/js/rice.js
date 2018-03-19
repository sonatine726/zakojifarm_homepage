$(function() {
  if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
    $('.u-tel-number').each(function() {
      var str = $(this).html();
      $(this).html($('<a>').attr('href', 'tel:' + $(this).text().replace(/-/g, '')).append(str + '</a>'));
    });
  }
});

$(window).on('load',function(){
  function viewGMap() {
    var latlng = new google.maps.LatLng(35.68177567810094, 137.91623926175816);
    var options = {
        zoom: 15,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var mapObj = new google.maps.Map(document.getElementById("p-ricefield-map_canvas"),options);
    addPolygon(mapObj);
  }

  function addPolygon(mapObj){
    function addRiceFieldPolygon(mapObj, polCenter, polArray, fieldName){
      var leftTopPos = polArray[0];
      var polygonObj = new google.maps.Polygon({
          paths: polArray,
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.35,
          map: mapObj
      });
      
      var markerOptions = {
        color: "#eaedf7",
        fontFamily: "Yu Gothic",
        fontSize: "15px" ,
        text: fieldName
      };
      var marker = new google.maps.Marker( {
        map: mapObj,
        position: new google.maps.LatLng( polCenter.lat, polCenter.lng),
        label: markerOptions
      });
    }

    //星野城1
    var polCenter = {lat:35.68129745589816, lng:137.91645719124062};
    var polArray = [
        {lat:35.68177567810094,lng:137.91623926175816},
        {lat:35.68177567810094,lng:137.91663622869237},
        {lat:35.68081923369538,lng:137.91668719066365},
        {lat:35.68081923369538,lng:137.9162660838483}
    ];
    addRiceFieldPolygon(mapObj, polCenter, polArray, "星野城1");

    //星野城2
    var polArray = [
        {lat:35.68177567810094,lng:137.91623926175816},
        {lat:35.68177567810094,lng:137.91663622869237},
        {lat:35.68081923369538,lng:137.91668719066365},
        {lat:35.68081923369538,lng:137.9162660838483}
    ];
    addRiceFieldPolygon(mapObj, polArray, "星野城2");


  }
  viewGMap();
});
$(window).on('unload',function(){
  GUnload();
});
