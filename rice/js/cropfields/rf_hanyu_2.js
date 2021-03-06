$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"hanyu_2", 
                      name:"羽生2", 
                      polCenter:{lat: 35.681494409856306, lng: 137.90612867487653},
                      polArray:[{lat: 35.68181794424796, lng: 137.9060897828458},
                              {lat: 35.681787442801415, lng: 137.90641701234563},
                              {lat: 35.68117305403839, lng: 137.90614879144414},
                              {lat: 35.68119919833746, lng: 137.90585911287053}
                      ],
                      url:"cropfields/rf_hanyu_2.html",
                      zoom: 18,
                      block: "岩間周辺",
                      number: 5,
                      address: "3224-1",
                      area: 20.9});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
