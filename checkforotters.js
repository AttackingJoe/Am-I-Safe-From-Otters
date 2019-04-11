var x = document.getElementById("answer");
var statex = document.getElementById("state");
var countryx = document.getElementById("country");
var cityx = document.getElementById("city");
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
var apicall ="https://open.mapquestapi.com/geocoding/v1/reverse?key="+apikey+"&location="+latlon+"&outFormat=xml";
  xmlhttp.open("GET", apicall, true);
  xmlhttp.send();
}

function statelookup(xml) {
var x = document.getElementById("answer");
  var x, i, xmlDoc, loc;
  xmlDoc = xml.responseXML;
  loc = "";
  loccity ="";
  loccountry="";
  state = xmlDoc.getElementsByTagName("adminArea3");
  country = xmlDoc.getElementsByTagName("adminArea1");
  city = xmlDoc.getElementsByTagName("adminArea5");

  for (i = 0; i< state.length; i++) {
    loc += state[i].childNodes[0].nodeValue + "<br>";
	  for (i = 0; i< state.length; i++) {
    loccity += city[i].childNodes[0].nodeValue + "<br>";
	  for (i = 0; i< state.length; i++) {
    loccountry += country[i].childNodes[0].nodeValue + "<br>";
	var otterlands = ["CA","WA","BC","AK"] 
	var otterspresent = otterlands.includes("loc");
	if (otterspresent == true) {x.innerHTML = "It is too late for you, the otters have already claimed the coast and will soon invade your home!" } 
	else 
	{x.innerHTML = "The Sea Otters have not yet reached you, but remain ever vigilant."};
    statex.innerHTML = loc;
	countryx.innerHTML = loccountry;
	cityx.innerHTML = loccity;
	 
  }
  }
}
}