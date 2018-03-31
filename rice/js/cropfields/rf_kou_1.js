$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"kou_1", 
                      name:"好1", 
                      polCenter:{lat: 35.68549763954744, lng: 137.9288845368137},
                      polArray:[{lat: 35.68592246131656, lng: 137.9287008054962},
                                {lat: 35.68587017580531, lng: 137.9290602215042},
                                {lat: 35.68510331770344, lng: 137.9290602215042},
                                {lat: 35.68509460336446, lng: 137.92871689875028}
                      ],
                      url:"cropfields/rf_kou_1.html",
                      zoom: 18,
                      block: "座光寺域",
                      number: 1,
                      address: "2095-7",
                      area: 29.5});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
