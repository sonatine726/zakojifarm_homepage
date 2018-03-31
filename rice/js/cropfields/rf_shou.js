$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"shou", 
                      name:"省", 
                      polCenter:{lat: 35.68484958453539, lng: 137.92823258032513},
                      polArray:[{lat: 35.68497085942562, lng: 137.92815256108952},
                                {lat: 35.68496868083734, lng: 137.92835372676564},
                                {lat: 35.68475082170986, lng: 137.9283644556017},
                                {lat: 35.684744285926854, lng: 137.92818206538868},
                                {lat: 35.684829251064286, lng: 137.92819279422474},
                                {lat: 35.68483360824838, lng: 137.9281498788805}
                      ],
                      url:"cropfields/rf_shou.html",
                      zoom: 18,
                      block: "座光寺域",
                      number: 3,
                      address: "2097",
                      area: 5.4});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
