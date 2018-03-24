if (typeof riceFields === "undefined") {
  var riceFields = [];
}

var hoshinojo_1_dict = {fieldId:"hoshinojo_1", 
                        fieldName:"星1", 
                        polCenter:{lat:35.68129745589816, lng:137.91645719124062},
                        polArray:[
                          {lat:35.68177567810094,lng:137.91623926175816},
                          {lat:35.68177567810094,lng:137.91663622869237},
                          {lat:35.68081923369538,lng:137.91668719066365},
                          {lat:35.68081923369538,lng:137.9162660838483}
                        ],
                        url:"cropfields/rf_hoshinojo_1.html",
                        zoom: 18,
                        block: "星野城",
                        number: 1,
                        address: "2811－1",
                        area: 41.1};

riceFields.push(hoshinojo_1_dict);

$(function(){
  if($('ul.p-cropfield-list').length){
    let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
                            $("<a>").attr("href", hoshinojo_1_dict.url).text(hoshinojo_1_dict.fieldName));
    $('ul.p-cropfield-list').append(appendLi);
    hoshinojo_1_dict["linkLiDom"] = appendLi;
  }

  if($("td.p-cf-prop-block")[0]){
    $("td.p-cf-prop-block").text(hoshinojo_1_dict.block);
  }
  if($("td.p-cf-prop-number")[0]){
    $("td.p-cf-prop-number").text(hoshinojo_1_dict.number);
  };
  if($("td.p-cf-prop-fieldName")[0]){
    $("td.p-cf-prop-fieldName").text(hoshinojo_1_dict.fieldName);
  }
  if($("td.p-cf-prop-address")[0]){
    $("td.p-cf-prop-address").text(hoshinojo_1_dict.address);
  }
  if($("td.p-cf-prop-area")[0]){
    $("td.p-cf-prop-area").text(hoshinojo_1_dict.area + "a");
  }

  if($('ol.p-cropfield-individual_page')[0]){
    const appendLi = $("<li>").append(
                            $("<a>").attr("href", hoshinojo_1_dict.url).text("圃場 「" + hoshinojo_1_dict.fieldName + "」"));
    $('ol.p-cropfield-individual_page').append(appendLi);
  }
});