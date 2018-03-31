$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"hoshinojo_1", 
                      name:"星1", 
                      polCenter:{lat:35.68129745589816, lng:137.91645719124062},
                      polArray:[
                          {lat:35.68177567810094,lng:137.91623926175816},
                          {lat:35.68177567810094,lng:137.91663622869237},
                          {lat:35.68081923369538,lng:137.91668719066365},
                          {lat:35.68081923369538,lng:137.9162660838483}
                      ],
                      url:"cropfields/rf_hoshinojo_1.html",
                      zoom: 18,
                      block: "星野城",
                      number: 1,
                      address: "2811－1",
                      area: 41.1});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
