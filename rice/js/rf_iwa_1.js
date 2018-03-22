if (typeof riceFields === "undefined") {
  var riceFields = [];
}

const iwa_1_dict = { fieldId:"iwa_1", 
                    fieldName:"岩1", 
                    polCenter:{lat: 35.6840108223075, lng: 137.907699823445},
                    polArray:[{lat: 35.684195278225395, lng: 137.90771412855975},
                              {lat: 35.683929487433424, lng: 137.90763902670733},
                              {lat: 35.68390770126368, lng: 137.90774631506793}
                    ],
                    url:"ricefields/rf_iwa_1.html",
                    zoom: 18,
                    block: "岩間周辺",
                    number: 1,
                    address: "3283-1",
                    area: 2.0};

riceFields.push(iwa_1_dict);

$(function(){
  if($('ul.p-cropfield-list').length){
    let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
                            $("<a>").attr("href", iwa_1_dict.url).text(iwa_1_dict.fieldName));
    $('ul.p-cropfield-list').append(appendLi);
    iwa_1_dict["linkLiDom"] = appendLi;
  }

  if($("td.p-rfc-prop-block")[0]){
    $("td.p-rfc-prop-block").text(iwa_1_dict.block);
  }
  if($("td.p-rfc-prop-number")[0]){
    $("td.p-rfc-prop-number").text(iwa_1_dict.number);
  };
  if($("td.p-rfc-prop-fieldName")[0]){
    $("td.p-rfc-prop-fieldName").text(iwa_1_dict.fieldName);
  }
  if($("td.p-rfc-prop-address")[0]){
    $("td.p-rfc-prop-address").text(iwa_1_dict.address);
  }
  if($("td.p-rfc-prop-area")[0]){
    $("td.p-rfc-prop-area").text(iwa_1_dict.area + "a");
  }

  if($('ol.p-ricefield-individual_page')[0]){
    const appendLi = $("<li>").append(
                            $("<a>").attr("href", iwa_1_dict.url).text("圃場 「" + iwa_1_dict.fieldName + "」"));
    $('ol.p-ricefield-individual_page').append(appendLi);
  }
});