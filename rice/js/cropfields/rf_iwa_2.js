$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"iwa_2", 
                      name:"岩2", 
                      polCenter:{lat: 35.68403623945584, lng: 137.9078321457564},
                      polArray:[{lat: 35.684197456834774, lng: 137.90776777274004},
                                {lat: 35.68415388463569, lng: 137.90789651877276},
                                {lat: 35.68389245094132, lng: 137.9078857899367},
                                {lat: 35.68390116541159, lng: 137.9077785015761}
                      ],
                      url:"cropfields/rf_iwa_2.html",
                      zoom: 18,
                      block: "岩間周辺",
                      number: 2,
                      address: "3283-2",
                      area: 3.2});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
