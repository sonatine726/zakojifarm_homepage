$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"kaga_5", 
                      name:"加賀5", 
                      polCenter:{lat: 35.68253668483615, lng: 137.92951083184107},
                      polArray:[{lat: 35.682895073555734, lng: 137.92936062813624},
                                {lat: 35.682903788134965, lng: 137.92965030670985},
                                {lat: 35.68217611749157, lng: 137.92967176438196},
                                {lat: 35.68217176016235, lng: 137.92936062813624}
                      ],
                      url:"cropfields/rf_kaga_5.html",
                      zoom: 18,
                      block: "加賀域",
                      number: 5,
                      address: "2001",
                      area: 22.6});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
