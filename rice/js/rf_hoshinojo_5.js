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
                        zoom: 18};
riceFields.push(hoshinojo_5_dict);

$(function(){
  if($('ul.p-ricefield-list').length){
    let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
                            $("<a>").attr("href", hoshinojo_5_dict.url).text(hoshinojo_5_dict.fieldName));
    $('ul.p-ricefield-list').append(appendLi);
    hoshinojo_5_dict["linkLiDom"] = appendLi;
  }
});

