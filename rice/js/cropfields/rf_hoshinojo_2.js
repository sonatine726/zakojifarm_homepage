$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"hoshinojo_2", 
                      name:"星2", 
                      polCenter:{lat: 35.68152779833747, lng: 137.91689714047607},
                      polArray:[{lat: 35.681794414588246, lng: 137.9166989922851},
                                  {lat: 35.681790057238175, lng: 137.91707047823365},
                                  {lat: 35.681260637399866, lng: 137.91710266474183},
                                  {lat: 35.68126608412358, lng: 137.9167164266437}
                      ],
                      url:"cropfields/rf_hoshinojo_2.html",
                      zoom: 18,
                      block: "星野城",
                      number: 2,
                      address: "2810-2,3",
                      area: 22.4});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
