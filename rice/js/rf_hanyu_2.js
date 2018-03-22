if (typeof riceFields === "undefined") {
  var riceFields = [];
}

const hanyu_2_dict = { fieldId:"hanyu_2", 
                    fieldName:"羽生2", 
                    polCenter:{lat: 35.681494409856306, lng: 137.90612867487653},
                    polArray:[{lat: 35.68181794424796, lng: 137.9060897828458},
                              {lat: 35.681787442801415, lng: 137.90641701234563},
                              {lat: 35.68117305403839, lng: 137.90614879144414},
                              {lat: 35.68119919833746, lng: 137.90585911287053}
                    ],
                    url:"ricefields/rf_hanyu_2.html",
                    zoom: 18,
                    block: "岩間周辺",
                    number: 5,
                    address: "3224-1",
                    area: 20.9};

riceFields.push(hanyu_2_dict);

$(function(){
  if($('ul.p-cropfield-list').length){
    let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
                            $("<a>").attr("href", hanyu_2_dict.url).text(hanyu_2_dict.fieldName));
    $('ul.p-cropfield-list').append(appendLi);
    hanyu_2_dict["linkLiDom"] = appendLi;
  }

  if($("td.p-rfc-prop-block")[0]){
    $("td.p-rfc-prop-block").text(hanyu_2_dict.block);
  }
  if($("td.p-rfc-prop-number")[0]){
    $("td.p-rfc-prop-number").text(hanyu_2_dict.number);
  };
  if($("td.p-rfc-prop-fieldName")[0]){
    $("td.p-rfc-prop-fieldName").text(hanyu_2_dict.fieldName);
  }
  if($("td.p-rfc-prop-address")[0]){
    $("td.p-rfc-prop-address").text(hanyu_2_dict.address);
  }
  if($("td.p-rfc-prop-area")[0]){
    $("td.p-rfc-prop-area").text(hanyu_2_dict.area + "a");
  }

  if($('ol.p-ricefield-individual_page')[0]){
    const appendLi = $("<li>").append(
                            $("<a>").attr("href", hanyu_2_dict.url).text("圃場 「" + hanyu_2_dict.fieldName + "」"));
    $('ol.p-ricefield-individual_page').append(appendLi);
  }
});