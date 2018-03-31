$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"kaga_6", 
                      name:"加賀6", 
                      polCenter:{lat: 35.68250531225196, lng: 137.93093776699607},
                      polArray:[{lat: 35.682872415725086, lng: 137.93077683445517},
                                {lat: 35.68287677301607, lng: 137.93107724186484},
                                {lat: 35.68213167280204, lng: 137.93109869953696},
                                {lat: 35.68214038746464, lng: 137.9307982921273}
                      ],
                      url:"cropfields/rf_kaga_6.html",
                      zoom: 18,
                      block: "加賀域",
                      number: 6,
                      address: "1958-1",
                      area: 23.4});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});

// if (typeof riceFields === "undefined") {
//   var riceFields = [];
// }

// const kaga_6_dict = {fieldId:"kaga_6", 
//                     fieldName:"加賀6", 
//                     polCenter:{lat: 35.68250531225196, lng: 137.93093776699607},
//                     polArray:[{lat: 35.682872415725086, lng: 137.93077683445517},
//                               {lat: 35.68287677301607, lng: 137.93107724186484},
//                               {lat: 35.68213167280204, lng: 137.93109869953696},
//                               {lat: 35.68214038746464, lng: 137.9307982921273}
//                     ],
//                     url:"cropfields/rf_kaga_6.html",
//                     zoom: 18,
//                     block: "加賀域",
//                     number: 6,
//                     address: "1958-1",
//                     area: 23.4};

// riceFields.push(kaga_6_dict);

// $(function(){
//   if($('ul.p-cropfield-list').length){
//     let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
//                             $("<a>").attr("href", kaga_6_dict.url).text(kaga_6_dict.fieldName));
//     $('ul.p-cropfield-list').append(appendLi);
//     kaga_6_dict["linkLiDom"] = appendLi;
//   }

//   if($("td.p-cf-prop-block")[0]){
//     $("td.p-cf-prop-block").text(kaga_6_dict.block);
//   }
//   if($("td.p-cf-prop-number")[0]){
//     $("td.p-cf-prop-number").text(kaga_6_dict.number);
//   };
//   if($("td.p-cf-prop-fieldName")[0]){
//     $("td.p-cf-prop-fieldName").text(kaga_6_dict.fieldName);
//   }
//   if($("td.p-cf-prop-address")[0]){
//     $("td.p-cf-prop-address").text(kaga_6_dict.address);
//   }
//   if($("td.p-cf-prop-area")[0]){
//     $("td.p-cf-prop-area").text(kaga_6_dict.area + "a");
//   }

//   if($('ol.p-cropfield-individual_page')[0]){
//     const appendLi = $("<li>").append(
//                             $("<a>").attr("href", kaga_6_dict.url).text("圃場 「" + kaga_6_dict.fieldName + "」"));
//     $('ol.p-cropfield-individual_page').append(appendLi);
//   }
// });