(function() {
  "use strict";
  var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
  
  ZAKOJIFARM_GLOBAL.viewGMap = function(mapTargetId, centerPos, zoom, type=google.maps.MapTypeId.HYBRID) {
    let latlng = new google.maps.LatLng(centerPos.lat, centerPos.lng);
    let options = {
        zoom: zoom,
        center: latlng,
        mapTypeId: type
    };
    return new google.maps.Map(document.getElementById(mapTargetId),options);
  };

  ZAKOJIFARM_GLOBAL.addRiceFieldPolygon = function(mapObj, polCenter, polArray, fieldName, field_url){
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
    let centerMarker = new google.maps.Marker({
      map: mapObj,
      position: new google.maps.LatLng(polCenter.lat, polCenter.lng),
      label: markerOptions
    });

    return {polygon: polygonObj, centerMarker: centerMarker};
  };

  ZAKOJIFARM_GLOBAL.panMap =  function(mapObj, polCenter)
  {
    mapObj.panTo(new google.maps.LatLng(polCenter.lat,polCenter.lng));
  };

  ZAKOJIFARM_GLOBAL.addPanFunctionToDomElem =  function(mapObj, domElemToPan, polCenter)
  {
    domElemToPan.on('mouseover', function(){
      ZAKOJIFARM_GLOBAL.panMap(mapObj, polCenter);
    });
  };


  ZAKOJIFARM_GLOBAL.viewCropFieldInfoToCropPage =  function(mapObj, fieldObj){
    let fieldListLi;
    if($('ul.p-cropfield-list').length){
      fieldListLi = $("<li>").attr("class", "p-rcf-list-item").append(
                              $("<a>").attr("href", fieldObj.url).text(fieldObj.name));
      $('ul.p-cropfield-list').append(fieldListLi);
    }

    if($("td.p-cf-prop-block")[0]){
      $("td.p-cf-prop-block").text(fieldObj.block);
    }
    if($("td.p-cf-prop-number")[0]){
      $("td.p-cf-prop-number").text(fieldObj.number);
    };
    if($("td.p-cf-prop-fieldName")[0]){
      $("td.p-cf-prop-fieldName").text(fieldObj.name);
    }
    if($("td.p-cf-prop-address")[0]){
      $("td.p-cf-prop-address").text(fieldObj.address);
    }
    if($("td.p-cf-prop-area")[0]){
      $("td.p-cf-prop-area").text(fieldObj.area + "a");
    }

    if($('ol.p-cropfield-individual_page')[0]){
      const appendLi = $("<li>").append(
                              $("<a>").attr("href", fieldObj.url).text("圃場 「" + fieldObj.name + "」"));
      $('ol.p-cropfield-individual_page').append(appendLi);
    }

    if(mapObj){
      fieldObj.addRiceFieldPolygon(mapObj);
      fieldObj.panMap(mapObj);
      if(fieldListLi){
        fieldObj.addPanDomElem(mapObj, fieldListLi, fieldObj.polCenter);
      }
    }
  };


  ZAKOJIFARM_GLOBAL.CropField = function(args){
    if(!(this instanceof ZAKOJIFARM_GLOBAL.CropField)) {
        return new ZAKOJIFARM_GLOBAL.CropField(args);
    }

    if (args.id === undefined) { throw {name: 'ArgsMissing', message: 'Missing parameter id'}; }
    if (args.name === undefined) { throw {name: 'ArgsMissing', message: 'Missing parameter name'}; }
    if (args.polCenter === undefined) { throw {name: 'ArgsMissing', message: 'Missing parameter polCenter'}; }
    if (args.polArray === undefined) { throw {name: 'ArgsMissing', message: 'Missing parameter polArray'}; }
    if (args.url === undefined) { throw {name: 'ArgsMissing', message: 'Missing parameter url'}; }
    if (args.zoom === undefined) { throw {name: 'ArgsMissing', message: 'Missing parameter zoom'}; }
    if (args.number === undefined) { throw {name: 'ArgsMissing', message: 'Missing parameter number'}; }
    if (args.address === undefined) { throw {name: 'ArgsMissing', message: 'Missing parameter address'}; }
    if (args.area === undefined) { throw {name: 'ArgsMissing', message: 'Missing parameter area'}; }
    if (args.id === undefined) { throw {name: 'ArgsMissing', message: 'Missing parameter id'}; }

    this.id = args.id;
    this.name = args.name;
    this.polCenter = args.polCenter;
    this.polArray = args.polArray;
    this.url = args.url;
    this.zoom = args.zoom;
    this.block = args.block;
    this.number = args.number;
    this.address = args.address;
    this.area = args.area;
    this.panDomList = [];
  };

  ZAKOJIFARM_GLOBAL.CropField.prototype.addRiceFieldPolygon = function(mapObj){
    ZAKOJIFARM_GLOBAL.addRiceFieldPolygon(mapObj, this.polCenter, this.polArray, this.name, this.url);
  };

  ZAKOJIFARM_GLOBAL.CropField.prototype.addPanDomElem = function(mapObj,domElemToPan){
    this.panDomList.push(domElemToPan);
    ZAKOJIFARM_GLOBAL.addPanFunctionToDomElem(mapObj,domElemToPan, this.polCenter);
  };

  ZAKOJIFARM_GLOBAL.CropField.prototype.panMap = function(mapObj){
    ZAKOJIFARM_GLOBAL.panMap(mapObj,this.polCenter);
  };
}());

