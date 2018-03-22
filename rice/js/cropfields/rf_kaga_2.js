if (typeof riceFields === "undefined") {
  var riceFields = [];
}

const kaga_2_dict = {fieldId:"kaga_2", 
                    fieldName:"加賀2", 
                    polCenter:{lat: 35.68261097755741, lng: 137.92818984467885},
                    polArray:[{lat: 35.68286370127543, lng: 137.92804098207853},
                              {lat: 35.682868058566875, lng: 137.92833066065214},
                              {lat: 35.682353896534025, lng: 137.9283413894882},
                              {lat: 35.68235825385331, lng: 137.92804634649656}
                    ],
                    url:"cropfields/rf_kaga_2.html",
                    zoom: 18,
                    block: "加賀域",
                    number: 2,
                    address: "1995-1,2",
                    area: 15.8};

riceFields.push(kaga_2_dict);

$(function(){
  if($('ul.p-cropfield-list').length){
    let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
                            $("<a>").attr("href", kaga_2_dict.url).text(kaga_2_dict.fieldName));
    $('ul.p-cropfield-list').append(appendLi);
    kaga_2_dict["linkLiDom"] = appendLi;
  }

  if($("td.p-cf-prop-block")[0]){
    $("td.p-cf-prop-block").text(kaga_2_dict.block);
  }
  if($("td.p-cf-prop-number")[0]){
    $("td.p-cf-prop-number").text(kaga_2_dict.number);
  };
  if($("td.p-cf-prop-fieldName")[0]){
    $("td.p-cf-prop-fieldName").text(kaga_2_dict.fieldName);
  }
  if($("td.p-cf-prop-address")[0]){
    $("td.p-cf-prop-address").text(kaga_2_dict.address);
  }
  if($("td.p-cf-prop-area")[0]){
    $("td.p-cf-prop-area").text(kaga_2_dict.area + "a");
  }

  if($('ol.p-cropfield-individual_page')[0]){
    const appendLi = $("<li>").append(
                            $("<a>").attr("href", kaga_2_dict.url).text("圃場 「" + kaga_2_dict.fieldName + "」"));
    $('ol.p-cropfield-individual_page').append(appendLi);
  }
});