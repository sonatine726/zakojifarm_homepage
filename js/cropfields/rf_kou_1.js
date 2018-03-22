if (typeof riceFields === "undefined") {
  var riceFields = [];
}

const kou_1_dict = {fieldId:"kou_1", 
                    fieldName:"好1", 
                    polCenter:{lat: 35.68549763954744, lng: 137.9288845368137},
                    polArray:[{lat: 35.68592246131656, lng: 137.9287008054962},
                              {lat: 35.68587017580531, lng: 137.9290602215042},
                              {lat: 35.68510331770344, lng: 137.9290602215042},
                              {lat: 35.68509460336446, lng: 137.92871689875028}
                    ],
                    url:"ricefields/rf_kou_1.html",
                    zoom: 18,
                    block: "座光寺域",
                    number: 1,
                    address: "2095-7",
                    area: 29.5};

riceFields.push(kou_1_dict);

$(function(){
  if($('ul.p-cropfield-list').length){
    let appendLi = $("<li>").attr("class", "p-cf-list-item").append(
                            $("<a>").attr("href", kou_1_dict.url).text(kou_1_dict.fieldName));
    $('ul.p-cropfield-list').append(appendLi);
    kou_1_dict["linkLiDom"] = appendLi;
  }

  if($("td.p-cf-prop-block")[0]){
    $("td.p-cf-prop-block").text(kou_1_dict.block);
  }
  if($("td.p-cf-prop-number")[0]){
    $("td.p-cf-prop-number").text(kou_1_dict.number);
  };
  if($("td.p-cf-prop-fieldName")[0]){
    $("td.p-cf-prop-fieldName").text(kou_1_dict.fieldName);
  }
  if($("td.p-cf-prop-address")[0]){
    $("td.p-cf-prop-address").text(kou_1_dict.address);
  }
  if($("td.p-cf-prop-area")[0]){
    $("td.p-cf-prop-area").text(kou_1_dict.area + "a");
  }

  if($('ol.p-cropfield-individual_page')[0]){
    const appendLi = $("<li>").append(
                            $("<a>").attr("href", kou_1_dict.url).text("圃場 「" + kou_1_dict.fieldName + "」"));
    $('ol.p-cropfield-individual_page').append(appendLi);
  }
});