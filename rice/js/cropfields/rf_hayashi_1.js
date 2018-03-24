if (typeof riceFields === "undefined") {
  var riceFields = [];
}

const hayashi_1_dict = {fieldId:"hayashi_1", 
                    fieldName:"林1", 
                    polCenter:{lat: 35.68121989523943, lng: 137.9195276498467},
                    polArray:[{lat: 35.68156086032865, lng: 137.9193452596337},
                              {lat: 35.68156086032865, lng: 137.9196885823876},
                              {lat: 35.68087675145024, lng: 137.91971004005973},
                              {lat: 35.68088110885018, lng: 137.91936671730582}
                    ],
                    url:"cropfields/rf_hayashi_1.html",
                    zoom: 18,
                    block: "保育園周辺",
                    number: 1,
                    address: "2831-2,2",
                    area: 23.4};

riceFields.push(hayashi_1_dict);

$(function(){
  if($('ul.p-cropfield-list').length){
    let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
                            $("<a>").attr("href", hayashi_1_dict.url).text(hayashi_1_dict.fieldName));
    $('ul.p-cropfield-list').append(appendLi);
    hayashi_1_dict["linkLiDom"] = appendLi;
  }

  if($("td.p-cf-prop-block")[0]){
    $("td.p-cf-prop-block").text(hayashi_1_dict.block);
  }
  if($("td.p-cf-prop-number")[0]){
    $("td.p-cf-prop-number").text(hayashi_1_dict.number);
  };
  if($("td.p-cf-prop-fieldName")[0]){
    $("td.p-cf-prop-fieldName").text(hayashi_1_dict.fieldName);
  }
  if($("td.p-cf-prop-address")[0]){
    $("td.p-cf-prop-address").text(hayashi_1_dict.address);
  }
  if($("td.p-cf-prop-area")[0]){
    $("td.p-cf-prop-area").text(hayashi_1_dict.area + "a");
  }

  if($('ol.p-cropfield-individual_page')[0]){
    const appendLi = $("<li>").append(
                            $("<a>").attr("href", hayashi_1_dict.url).text("圃場 「" + hayashi_1_dict.fieldName + "」"));
    $('ol.p-cropfield-individual_page').append(appendLi);
  }
});