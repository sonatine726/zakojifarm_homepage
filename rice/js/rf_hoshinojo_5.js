if (typeof riceFields === "undefined") {
  var riceFields = [];
}

var hoshinojo_5_dict = { fieldId:"hoshinojo_5",
                        fieldName:"星野城5",
                        polCenter:{lat: 35.68035211752613, lng: 137.91741406996152},
                        polArray:[{lat: 35.68077914558905, lng: 137.9171941288223},
                                  {lat: 35.680796575208745, lng: 137.9176447399368},
                                  {lat: 35.67993380446343, lng: 137.9176447399368},
                                  {lat: 35.6798989448433, lng: 137.91717267115018}
                        ],
                        url:"ricefields/rf_hoshinojo_5.html",
                        zoom: 18,
                        block: "星野城",
                        number: 5,
                        address: "2687-4",
                        area: 39.6};
riceFields.push(hoshinojo_5_dict);

$(function(){
  if($('ul.p-ricefield-list')[0]){
    let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
                            $("<a>").attr("href", hoshinojo_5_dict.url).text(hoshinojo_5_dict.fieldName));
    $('ul.p-ricefield-list').append(appendLi);
    hoshinojo_5_dict["linkLiDom"] = appendLi;
  }
  if($("td.p-rfc-prop-block")[0]){
    $("td.p-rfc-prop-block").text(hoshinojo_5_dict.block);
  }
  if($("td.p-rfc-prop-number")[0]){
    $("td.p-rfc-prop-number").text(hoshinojo_5_dict.number);
  };
  if($("td.p-rfc-prop-fieldName")[0]){
    $("td.p-rfc-prop-fieldName").text(hoshinojo_5_dict.fieldName);
  }
  if($("td.p-rfc-prop-address")[0]){
    $("td.p-rfc-prop-address").text(hoshinojo_5_dict.address);
  }
  if($("td.p-rfc-prop-area")[0]){
    $("td.p-rfc-prop-area").text(hoshinojo_5_dict.area + "a");
  }

  if($('ol.p-ricefield-individual_page')[0]){
    const appendLi = $("<li>").append(        
                            $("<a>").attr("href", hoshinojo_5_dict.url).text("圃場 「" + hoshinojo_5_dict.fieldName + "」"));
    $('ol.p-ricefield-individual_page').append(appendLi);
  }
});

address;