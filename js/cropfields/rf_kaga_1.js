if (typeof riceFields === "undefined") {
  var riceFields = [];
}

const kaga_1_dict = {fieldId:"kaga_1", 
                    fieldName:"加賀1", 
                    polCenter:{lat: 35.68266762267329, lng: 137.92787066180608},
                    polArray:[{lat: 35.68286370127543, lng: 137.92768693048856},
                              {lat: 35.68286370127543, lng: 137.92800343115232},
                              {lat: 35.68247154407115, lng: 137.92800343115232},
                              {lat: 35.68247154407115, lng: 137.92778885443113}
                    ],
                    url:"ricefields/rf_kaga_1.html",
                    zoom: 18,
                    block: "加賀域",
                    number: 1,
                    address: "1992-2, 1995-3",
                    area: 11.7};

riceFields.push(kaga_1_dict);

$(function(){
  if($('ul.p-cropfield-list').length){
    let appendLi = $("<li>").attr("class", "p-cf-list-item").append(
                            $("<a>").attr("href", kaga_1_dict.url).text(kaga_1_dict.fieldName));
    $('ul.p-cropfield-list').append(appendLi);
    kaga_1_dict["linkLiDom"] = appendLi;
  }

  if($("td.p-cf-prop-block")[0]){
    $("td.p-cf-prop-block").text(kaga_1_dict.block);
  }
  if($("td.p-cf-prop-number")[0]){
    $("td.p-cf-prop-number").text(kaga_1_dict.number);
  };
  if($("td.p-cf-prop-fieldName")[0]){
    $("td.p-cf-prop-fieldName").text(kaga_1_dict.fieldName);
  }
  if($("td.p-cf-prop-address")[0]){
    $("td.p-cf-prop-address").text(kaga_1_dict.address);
  }
  if($("td.p-cf-prop-area")[0]){
    $("td.p-cf-prop-area").text(kaga_1_dict.area + "a");
  }

  if($('ol.p-cropfield-individual_page')[0]){
    const appendLi = $("<li>").append(
                            $("<a>").attr("href", kaga_1_dict.url).text("圃場 「" + kaga_1_dict.fieldName + "」"));
    $('ol.p-cropfield-individual_page').append(appendLi);
  }
});