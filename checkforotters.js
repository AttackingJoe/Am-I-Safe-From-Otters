var x = document.getElementById("answer");

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
var x = document.getElementById("answer");
  var x, i, xmlDoc, loc;
  xmlDoc = xml.responseXML;
  loc = "";
  state = xmlDoc.getElementsByTagName("adminArea3");
  for (i = 0; i< state.length; i++) {
    loc += state[i].childNodes[0].nodeValue + "<br>";
	var otterlands = ["CA","WA","BC","AK"] 
	var otterspresent = otterlands.includes("loc");
	if (otterspresent == true {x.innerHTML = "It is too late for you, the otters have already claimed the coast and will soon invade your home!" } else 
	{x.innerHTML = "The Sea Otters have not yet reached you, but remain ever vigilant."}
  }
 
}
