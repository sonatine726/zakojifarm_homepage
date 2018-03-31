$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"kara", 
                      name:"唐", 
                      polCenter:{lat: 35.68091858229718, lng: 137.92141994838857},
                      polArray:[{lat: 35.68101444506729, lng: 137.92132472996855},
                                {lat: 35.681040589418295, lng: 137.92150175576353},
                                {lat: 35.680831434370255, lng: 137.92151784901762},
                                {lat: 35.68078786033289, lng: 137.9213354588046}
                      ],
                      url:"cropfields/rf_kara.html",
                      zoom: 18,
                      block: "保育園周辺",
                      number: 5,
                      address: "2855-3",
                      area: 4.2});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
