if (typeof riceFields === "undefined") {
  var riceFields = [];
}

const shou_dict = {fieldId:"shou", 
                    fieldName:"省", 
                    polCenter:{lat: 35.68484958453539, lng: 137.92823258032513},
                    polArray:[{lat: 35.68497085942562, lng: 137.92815256108952},
                              {lat: 35.68496868083734, lng: 137.92835372676564},
                              {lat: 35.68475082170986, lng: 137.9283644556017},
                              {lat: 35.684744285926854, lng: 137.92818206538868},
                              {lat: 35.684829251064286, lng: 137.92819279422474},
                              {lat: 35.68483360824838, lng: 137.9281498788805}
                    ],
                    url:"ricefields/rf_shou.html",
                    zoom: 18,
                    block: "座光寺域",
                    number: 3,
                    address: "2097",
                    area: 5.4};

riceFields.push(shou_dict);

$(function(){
  if($('ul.p-ricefield-list').length){
    let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
                            $("<a>").attr("href", shou_dict.url).text(shou_dict.fieldName));
    $('ul.p-ricefield-list').append(appendLi);
    shou_dict["linkLiDom"] = appendLi;
  }

  if($("td.p-rfc-prop-block")[0]){
    $("td.p-rfc-prop-block").text(shou_dict.block);
  }
  if($("td.p-rfc-prop-number")[0]){
    $("td.p-rfc-prop-number").text(shou_dict.number);
  };
  if($("td.p-rfc-prop-fieldName")[0]){
    $("td.p-rfc-prop-fieldName").text(shou_dict.fieldName);
  }
  if($("td.p-rfc-prop-address")[0]){
    $("td.p-rfc-prop-address").text(shou_dict.address);
  }
  if($("td.p-rfc-prop-area")[0]){
    $("td.p-rfc-prop-area").text(shou_dict.area + "a");
  }

  if($('ol.p-ricefield-individual_page')[0]){
    const appendLi = $("<li>").append(
                            $("<a>").attr("href", shou_dict.url).text("圃場 「" + shou_dict.fieldName + "」"));
    $('ol.p-ricefield-individual_page').append(appendLi);
  }
});