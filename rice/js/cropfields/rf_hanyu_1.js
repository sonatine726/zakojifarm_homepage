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


// if (typeof riceFields === "undefined") {
//   var riceFields = [];
// }

// const hanyu_1_dict = { fieldId:"hanyu_1", 
//                     fieldName:"羽生1", 
//                     polCenter:{lat: 35.68155105561939, lng: 137.90569952143414},
//                     polArray:[{lat: 35.68187894710605, lng: 137.90561234964116},
//                               {lat: 35.681826658944836, lng: 137.90595567239507},
//                               {lat: 35.6812166278654, lng: 137.90573036683782},
//                               {lat: 35.681281988561274, lng: 137.90549969686253}
//                     ],
//                     url:"cropfields/rf_hanyu_1.html",
//                     zoom: 18,
//                     block: "岩間周辺",
//                     number: 4,
//                     address: "3223-1",
//                     area: 16.6};

// riceFields.push(hanyu_1_dict);

// $(function(){
//   if($('ul.p-cropfield-list').length){
//     let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
//                             $("<a>").attr("href", hanyu_1_dict.url).text(hanyu_1_dict.fieldName));
//     $('ul.p-cropfield-list').append(appendLi);
//     hanyu_1_dict["linkLiDom"] = appendLi;
//   }

//   if($("td.p-cf-prop-block")[0]){
//     $("td.p-cf-prop-block").text(hanyu_1_dict.block);
//   }
//   if($("td.p-cf-prop-number")[0]){
//     $("td.p-cf-prop-number").text(hanyu_1_dict.number);
//   };
//   if($("td.p-cf-prop-fieldName")[0]){
//     $("td.p-cf-prop-fieldName").text(hanyu_1_dict.fieldName);
//   }
//   if($("td.p-cf-prop-address")[0]){
//     $("td.p-cf-prop-address").text(hanyu_1_dict.address);
//   }
//   if($("td.p-cf-prop-area")[0]){
//     $("td.p-cf-prop-area").text(hanyu_1_dict.area + "a");
//   }

//   if($('ol.p-cropfield-individual_page')[0]){
//     const appendLi = $("<li>").append(
//                             $("<a>").attr("href", hanyu_1_dict.url).text("圃場 「" + hanyu_1_dict.fieldName + "」"));
//     $('ol.p-cropfield-individual_page').append(appendLi);
//   }
// });