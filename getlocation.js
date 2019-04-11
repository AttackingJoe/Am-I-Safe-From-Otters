var x = document.getElementById("shownstate");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      statelookup(this);
    }
  };
var latlon = position.coords.latitude + "," + position.coords.longitude;
var apicall ="http://open.mapquestapi.com/geocoding/v1/reverse?key="+apikey+"&location="+latlon+"&outFormat=xml";
  xmlhttp.open("GET", apicall, true);
  xmlhttp.send();
}

function statelookup(xml) {
  var x, i, xmlDoc, txt;
  xmlDoc = xml.responseXML;
  txt = "";
  state = xmlDoc.getElementsByTagName("adminArea3");
  for (i = 0; i< state.length; i++) {
    txt += state[i].childNodes[0].nodeValue + "<br>";
  }
  document.getElementById("shownstate").innerHTML = txt;
}
