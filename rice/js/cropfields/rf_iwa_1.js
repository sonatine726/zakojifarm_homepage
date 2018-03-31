$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"iwa_1", 
                      name:"岩1", 
                      polCenter:{lat: 35.6840108223075, lng: 137.907699823445},
                      polArray:[{lat: 35.684195278225395, lng: 137.90771412855975},
                                {lat: 35.683929487433424, lng: 137.90763902670733},
                                {lat: 35.68390770126368, lng: 137.90774631506793}
                      ],
                      url:"cropfields/rf_iwa_1.html",
                      zoom: 18,
                      block: "岩間周辺",
                      number: 1,
                      address: "3283-1",
                      area: 2.0});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
