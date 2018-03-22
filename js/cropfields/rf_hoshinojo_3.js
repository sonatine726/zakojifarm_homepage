if (typeof riceFields === "undefined") {
  var riceFields = [];
}

var hoshinojo_3_dict = {fieldId:"hoshinojo_3", 
                        fieldName:"星3", 
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
                        zoom: 18,
                        block: "星野城",
                        number: 3,
                        address: "2834",
                        area: 47};

riceFields.push(hoshinojo_3_dict);

$(function(){
  if($('ul.p-cropfield-list').length){
    let appendLi = $("<li>").attr("class", "p-cf-list-item").append(
                            $("<a>").attr("href", hoshinojo_3_dict.url).text(hoshinojo_3_dict.fieldName));
    $('ul.p-cropfield-list').append(appendLi);
    hoshinojo_3_dict["linkLiDom"] = appendLi;
  }

  if($("td.p-cf-prop-block")[0]){
    $("td.p-cf-prop-block").text(hoshinojo_3_dict.block);
  }
  if($("td.p-cf-prop-number")[0]){
    $("td.p-cf-prop-number").text(hoshinojo_3_dict.number);
  };
  if($("td.p-cf-prop-fieldName")[0]){
    $("td.p-cf-prop-fieldName").text(hoshinojo_3_dict.fieldName);
  }
  if($("td.p-cf-prop-address")[0]){
    $("td.p-cf-prop-address").text(hoshinojo_3_dict.address);
  }
  if($("td.p-cf-prop-area")[0]){
    $("td.p-cf-prop-area").text(hoshinojo_3_dict.area + "a");
  }

  if($('ol.p-cropfield-individual_page')[0]){
    const appendLi = $("<li>").append(
                            $("<a>").attr("href", hoshinojo_3_dict.url).text("圃場 「" + hoshinojo_3_dict.fieldName + "」"));
    $('ol.p-cropfield-individual_page').append(appendLi);
  }
});