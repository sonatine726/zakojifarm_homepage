$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"hanyu_3",
                      name:"羽生3",
                      polCenter:{lat: 35.68149985668566, lng: 137.9064478577493},
                      polArray:[{lat: 35.68177872810026, lng: 137.9064491988538},
                              {lat: 35.68177001339817, lng: 137.9066476823209},
                              {lat: 35.68125584428935, lng: 137.90647602094396},
                              {lat: 35.68119484095487, lng: 137.90621852887853}
                      ],
                      url:"cropfields/rf_hanyu_3.html",
                      zoom: 18,
                      block: "岩間周辺",
                      number: 6,
                      address: "3224-2",
                      area: 12.4});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
