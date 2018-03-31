$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"tokeijoue", 
                      name:"トケイジョ上", 
                      polCenter:{lat: 35.68703635217749, lng: 137.92652425910092},
                      polArray:[{lat: 35.68711695784856, lng: 137.9263455569253},
                                {lat: 35.687101708139664, lng: 137.9267612993226},
                                {lat: 35.686953567958625, lng: 137.9266861974702},
                                {lat: 35.68697317476312, lng: 137.92630398268557}
                      ],
                      url:"cropfields/rf_tokeijoue.html",
                      zoom: 18,
                      block: "-",
                      number: 1,
                      address: "2158-7",
                      area: 6.3});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
