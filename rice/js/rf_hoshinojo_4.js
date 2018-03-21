if (typeof riceFields === "undefined") {
  var riceFields = [];
}

var hoshinojo_4_dict = {fieldId:"hoshinojo_4", 
                        fieldName:"星野城4", 
                        polCenter:{lat: 35.68098437901521, lng: 137.91778421480558},
                        polArray:[{lat: 35.68106063344155, lng: 137.91718876440427},
                                  {lat: 35.681112922104774, lng: 137.9181114443054},
                                  {lat: 35.68103448909709, lng: 137.91812217314146},
                                  {lat: 35.68099527256433, lng: 137.91804707128904},
                                  {lat: 35.680877622850446, lng: 137.91804707128904},
                                  {lat: 35.68082533403305, lng: 137.91718876440427}
                        ],
                        url:"ricefields/rf_hoshinojo_4.html",
                        zoom: 18};


riceFields.push(hoshinojo_4_dict);

$(function(){
  if($('ul.p-ricefield-list').length){
    let appendLi = $("<li>").attr("class", "p-rcf-list-item").append(
                            $("<a>").attr("href", hoshinojo_4_dict.url).text(hoshinojo_4_dict.fieldName));
    $('ul.p-ricefield-list').append(appendLi);
    hoshinojo_4_dict["linkLiDom"] = appendLi;
  }
});