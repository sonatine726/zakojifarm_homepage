$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"kaga_4", 
                      name:"加賀4", 
                      polCenter:{lat: 35.68252187003872, lng: 137.9288563728312},
                      polArray:[{lat: 35.68287154421369, lng: 137.92870616912637},
                                {lat: 35.68288461608601, lng: 137.92900657653604},
                                {lat: 35.6821656599276, lng: 137.92899584769998},
                                {lat: 35.6821656599276, lng: 137.92871689796243}
                      ],
                      url:"cropfields/rf_kaga_4.html",
                      zoom: 18,
                      block: "加賀域",
                      number: 4,
                      address: "1998, 1999",
                      area: 21.5});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});

// if (typeof riceFields === "undefined") {
//   var riceFields = [];
// }

// const kaga_4_dict = {fieldId:"kaga_4", 
//                     fieldName:"加賀4", 
//                     polCenter:{lat: 35.68252187003872, lng: 137.9288563728312},
//                     polArray:[{lat: 35.68287154421369, lng: 137.92870616912637},
//                               {lat: 35.68288461608601, lng: 137.92900657653604},
//                               {lat: 35.6821656599276, lng: 137.92899584769998},
//                               {lat: 35.6821656599276, lng: 137.92871689796243}
//                     ],
//                     url:"cropfields/rf_kaga_4.html",
//                     zoom: 18,
//                     block: "加賀域",
//                     number: 4,
//                     address: "1998, 1999",
//                     area: 21.5};

// riceFields.push(kaga_4_dict);

// $(function(){
//   if($('ul.p-cropfield-list').length){
//     let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
//                             $("<a>").attr("href", kaga_4_dict.url).text(kaga_4_dict.fieldName));
//     $('ul.p-cropfield-list').append(appendLi);
//     kaga_4_dict["linkLiDom"] = appendLi;
//   }

//   if($("td.p-cf-prop-block")[0]){
//     $("td.p-cf-prop-block").text(kaga_4_dict.block);
//   }
//   if($("td.p-cf-prop-number")[0]){
//     $("td.p-cf-prop-number").text(kaga_4_dict.number);
//   };
//   if($("td.p-cf-prop-fieldName")[0]){
//     $("td.p-cf-prop-fieldName").text(kaga_4_dict.fieldName);
//   }
//   if($("td.p-cf-prop-address")[0]){
//     $("td.p-cf-prop-address").text(kaga_4_dict.address);
//   }
//   if($("td.p-cf-prop-area")[0]){
//     $("td.p-cf-prop-area").text(kaga_4_dict.area + "a");
//   }

//   if($('ol.p-cropfield-individual_page')[0]){
//     const appendLi = $("<li>").append(
//                             $("<a>").attr("href", kaga_4_dict.url).text("圃場 「" + kaga_4_dict.fieldName + "」"));
//     $('ol.p-cropfield-individual_page').append(appendLi);
//   }
// });