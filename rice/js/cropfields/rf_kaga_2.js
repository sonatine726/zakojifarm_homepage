$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"kaga_2", 
                      name:"加賀2", 
                      polCenter:{lat: 35.68261097755741, lng: 137.92818984467885},
                      polArray:[{lat: 35.68286370127543, lng: 137.92804098207853},
                                {lat: 35.682868058566875, lng: 137.92833066065214},
                                {lat: 35.682353896534025, lng: 137.9283413894882},
                                {lat: 35.68235825385331, lng: 137.92804634649656}
                      ],
                      url:"cropfields/rf_kaga_2.html",
                      zoom: 18,
                      block: "加賀域",
                      number: 2,
                      address: "1995-1,2",
                      area: 15.8});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
