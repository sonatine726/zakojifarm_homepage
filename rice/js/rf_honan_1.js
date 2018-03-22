if (typeof riceFields === "undefined") {
  var riceFields = [];
}

const honan_1_dict = {fieldId:"honan_1", 
                    fieldName:"保南1", 
                    polCenter:{lat: 35.679427175954075, lng: 137.92011326551233},
                    polArray:[{lat: 35.67979175138938, lng: 137.91995143890176},
                              {lat: 35.679809181224776, lng: 137.9202840328196},
                              {lat: 35.67912069983226, lng: 137.9203376769999},
                              {lat: 35.679103269846486, lng: 137.92006945609842},
                              {lat: 35.679369076715766, lng: 137.9200319051722},
                              {lat: 35.679369076715766, lng: 137.92000508308206}
                    ],
                    url:"ricefields/rf_honan_1.html",
                    zoom: 18,
                    block: "保育園周辺",
                    number: 3,
                    address: "2704-3",
                    area: 21.0};

riceFields.push(honan_1_dict);

$(function(){
  if($('ul.p-cropfield-list').length){
    let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
                            $("<a>").attr("href", honan_1_dict.url).text(honan_1_dict.fieldName));
    $('ul.p-cropfield-list').append(appendLi);
    honan_1_dict["linkLiDom"] = appendLi;
  }

  if($("td.p-rfc-prop-block")[0]){
    $("td.p-rfc-prop-block").text(honan_1_dict.block);
  }
  if($("td.p-rfc-prop-number")[0]){
    $("td.p-rfc-prop-number").text(honan_1_dict.number);
  };
  if($("td.p-rfc-prop-fieldName")[0]){
    $("td.p-rfc-prop-fieldName").text(honan_1_dict.fieldName);
  }
  if($("td.p-rfc-prop-address")[0]){
    $("td.p-rfc-prop-address").text(honan_1_dict.address);
  }
  if($("td.p-rfc-prop-area")[0]){
    $("td.p-rfc-prop-area").text(honan_1_dict.area + "a");
  }

  if($('ol.p-ricefield-individual_page')[0]){
    const appendLi = $("<li>").append(
                            $("<a>").attr("href", honan_1_dict.url).text("圃場 「" + honan_1_dict.fieldName + "」"));
    $('ol.p-ricefield-individual_page').append(appendLi);
  }
});