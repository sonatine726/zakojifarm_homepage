if (typeof riceFields === "undefined") {
  var riceFields = [];
}

const hanyu_3_dict = { fieldId:"hanyu_3", 
                    fieldName:"羽生3", 
                    polCenter:{lat: 35.68149985668566, lng: 137.9064478577493},
                    polArray:[{lat: 35.68177872810026, lng: 137.9064491988538},
                              {lat: 35.68177001339817, lng: 137.9066476823209},
                              {lat: 35.68125584428935, lng: 137.90647602094396},
                              {lat: 35.68119484095487, lng: 137.90621852887853}
                    ],
                    url:"cropfields/rf_hanyu_3.html",
                    zoom: 18,
                    block: "岩間周辺",
                    number: 6,
                    address: "3224-2",
                    area: 12.4};

riceFields.push(hanyu_3_dict);

$(function(){
  if($('ul.p-cropfield-list').length){
    let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
                            $("<a>").attr("href", hanyu_3_dict.url).text(hanyu_3_dict.fieldName));
    $('ul.p-cropfield-list').append(appendLi);
    hanyu_3_dict["linkLiDom"] = appendLi;
  }

  if($("td.p-cf-prop-block")[0]){
    $("td.p-cf-prop-block").text(hanyu_3_dict.block);
  }
  if($("td.p-cf-prop-number")[0]){
    $("td.p-cf-prop-number").text(hanyu_3_dict.number);
  };
  if($("td.p-cf-prop-fieldName")[0]){
    $("td.p-cf-prop-fieldName").text(hanyu_3_dict.fieldName);
  }
  if($("td.p-cf-prop-address")[0]){
    $("td.p-cf-prop-address").text(hanyu_3_dict.address);
  }
  if($("td.p-cf-prop-area")[0]){
    $("td.p-cf-prop-area").text(hanyu_3_dict.area + "a");
  }

  if($('ol.p-cropfield-individual_page')[0]){
    const appendLi = $("<li>").append(
                            $("<a>").attr("href", hanyu_3_dict.url).text("圃場 「" + hanyu_3_dict.fieldName + "」"));
    $('ol.p-cropfield-individual_page').append(appendLi);
  }
});