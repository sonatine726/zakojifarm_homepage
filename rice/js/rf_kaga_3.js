if (typeof riceFields === "undefined") {
  var riceFields = [];
}

const kaga_3_dict = {fieldId:"kaga_3", 
                    fieldName:"加賀3", 
                    polCenter:{lat: 35.68251293761038, lng: 137.92852646109168},
                    polArray:[{lat: 35.6828680584339, lng: 137.92836284634177},
                              {lat: 35.6828680584339, lng: 137.9286739825875},
                              {lat: 35.68216217411697, lng: 137.9286739825875},
                              {lat: 35.68215345945676, lng: 137.92839503284995}
                    ],
                    url:"ricefields/rf_kaga_3.html",
                    zoom: 18,
                    block: "加賀域",
                    number: 3,
                    address: "1997",
                    area: 21.9};

riceFields.push(kaga_3_dict);

$(function(){
  if($('ul.p-cropfield-list').length){
    let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
                            $("<a>").attr("href", kaga_3_dict.url).text(kaga_3_dict.fieldName));
    $('ul.p-cropfield-list').append(appendLi);
    kaga_3_dict["linkLiDom"] = appendLi;
  }

  if($("td.p-rfc-prop-block")[0]){
    $("td.p-rfc-prop-block").text(kaga_3_dict.block);
  }
  if($("td.p-rfc-prop-number")[0]){
    $("td.p-rfc-prop-number").text(kaga_3_dict.number);
  };
  if($("td.p-rfc-prop-fieldName")[0]){
    $("td.p-rfc-prop-fieldName").text(kaga_3_dict.fieldName);
  }
  if($("td.p-rfc-prop-address")[0]){
    $("td.p-rfc-prop-address").text(kaga_3_dict.address);
  }
  if($("td.p-rfc-prop-area")[0]){
    $("td.p-rfc-prop-area").text(kaga_3_dict.area + "a");
  }

  if($('ol.p-ricefield-individual_page')[0]){
    const appendLi = $("<li>").append(
                            $("<a>").attr("href", kaga_3_dict.url).text("圃場 「" + kaga_3_dict.fieldName + "」"));
    $('ol.p-ricefield-individual_page').append(appendLi);
  }
});