$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"hoshinojo_3", 
                      name:"星3", 
                      polCenter:{lat: 35.68152469371044, lng: 137.91770539542475},
                      polArray:[{lat: 35.68180683299479, lng: 137.91715899113115},
                                {lat: 35.68181119034394, lng: 137.9174754917949},
                                {lat: 35.68165323628485, lng: 137.91789793971475},
                                {lat: 35.68158787589309, lng: 137.9178912341922},
                                {lat: 35.6815192474241, lng: 137.9181393385261},
                                {lat: 35.68117610419377, lng: 137.91815274957116},
                                {lat: 35.681118368838554, lng: 137.917222023043}
                      ],
                      url:"cropfields/rf_hoshinojo_3.html",
                      zoom: 18,
                      block: "星野城",
                      number: 3,
                      address: "2834",
                      area: 47});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});
