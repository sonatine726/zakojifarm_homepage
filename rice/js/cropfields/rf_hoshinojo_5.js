$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"hoshinojo_5",
                      name:"星5",
                      polCenter:{lat: 35.68035211752613, lng: 137.91741406996152},
                      polArray:[{lat: 35.68077914558905, lng: 137.9171941288223},
                                {lat: 35.680796575208745, lng: 137.9176447399368},
                                {lat: 35.67993380446343, lng: 137.9176447399368},
                                {lat: 35.6798989448433, lng: 137.91717267115018}
                      ],
                      url:"cropfields/rf_hoshinojo_5.html",
                      zoom: 18,
                      block: "星野城",
                      number: 5,
                      address: "2687-4",
                      area: 39.6});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
