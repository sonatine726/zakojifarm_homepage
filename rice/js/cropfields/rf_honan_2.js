if (typeof riceFields === "undefined") {
  var riceFields = [];
}

const honan_2_dict = {fieldId:"honan_2", 
                    fieldName:"保南2", 
                    polCenter:{lat: 35.67947692358687, lng: 137.92051067947114},
                    polArray:[{lat: 35.679809181208164, lng: 137.92031085489953},
                              {lat: 35.679826611039736, lng: 137.9206488132354},
                              {lat: 35.67914248729249, lng: 137.92071318625176},
                              {lat: 35.679129414807086, lng: 137.92036986349785}
                    ],
                    url:"cropfields/rf_honan_2.html",
                    zoom: 18,
                    block: "保育園周辺",
                    number: 4,
                    address: "2704-2",
                    area: 24.2};

riceFields.push(honan_2_dict);

$(function(){
  if($('ul.p-cropfield-list').length){
    let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
                            $("<a>").attr("href", honan_2_dict.url).text(honan_2_dict.fieldName));
    $('ul.p-cropfield-list').append(appendLi);
    honan_2_dict["linkLiDom"] = appendLi;
  }

  if($("td.p-cf-prop-block")[0]){
    $("td.p-cf-prop-block").text(honan_2_dict.block);
  }
  if($("td.p-cf-prop-number")[0]){
    $("td.p-cf-prop-number").text(honan_2_dict.number);
  };
  if($("td.p-cf-prop-fieldName")[0]){
    $("td.p-cf-prop-fieldName").text(honan_2_dict.fieldName);
  }
  if($("td.p-cf-prop-address")[0]){
    $("td.p-cf-prop-address").text(honan_2_dict.address);
  }
  if($("td.p-cf-prop-area")[0]){
    $("td.p-cf-prop-area").text(honan_2_dict.area + "a");
  }

  if($('ol.p-cropfield-individual_page')[0]){
    const appendLi = $("<li>").append(
                            $("<a>").attr("href", honan_2_dict.url).text("圃場 「" + honan_2_dict.fieldName + "」"));
    $('ol.p-cropfield-individual_page').append(appendLi);
  }
});