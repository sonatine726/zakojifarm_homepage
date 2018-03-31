$(function(){
  (function() {
    "use strict";
    var ZAKOJIFARM_GLOBAL = ZAKOJIFARMAPP.namespace("global");
    var ZAKOJIFARM_RICE = ZAKOJIFARMAPP.namespace("rice");

    var fieldObj = new ZAKOJIFARM_GLOBAL.CropField({
                      id:"kara", 
                      name:"唐", 
                      polCenter:{lat: 35.68091858229718, lng: 137.92141994838857},
                      polArray:[{lat: 35.68101444506729, lng: 137.92132472996855},
                                {lat: 35.681040589418295, lng: 137.92150175576353},
                                {lat: 35.680831434370255, lng: 137.92151784901762},
                                {lat: 35.68078786033289, lng: 137.9213354588046}
                      ],
                      url:"cropfields/rf_kara.html",
                      zoom: 18,
                      block: "保育園周辺",
                      number: 5,
                      address: "2855-3",
                      area: 4.2});

    ZAKOJIFARM_RICE.viewRiceFieldInfoToRicePage(fieldObj);
  }());
});

// if (typeof riceFields === "undefined") {
//   var riceFields = [];
// }

// const kara_dict = { fieldId:"kara", 
//                     fieldName:"唐", 
//                     polCenter:{lat: 35.68091858229718, lng: 137.92141994838857},
//                     polArray:[{lat: 35.68101444506729, lng: 137.92132472996855},
//                               {lat: 35.681040589418295, lng: 137.92150175576353},
//                               {lat: 35.680831434370255, lng: 137.92151784901762},
//                               {lat: 35.68078786033289, lng: 137.9213354588046}
//                     ],
//                     url:"cropfields/rf_kara.html",
//                     zoom: 18,
//                     block: "保育園周辺",
//                     number: 5,
//                     address: "2855-3",
//                     area: 4.2};

// riceFields.push(kara_dict);

// $(function(){
//   if($('ul.p-cropfield-list').length){
//     let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
//                             $("<a>").attr("href", kara_dict.url).text(kara_dict.fieldName));
//     $('ul.p-cropfield-list').append(appendLi);
//     kara_dict["linkLiDom"] = appendLi;
//   }

//   if($("td.p-cf-prop-block")[0]){
//     $("td.p-cf-prop-block").text(kara_dict.block);
//   }
//   if($("td.p-cf-prop-number")[0]){
//     $("td.p-cf-prop-number").text(kara_dict.number);
//   };
//   if($("td.p-cf-prop-fieldName")[0]){
//     $("td.p-cf-prop-fieldName").text(kara_dict.fieldName);
//   }
//   if($("td.p-cf-prop-address")[0]){
//     $("td.p-cf-prop-address").text(kara_dict.address);
//   }
//   if($("td.p-cf-prop-area")[0]){
//     $("td.p-cf-prop-area").text(kara_dict.area + "a");
//   }

//   if($('ol.p-cropfield-individual_page')[0]){
//     const appendLi = $("<li>").append(
//                             $("<a>").attr("href", kara_dict.url).text("圃場 「" + kara_dict.fieldName + "」"));
//     $('ol.p-cropfield-individual_page').append(appendLi);
//   }
// });