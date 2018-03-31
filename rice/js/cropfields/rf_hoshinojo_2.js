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

// if (typeof riceFields === "undefined") {
//   var riceFields = [];
// }

// var hoshinojo_2_dict = {fieldId:"hoshinojo_2", 
//                         fieldName:"星2", 
//                         polCenter:{lat: 35.68152779833747, lng: 137.91689714047607},
//                         polArray:[{lat: 35.681794414588246, lng: 137.9166989922851},
//                                   {lat: 35.681790057238175, lng: 137.91707047823365},
//                                   {lat: 35.681260637399866, lng: 137.91710266474183},
//                                   {lat: 35.68126608412358, lng: 137.9167164266437}
//                         ],
//                         url:"cropfields/rf_hoshinojo_2.html",
//                         zoom: 18,
//                         block: "星野城",
//                         number: 2,
//                         address: "2810-2,3",
//                         area: 22.4}

// riceFields.push(hoshinojo_2_dict);

// $(function(){
//   if($('ul.p-cropfield-list').length){
//     let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
//                             $("<a>").attr("href", hoshinojo_2_dict.url).text(hoshinojo_2_dict.fieldName));
//     $('ul.p-cropfield-list').append(appendLi);
//     hoshinojo_2_dict["linkLiDom"] = appendLi;
//   }

//   if($("td.p-cf-prop-block")[0]){
//     $("td.p-cf-prop-block").text(hoshinojo_2_dict.block);
//   }
//   if($("td.p-cf-prop-number")[0]){
//     $("td.p-cf-prop-number").text(hoshinojo_2_dict.number);
//   };
//   if($("td.p-cf-prop-fieldName")[0]){
//     $("td.p-cf-prop-fieldName").text(hoshinojo_2_dict.fieldName);
//   }
//   if($("td.p-cf-prop-address")[0]){
//     $("td.p-cf-prop-address").text(hoshinojo_2_dict.address);
//   }
//   if($("td.p-cf-prop-area")[0]){
//     $("td.p-cf-prop-area").text(hoshinojo_2_dict.area + "a");
//   }

//   if($('ol.p-cropfield-individual_page')[0]){
//     const appendLi = $("<li>").append(
//                             $("<a>").attr("href", hoshinojo_2_dict.url).text("圃場 「" + hoshinojo_2_dict.fieldName + "」"));
//     $('ol.p-cropfield-individual_page').append(appendLi);
//   }
// });