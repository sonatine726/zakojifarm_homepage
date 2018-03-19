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
    let latlng = new google.maps.LatLng(35.68177567810094, 137.91623926175816);
    let options = {
        zoom: 15,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    let mapObj = new google.maps.Map(document.getElementById("p-ricefield-map_canvas"),options);
    addPolygon(mapObj);
  }

  function addPolygon(mapObj){
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


    let riceFields = [];
    //星野城1
    riceFields.push({fieldId:"hoshinojo_1", 
                    fieldName:"星野城1", 
                    polCenter:{lat:35.68129745589816, lng:137.91645719124062},
                    polArray:[
                      {lat:35.68177567810094,lng:137.91623926175816},
                      {lat:35.68177567810094,lng:137.91663622869237},
                      {lat:35.68081923369538,lng:137.91668719066365},
                      {lat:35.68081923369538,lng:137.9162660838483}
                    ],
                    url:"ricefields/rf_hoshinojo_1.html"});
    addRiceFieldPolygonSet(mapObj, riceFields);


  }
  viewGMap();
});
$(window).on('unload',function(){
  GUnload();
});
