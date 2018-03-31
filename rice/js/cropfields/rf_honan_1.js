$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"honan_1", 
                      name:"保南1", 
                      polCenter:{lat: 35.679427175954075, lng: 137.92011326551233},
                      polArray:[{lat: 35.67979175138938, lng: 137.91995143890176},
                              {lat: 35.679809181224776, lng: 137.9202840328196},
                              {lat: 35.67912069983226, lng: 137.9203376769999},
                              {lat: 35.679103269846486, lng: 137.92006945609842},
                              {lat: 35.679369076715766, lng: 137.9200319051722},
                              {lat: 35.679369076715766, lng: 137.92000508308206}
                      ],
                      url:"cropfields/rf_honan_1.html",
                      zoom: 18,
                      block: "保育園周辺",
                      number: 3,
                      address: "2704-3",
                      area: 21.0});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});

// if (typeof riceFields === "undefined") {
//   var riceFields = [];
// }

// const honan_1_dict = {fieldId:"honan_1", 
//                     fieldName:"保南1", 
//                     polCenter:{lat: 35.679427175954075, lng: 137.92011326551233},
//                     polArray:[{lat: 35.67979175138938, lng: 137.91995143890176},
//                               {lat: 35.679809181224776, lng: 137.9202840328196},
//                               {lat: 35.67912069983226, lng: 137.9203376769999},
//                               {lat: 35.679103269846486, lng: 137.92006945609842},
//                               {lat: 35.679369076715766, lng: 137.9200319051722},
//                               {lat: 35.679369076715766, lng: 137.92000508308206}
//                     ],
//                     url:"cropfields/rf_honan_1.html",
//                     zoom: 18,
//                     block: "保育園周辺",
//                     number: 3,
//                     address: "2704-3",
//                     area: 21.0};

// riceFields.push(honan_1_dict);

// $(function(){
//   if($('ul.p-cropfield-list').length){
//     let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
//                             $("<a>").attr("href", honan_1_dict.url).text(honan_1_dict.fieldName));
//     $('ul.p-cropfield-list').append(appendLi);
//     honan_1_dict["linkLiDom"] = appendLi;
//   }

//   if($("td.p-cf-prop-block")[0]){
//     $("td.p-cf-prop-block").text(honan_1_dict.block);
//   }
//   if($("td.p-cf-prop-number")[0]){
//     $("td.p-cf-prop-number").text(honan_1_dict.number);
//   };
//   if($("td.p-cf-prop-fieldName")[0]){
//     $("td.p-cf-prop-fieldName").text(honan_1_dict.fieldName);
//   }
//   if($("td.p-cf-prop-address")[0]){
//     $("td.p-cf-prop-address").text(honan_1_dict.address);
//   }
//   if($("td.p-cf-prop-area")[0]){
//     $("td.p-cf-prop-area").text(honan_1_dict.area + "a");
//   }

//   if($('ol.p-cropfield-individual_page')[0]){
//     const appendLi = $("<li>").append(
//                             $("<a>").attr("href", honan_1_dict.url).text("圃場 「" + honan_1_dict.fieldName + "」"));
//     $('ol.p-cropfield-individual_page').append(appendLi);
//   }
// });