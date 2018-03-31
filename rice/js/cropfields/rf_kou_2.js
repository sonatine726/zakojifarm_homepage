$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"kou_2", 
                      name:"好2", 
                      polCenter:{lat: 35.68557388966852, lng: 137.92927372534177},
                      polArray:[{lat: 35.685878890059556, lng: 137.9290977724304},
                                {lat: 35.68590503281662, lng: 137.9292587049713},
                                {lat: 35.685878890059556, lng: 137.9294410951843},
                                {lat: 35.68510331770344, lng: 137.92945182402036},
                                {lat: 35.68510331770344, lng: 137.92911923010251}
                      ],
                      url:"cropfields/rf_kou_2.html",
                      zoom: 18,
                      block: "座光寺域",
                      number: 2,
                      address: "2095-6",
                      area: 28});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});

// if (typeof riceFields === "undefined") {
//   var riceFields = [];
// }

// const kou_2_dict = {fieldId:"kou_2", 
//                     fieldName:"好2", 
//                     polCenter:{lat: 35.68557388966852, lng: 137.92927372534177},
//                     polArray:[{lat: 35.685878890059556, lng: 137.9290977724304},
//                               {lat: 35.68590503281662, lng: 137.9292587049713},
//                               {lat: 35.685878890059556, lng: 137.9294410951843},
//                               {lat: 35.68510331770344, lng: 137.92945182402036},
//                               {lat: 35.68510331770344, lng: 137.92911923010251}
//                     ],
//                     url:"cropfields/rf_kou_2.html",
//                     zoom: 18,
//                     block: "座光寺域",
//                     number: 2,
//                     address: "2095-6",
//                     area: 28};

// riceFields.push(kou_2_dict);

// $(function(){
//   if($('ul.p-cropfield-list').length){
//     let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
//                             $("<a>").attr("href", kou_2_dict.url).text(kou_2_dict.fieldName));
//     $('ul.p-cropfield-list').append(appendLi);
//     kou_2_dict["linkLiDom"] = appendLi;
//   }

//   if($("td.p-cf-prop-block")[0]){
//     $("td.p-cf-prop-block").text(kou_2_dict.block);
//   }
//   if($("td.p-cf-prop-number")[0]){
//     $("td.p-cf-prop-number").text(kou_2_dict.number);
//   };
//   if($("td.p-cf-prop-fieldName")[0]){
//     $("td.p-cf-prop-fieldName").text(kou_2_dict.fieldName);
//   }
//   if($("td.p-cf-prop-address")[0]){
//     $("td.p-cf-prop-address").text(kou_2_dict.address);
//   }
//   if($("td.p-cf-prop-area")[0]){
//     $("td.p-cf-prop-area").text(kou_2_dict.area + "a");
//   }

//   if($('ol.p-cropfield-individual_page')[0]){
//     const appendLi = $("<li>").append(
//                             $("<a>").attr("href", kou_2_dict.url).text("圃場 「" + kou_2_dict.fieldName + "」"));
//     $('ol.p-cropfield-individual_page').append(appendLi);
//   }
// });