$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"hanyu_1",
                      name:"羽生1",
                      polCenter:{lat: 35.68155105561939, lng: 137.90569952143414},
                      polArray:[{lat: 35.68187894710605, lng: 137.90561234964116},
                                {lat: 35.681826658944836, lng: 137.90595567239507},
                                {lat: 35.6812166278654, lng: 137.90573036683782},
                                {lat: 35.681281988561274, lng: 137.90549969686253}
                      ],
                      url:"cropfields/rf_hanyu_1.html",
                      zoom: 18,
                      block: "岩間周辺",
                      number: 4,
                      address: "3223-1",
                      area: 16.6});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
