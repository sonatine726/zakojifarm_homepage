$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"saitoh", 
                      name:"斎藤", 
                      polCenter:{lat: 35.68361315057669, lng: 137.92259287814522},
                      polArray:[{lat: 35.68415344895347, lng: 137.92238152007485},
                                {lat: 35.6832122836394, lng: 137.92250490168954},
                                {lat: 35.68320356909389, lng: 137.92265510539437},
                                {lat: 35.68339964613796, lng: 137.92274093608285},
                                {lat: 35.68409680505872, lng: 137.92268192748452}
                      ],
                      url:"cropfields/rf_saitoh.html",
                      zoom: 18,
                      block: "-",
                      number: 1,
                      address: "2239",
                      area: 24.7});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
