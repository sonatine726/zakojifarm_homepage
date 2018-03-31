$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"iwa_3", 
                      name:"岩3", 
                      polCenter:{lat: 35.68400791749275, lng: 137.9080219120442},
                      polArray:[{lat: 35.684145170193005, lng: 137.90793138748995},
                                {lat: 35.6841255626935, lng: 137.90813255316607},
                                {lat: 35.68386848614315, lng: 137.90809768444888},
                                {lat: 35.68389245094132, lng: 137.90792602307192}
                      ],
                      url:"cropfields/rf_iwa_3.html",
                      zoom: 18,
                      block: "岩間周辺",
                      number: 3,
                      address: "3283-5",
                      area: 5.9});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
