$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"honan_1", 
                      name:"保南1", 
                      polCenter:{lat: 35.679427175954075, lng: 137.92011326551233},
                      polArray:[{lat: 35.67979175138938, lng: 137.91995143890176},
                              {lat: 35.679809181224776, lng: 137.9202840328196},
                              {lat: 35.67912069983226, lng: 137.9203376769999},
                              {lat: 35.679103269846486, lng: 137.92006945609842},
                              {lat: 35.679369076715766, lng: 137.9200319051722},
                              {lat: 35.679369076715766, lng: 137.92000508308206}
                      ],
                      url:"cropfields/rf_honan_1.html",
                      zoom: 18,
                      block: "保育園周辺",
                      number: 3,
                      address: "2704-3",
                      area: 21.0});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
