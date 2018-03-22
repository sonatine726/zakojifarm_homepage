if (typeof riceFields === "undefined") {
  var riceFields = [];
}

const tokeijoue_dict = { fieldId:"tokeijoue", 
                    fieldName:"トケイジョ上", 
                    polCenter:{lat: 35.68703635217749, lng: 137.92652425910092},
                    polArray:[{lat: 35.68711695784856, lng: 137.9263455569253},
                              {lat: 35.687101708139664, lng: 137.9267612993226},
                              {lat: 35.686953567958625, lng: 137.9266861974702},
                              {lat: 35.68697317476312, lng: 137.92630398268557}
                    ],
                    url:"cropfields/rf_tokeijoue.html",
                    zoom: 18,
                    block: "-",
                    number: 1,
                    address: "2158-7",
                    area: 6.3};

riceFields.push(tokeijoue_dict);

$(function(){
  if($('ul.p-cropfield-list').length){
    let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
                            $("<a>").attr("href", tokeijoue_dict.url).text(tokeijoue_dict.fieldName));
    $('ul.p-cropfield-list').append(appendLi);
    tokeijoue_dict["linkLiDom"] = appendLi;
  }

  if($("td.p-cf-prop-block")[0]){
    $("td.p-cf-prop-block").text(tokeijoue_dict.block);
  }
  if($("td.p-cf-prop-number")[0]){
    $("td.p-cf-prop-number").text(tokeijoue_dict.number);
  };
  if($("td.p-cf-prop-fieldName")[0]){
    $("td.p-cf-prop-fieldName").text(tokeijoue_dict.fieldName);
  }
  if($("td.p-cf-prop-address")[0]){
    $("td.p-cf-prop-address").text(tokeijoue_dict.address);
  }
  if($("td.p-cf-prop-area")[0]){
    $("td.p-cf-prop-area").text(tokeijoue_dict.area + "a");
  }

  if($('ol.p-cropfield-individual_page')[0]){
    const appendLi = $("<li>").append(
                            $("<a>").attr("href", tokeijoue_dict.url).text("圃場 「" + tokeijoue_dict.fieldName + "」"));
    $('ol.p-cropfield-individual_page').append(appendLi);
  }
});