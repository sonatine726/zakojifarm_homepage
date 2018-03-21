if (typeof riceFields === "undefined") {
  var riceFields = [];
}

var hoshinojo_4_dict = {fieldId:"hoshinojo_4",
                        fieldName:"星4",
                        polCenter:{lat: 35.68098437901521, lng: 137.91778421480558},
                        polArray:[{lat: 35.68106063344155, lng: 137.91718876440427},
                                  {lat: 35.681112922104774, lng: 137.9181114443054},
                                  {lat: 35.68103448909709, lng: 137.91812217314146},
                                  {lat: 35.68099527256433, lng: 137.91804707128904},
                                  {lat: 35.680877622850446, lng: 137.91804707128904},
                                  {lat: 35.68082533403305, lng: 137.91718876440427}
                        ],
                        url:"ricefields/rf_hoshinojo_4.html",
                        zoom: 18,
                        block: "星野城",
                        number: 4,
                        address: "2836-1",
                        area: 20.4};


riceFields.push(hoshinojo_4_dict);

$(function(){
  if($('ul.p-ricefield-list').length){
    let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
                            $("<a>").attr("href", hoshinojo_4_dict.url).text(hoshinojo_4_dict.fieldName));
    $('ul.p-ricefield-list').append(appendLi);
    hoshinojo_4_dict["linkLiDom"] = appendLi;
  }

  if($("td.p-rfc-prop-block")[0]){
    $("td.p-rfc-prop-block").text(hoshinojo_4_dict.block);
  }
  if($("td.p-rfc-prop-number")[0]){
    $("td.p-rfc-prop-number").text(hoshinojo_4_dict.number);
  };
  if($("td.p-rfc-prop-fieldName")[0]){
    $("td.p-rfc-prop-fieldName").text(hoshinojo_4_dict.fieldName);
  }
  if($("td.p-rfc-prop-address")[0]){
    $("td.p-rfc-prop-address").text(hoshinojo_4_dict.address);
  }
  if($("td.p-rfc-prop-area")[0]){
    $("td.p-rfc-prop-area").text(hoshinojo_4_dict.area + "a");
  }

  if($('ol.p-ricefield-individual_page')[0]){
    const appendLi = $("<li>").append(
                            $("<a>").attr("href", hoshinojo_4_dict.url).text("圃場 「" + hoshinojo_4_dict.fieldName + "」"));
    $('ol.p-ricefield-individual_page').append(appendLi);
  }
});