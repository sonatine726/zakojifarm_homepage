if (typeof riceFields === "undefined") {
  var riceFields = [];
}

const kaga_5_dict = {fieldId:"kaga_5", 
                    fieldName:"加賀5", 
                    polCenter:{lat: 35.68253668483615, lng: 137.92951083184107},
                    polArray:[{lat: 35.682895073555734, lng: 137.92936062813624},
                              {lat: 35.682903788134965, lng: 137.92965030670985},
                              {lat: 35.68217611749157, lng: 137.92967176438196},
                              {lat: 35.68217176016235, lng: 137.92936062813624}
                    ],
                    url:"cropfields/rf_kaga_5.html",
                    zoom: 18,
                    block: "加賀域",
                    number: 5,
                    address: "2001",
                    area: 22.6};

riceFields.push(kaga_5_dict);

$(function(){
  if($('ul.p-cropfield-list').length){
    let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
                            $("<a>").attr("href", kaga_5_dict.url).text(kaga_5_dict.fieldName));
    $('ul.p-cropfield-list').append(appendLi);
    kaga_5_dict["linkLiDom"] = appendLi;
  }

  if($("td.p-cf-prop-block")[0]){
    $("td.p-cf-prop-block").text(kaga_5_dict.block);
  }
  if($("td.p-cf-prop-number")[0]){
    $("td.p-cf-prop-number").text(kaga_5_dict.number);
  };
  if($("td.p-cf-prop-fieldName")[0]){
    $("td.p-cf-prop-fieldName").text(kaga_5_dict.fieldName);
  }
  if($("td.p-cf-prop-address")[0]){
    $("td.p-cf-prop-address").text(kaga_5_dict.address);
  }
  if($("td.p-cf-prop-area")[0]){
    $("td.p-cf-prop-area").text(kaga_5_dict.area + "a");
  }

  if($('ol.p-cropfield-individual_page')[0]){
    const appendLi = $("<li>").append(
                            $("<a>").attr("href", kaga_5_dict.url).text("圃場 「" + kaga_5_dict.fieldName + "」"));
    $('ol.p-cropfield-individual_page').append(appendLi);
  }
});