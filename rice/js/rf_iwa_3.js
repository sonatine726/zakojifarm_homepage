if (typeof riceFields === "undefined") {
  var riceFields = [];
}

const iwa_3_dict = { fieldId:"iwa_3", 
                    fieldName:"岩3", 
                    polCenter:{lat: 35.68400791749275, lng: 137.9080219120442},
                    polArray:[{lat: 35.684145170193005, lng: 137.90793138748995},
                              {lat: 35.6841255626935, lng: 137.90813255316607},
                              {lat: 35.68386848614315, lng: 137.90809768444888},
                              {lat: 35.68389245094132, lng: 137.90792602307192}
                    ],
                    url:"ricefields/rf_iwa_3.html",
                    zoom: 18,
                    block: "岩間周辺",
                    number: 3,
                    address: "3283-5",
                    area: 5.9};

riceFields.push(iwa_3_dict);

$(function(){
  if($('ul.p-cropfield-list').length){
    let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
                            $("<a>").attr("href", iwa_3_dict.url).text(iwa_3_dict.fieldName));
    $('ul.p-cropfield-list').append(appendLi);
    iwa_3_dict["linkLiDom"] = appendLi;
  }

  if($("td.p-rfc-prop-block")[0]){
    $("td.p-rfc-prop-block").text(iwa_3_dict.block);
  }
  if($("td.p-rfc-prop-number")[0]){
    $("td.p-rfc-prop-number").text(iwa_3_dict.number);
  };
  if($("td.p-rfc-prop-fieldName")[0]){
    $("td.p-rfc-prop-fieldName").text(iwa_3_dict.fieldName);
  }
  if($("td.p-rfc-prop-address")[0]){
    $("td.p-rfc-prop-address").text(iwa_3_dict.address);
  }
  if($("td.p-rfc-prop-area")[0]){
    $("td.p-rfc-prop-area").text(iwa_3_dict.area + "a");
  }

  if($('ol.p-ricefield-individual_page')[0]){
    const appendLi = $("<li>").append(
                            $("<a>").attr("href", iwa_3_dict.url).text("圃場 「" + iwa_3_dict.fieldName + "」"));
    $('ol.p-ricefield-individual_page').append(appendLi);
  }
});