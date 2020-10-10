
url = 'https://raw.githubusercontent.com/echomsk/ytstreams/main/available_data.json';
var datesJSON;
var goodDates = [];

function loadJson(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var tags = JSON.parse(this.responseText);
	 datesJSON = tags;	
	 for (let [key, value] of Object.entries(datesJSON)) {
	   if(key != "max"){
         goodDates.push(value);
       }
     }

    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
//loadJson();
