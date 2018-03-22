if (typeof riceFields === "undefined") {
  var riceFields = [];
}

const iwa_2_dict = { fieldId:"iwa_2", 
                    fieldName:"岩2", 
                    polCenter:{lat: 35.68403623945584, lng: 137.9078321457564},
                    polArray:[{lat: 35.684197456834774, lng: 137.90776777274004},
                              {lat: 35.68415388463569, lng: 137.90789651877276},
                              {lat: 35.68389245094132, lng: 137.9078857899367},
                              {lat: 35.68390116541159, lng: 137.9077785015761}
                    ],
                    url:"cropfields/rf_iwa_2.html",
                    zoom: 18,
                    block: "岩間周辺",
                    number: 2,
                    address: "3283-2",
                    area: 3.2};

riceFields.push(iwa_2_dict);

$(function(){
  if($('ul.p-cropfield-list').length){
    let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
                            $("<a>").attr("href", iwa_2_dict.url).text(iwa_2_dict.fieldName));
    $('ul.p-cropfield-list').append(appendLi);
    iwa_2_dict["linkLiDom"] = appendLi;
  }

  if($("td.p-cf-prop-block")[0]){
    $("td.p-cf-prop-block").text(iwa_2_dict.block);
  }
  if($("td.p-cf-prop-number")[0]){
    $("td.p-cf-prop-number").text(iwa_2_dict.number);
  };
  if($("td.p-cf-prop-fieldName")[0]){
    $("td.p-cf-prop-fieldName").text(iwa_2_dict.fieldName);
  }
  if($("td.p-cf-prop-address")[0]){
    $("td.p-cf-prop-address").text(iwa_2_dict.address);
  }
  if($("td.p-cf-prop-area")[0]){
    $("td.p-cf-prop-area").text(iwa_2_dict.area + "a");
  }

  if($('ol.p-cropfield-individual_page')[0]){
    const appendLi = $("<li>").append(
                            $("<a>").attr("href", iwa_2_dict.url).text("圃場 「" + iwa_2_dict.fieldName + "」"));
    $('ol.p-cropfield-individual_page').append(appendLi);
  }
});