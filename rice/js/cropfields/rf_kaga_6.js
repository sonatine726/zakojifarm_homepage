$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"kaga_6", 
                      name:"加賀6", 
                      polCenter:{lat: 35.68250531225196, lng: 137.93093776699607},
                      polArray:[{lat: 35.682872415725086, lng: 137.93077683445517},
                                {lat: 35.68287677301607, lng: 137.93107724186484},
                                {lat: 35.68213167280204, lng: 137.93109869953696},
                                {lat: 35.68214038746464, lng: 137.9307982921273}
                      ],
                      url:"cropfields/rf_kaga_6.html",
                      zoom: 18,
                      block: "加賀域",
                      number: 6,
                      address: "1958-1",
                      area: 23.4});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
