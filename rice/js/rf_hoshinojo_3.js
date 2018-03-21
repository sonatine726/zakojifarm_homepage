if (typeof riceFields === "undefined") {
  var riceFields = [];
}

var hoshinojo_3_dict = {fieldId:"hoshinojo_3", 
                        fieldName:"星野城3", 
                        polCenter:{lat: 35.68152469371044, lng: 137.91770539542475},
                        polArray:[{lat: 35.68180683299479, lng: 137.91715899113115},
                                  {lat: 35.68181119034394, lng: 137.9174754917949},
                                  {lat: 35.68165323628485, lng: 137.91789793971475},
                                  {lat: 35.68158787589309, lng: 137.9178912341922},
                                  {lat: 35.6815192474241, lng: 137.9181393385261},
                                  {lat: 35.68117610419377, lng: 137.91815274957116},
                                  {lat: 35.681118368838554, lng: 137.917222023043}
                        ],
                        url:"ricefields/rf_hoshinojo_3.html",
                        zoom: 18}

riceFields.push(hoshinojo_3_dict);

$(function(){
  if($('ul.p-ricefield-list').length){
    let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
                            $("<a>").attr("href", hoshinojo_3_dict.url).text(hoshinojo_3_dict.fieldName));
    $('ul.p-ricefield-list').append(appendLi);
    hoshinojo_3_dict["linkLiDom"] = appendLi;
  }
});