$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_MILLLET = ZAKOJIFARMAPP.namespace("millet");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"hayashi_1", 
                      name:"林1", 
                      polCenter:{lat: 35.68121989523943, lng: 137.9195276498467},
                      polArray:[{lat: 35.68156086032865, lng: 137.9193452596337},
                                {lat: 35.68156086032865, lng: 137.9196885823876},
                                {lat: 35.68087675145024, lng: 137.91971004005973},
                                {lat: 35.68088110885018, lng: 137.91936671730582}
                      ],
                      url:"cropfields/cf_hayashi_1.html",
                      zoom: 18,
                      block: "保育園周辺",
                      number: 1,
                      address: "2831-2,2",
                      area: 23.4});

    ZAKOJIFARM_MILLLET.viewRiceMilletFieldInfoToMilletPage(fieldObj);
  }());
});

