$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"hayashi_2", 
                      name:"林2", 
                      polCenter:{lat: 35.68090144310151, lng: 137.92040562630518},
                      polArray:[{lat: 35.681151267182464, lng: 137.91973149777277},
                              {lat: 35.68119484102136, lng: 137.92082583905085},
                              {lat: 35.68068066820613, lng: 137.9208687543951},
                              {lat: 35.68064145149947, lng: 137.9206541776739},
                              {lat: 35.6808680366496, lng: 137.92061126232966},
                              {lat: 35.68087239405004, lng: 137.91974222660883}
                      ],
                      url:"cropfields/rf_hayashi_2.html",
                      zoom: 18,
                      block: "保育園周辺",
                      number: 2,
                      address: "2848-1",
                      area: 40.7});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
