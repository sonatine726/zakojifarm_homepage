$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"kou_2", 
                      name:"好2", 
                      polCenter:{lat: 35.68557388966852, lng: 137.92927372534177},
                      polArray:[{lat: 35.685878890059556, lng: 137.9290977724304},
                                {lat: 35.68590503281662, lng: 137.9292587049713},
                                {lat: 35.685878890059556, lng: 137.9294410951843},
                                {lat: 35.68510331770344, lng: 137.92945182402036},
                                {lat: 35.68510331770344, lng: 137.92911923010251}
                      ],
                      url:"cropfields/rf_kou_2.html",
                      zoom: 18,
                      block: "座光寺域",
                      number: 2,
                      address: "2095-6",
                      area: 28});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
