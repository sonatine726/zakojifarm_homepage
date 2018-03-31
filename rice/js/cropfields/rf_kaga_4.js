$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"kaga_4", 
                      name:"加賀4", 
                      polCenter:{lat: 35.68252187003872, lng: 137.9288563728312},
                      polArray:[{lat: 35.68287154421369, lng: 137.92870616912637},
                                {lat: 35.68288461608601, lng: 137.92900657653604},
                                {lat: 35.6821656599276, lng: 137.92899584769998},
                                {lat: 35.6821656599276, lng: 137.92871689796243}
                      ],
                      url:"cropfields/rf_kaga_4.html",
                      zoom: 18,
                      block: "加賀域",
                      number: 4,
                      address: "1998, 1999",
                      area: 21.5});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
