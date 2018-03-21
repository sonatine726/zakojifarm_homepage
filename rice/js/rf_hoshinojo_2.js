if (typeof riceFields === "undefined") {
  var riceFields = [];
}

var hoshinojo_2_dict = {fieldId:"hoshinojo_2", 
                        fieldName:"星野城2", 
                        polCenter:{lat: 35.68152779833747, lng: 137.91689714047607},
                        polArray:[{lat: 35.681794414588246, lng: 137.9166989922851},
                                  {lat: 35.681790057238175, lng: 137.91707047823365},
                                  {lat: 35.681260637399866, lng: 137.91710266474183},
                                  {lat: 35.68126608412358, lng: 137.9167164266437}
                        ],
                        url:"ricefields/rf_hoshinojo_2.html",
                        zoom: 18}

riceFields.push(hoshinojo_2_dict);

$(function(){
  if($('ul.p-ricefield-list').length){
    let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
                            $("<a>").attr("href", hoshinojo_2_dict.url).text(hoshinojo_2_dict.fieldName));
    $('ul.p-ricefield-list').append(appendLi);
    hoshinojo_2_dict["linkLiDom"] = appendLi;
  }
});