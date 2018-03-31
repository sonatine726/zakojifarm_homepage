$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"kaga_3", 
                      name:"加賀3", 
                      polCenter:{lat: 35.68251293761038, lng: 137.92852646109168},
                      polArray:[{lat: 35.6828680584339, lng: 137.92836284634177},
                                {lat: 35.6828680584339, lng: 137.9286739825875},
                                {lat: 35.68216217411697, lng: 137.9286739825875},
                                {lat: 35.68215345945676, lng: 137.92839503284995}
                      ],
                      url:"cropfields/rf_kaga_3.html",
                      zoom: 18,
                      block: "加賀域",
                      number: 3,
                      address: "1997",
                      area: 21.9});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
