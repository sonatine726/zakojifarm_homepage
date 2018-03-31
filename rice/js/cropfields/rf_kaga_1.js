$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"kaga_1", 
                      name:"加賀1", 
                      polCenter:{lat: 35.68266762267329, lng: 137.92787066180608},
                      polArray:[{lat: 35.68286370127543, lng: 137.92768693048856},
                                {lat: 35.68286370127543, lng: 137.92800343115232},
                                {lat: 35.68247154407115, lng: 137.92800343115232},
                                {lat: 35.68247154407115, lng: 137.92778885443113}
                      ],
                      url:"cropfields/rf_kaga_1.html",
                      zoom: 18,
                      block: "加賀域",
                      number: 1,
                      address: "1992-2, 1995-3",
                      area: 11.7});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
