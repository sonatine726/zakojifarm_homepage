$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"honan_2", 
                      name:"保南2", 
                      polCenter:{lat: 35.67947692358687, lng: 137.92051067947114},
                      polArray:[{lat: 35.679809181208164, lng: 137.92031085489953},
                              {lat: 35.679826611039736, lng: 137.9206488132354},
                              {lat: 35.67914248729249, lng: 137.92071318625176},
                              {lat: 35.679129414807086, lng: 137.92036986349785}
                      ],
                      url:"cropfields/rf_honan_2.html",
                      zoom: 18,
                      block: "保育園周辺",
                      number: 4,
                      address: "2704-2",
                      area: 24.2});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
