if (typeof riceFields === "undefined") {
  var riceFields = [];
}

const hayashi_2_dict = {fieldId:"hayashi_2", 
                    fieldName:"林2", 
                    polCenter:{lat: 35.68090144310151, lng: 137.92040562630518},
                    polArray:[{lat: 35.681151267182464, lng: 137.91973149777277},
                              {lat: 35.68119484102136, lng: 137.92082583905085},
                              {lat: 35.68068066820613, lng: 137.9208687543951},
                              {lat: 35.68064145149947, lng: 137.9206541776739},
                              {lat: 35.6808680366496, lng: 137.92061126232966},
                              {lat: 35.68087239405004, lng: 137.91974222660883}
                    ],
                    url:"ricefields/rf_hayashi_2.html",
                    zoom: 18,
                    block: "保育園周辺",
                    number: 2,
                    address: "2848-1",
                    area: 40.7};

riceFields.push(hayashi_2_dict);

$(function(){
  if($('ul.p-cropfield-list').length){
    let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
                            $("<a>").attr("href", hayashi_2_dict.url).text(hayashi_2_dict.fieldName));
    $('ul.p-cropfield-list').append(appendLi);
    hayashi_2_dict["linkLiDom"] = appendLi;
  }

  if($("td.p-rfc-prop-block")[0]){
    $("td.p-rfc-prop-block").text(hayashi_2_dict.block);
  }
  if($("td.p-rfc-prop-number")[0]){
    $("td.p-rfc-prop-number").text(hayashi_2_dict.number);
  };
  if($("td.p-rfc-prop-fieldName")[0]){
    $("td.p-rfc-prop-fieldName").text(hayashi_2_dict.fieldName);
  }
  if($("td.p-rfc-prop-address")[0]){
    $("td.p-rfc-prop-address").text(hayashi_2_dict.address);
  }
  if($("td.p-rfc-prop-area")[0]){
    $("td.p-rfc-prop-area").text(hayashi_2_dict.area + "a");
  }

  if($('ol.p-ricefield-individual_page')[0]){
    const appendLi = $("<li>").append(
                            $("<a>").attr("href", hayashi_2_dict.url).text("圃場 「" + hayashi_2_dict.fieldName + "」"));
    $('ol.p-ricefield-individual_page').append(appendLi);
  }
});