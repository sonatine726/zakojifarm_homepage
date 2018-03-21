if (typeof riceFields === "undefined") {
  var riceFields = [];
}

const saitoh_dict = { fieldId:"saitoh", 
                    fieldName:"斎藤", 
                    polCenter:{lat: 35.68361315057669, lng: 137.92259287814522},
                    polArray:[{lat: 35.68415344895347, lng: 137.92238152007485},
                              {lat: 35.6832122836394, lng: 137.92250490168954},
                              {lat: 35.68320356909389, lng: 137.92265510539437},
                              {lat: 35.68339964613796, lng: 137.92274093608285},
                              {lat: 35.68409680505872, lng: 137.92268192748452}
                    ],
                    url:"ricefields/rf_saitoh.html",
                    zoom: 18,
                    block: "-",
                    number: 1,
                    address: "2239",
                    area: 24.7};

riceFields.push(saitoh_dict);

$(function(){
  if($('ul.p-ricefield-list').length){
    let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
                            $("<a>").attr("href", saitoh_dict.url).text(saitoh_dict.fieldName));
    $('ul.p-ricefield-list').append(appendLi);
    saitoh_dict["linkLiDom"] = appendLi;
  }

  if($("td.p-rfc-prop-block")[0]){
    $("td.p-rfc-prop-block").text(saitoh_dict.block);
  }
  if($("td.p-rfc-prop-number")[0]){
    $("td.p-rfc-prop-number").text(saitoh_dict.number);
  };
  if($("td.p-rfc-prop-fieldName")[0]){
    $("td.p-rfc-prop-fieldName").text(saitoh_dict.fieldName);
  }
  if($("td.p-rfc-prop-address")[0]){
    $("td.p-rfc-prop-address").text(saitoh_dict.address);
  }
  if($("td.p-rfc-prop-area")[0]){
    $("td.p-rfc-prop-area").text(saitoh_dict.area + "a");
  }

  if($('ol.p-ricefield-individual_page')[0]){
    const appendLi = $("<li>").append(
                            $("<a>").attr("href", saitoh_dict.url).text("圃場 「" + saitoh_dict.fieldName + "」"));
    $('ol.p-ricefield-individual_page').append(appendLi);
  }
});