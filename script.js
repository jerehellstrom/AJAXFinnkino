//*lataa teattereiden xml tiedoston
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    mySelect(this);
    }
  };
  xhttp.open("GET", "https://www.finnkino.fi/xml/TheatreAreas/", true);
  xhttp.send();
}

//*lataa aikataulujen xml tiedoston ja toimii ns filtterinä eri alueisiin/teattereihin (if else if else if else...)
function loadCal() {
		var e = document.getElementById("demo");
	var value = e.options[e.selectedIndex].value;
	var text = e.options[e.selectedIndex].text;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    myCalendar(this);
    }
  }
  if ( text == "Pääkaupunkiseutu") {
	xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1014", true);
	xhttp.send();
  } else if ( text == "Espoo") {
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1012", true);
  xhttp.send();
}	else if ( text == "Espoo: OMENA") {
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1039", true);
  xhttp.send();
}	else if ( text == "Espoo: SELLO") {
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1038", true);
  xhttp.send();
}	else if ( text == "Helsinki") {
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1002", true);
  xhttp.send();
}	else if ( text == "Helsinki: ITIS") {
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1045", true);
  xhttp.send();
}	else if ( text == "Helsinki: KINOPALATSI") {
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1031", true);
  xhttp.send();
}	else if ( text == "Helsinki: MAXIM") {
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1032", true);
  xhttp.send();
}	else if ( text == "Helsinki: TENNISPALATSI") {
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1033", true);
  xhttp.send();
}	else if ( text == "Vantaa: FLAMINGO") {
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1013", true);
  xhttp.send();
}	else if ( text == "Jyväskylä: FANTASIA") {
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1015", true);
  xhttp.send();
}	else if ( text == "Kuopio: SCALA") {
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1016", true);
  xhttp.send();
}	else if ( text == "Lahti: KUVAPALATSI") {
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1017", true);
  xhttp.send();
}	else if ( text == "Lappeenranta: STRAND") {
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1041", true);
  xhttp.send();
}	else if ( text == "Oulu: PLAZA") {
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1018", true);
  xhttp.send();
}	else if ( text == "Pori: PROMENADI") {
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1019", true);
  xhttp.send();
}	else if ( text == "Tampere") {
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1021", true);
  xhttp.send();
}	else if ( text == "Tampere: CINE ATLAS") {
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1034", true);
  xhttp.send();
}	else if ( text == "Tampere: PLEVNA") {
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1035", true);
  xhttp.send();
}	else if ( text == "Turku: KINOPALATSI") {
  xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1022", true);
  xhttp.send();
}	else if ( text == "Valitse alue/teatteri") {
  alert("Sinun täytyy valita alue/teatteri!");
}
console.log(text);
}
//*Täyttää select laatikon teattereilla
function mySelect(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var options="";
  var x = xmlDoc.getElementsByTagName("TheatreArea");
  for (i = 0; i <x.length; i++)	  {
    options += "</option><option>" +
    x[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue;
	  }
  document.getElementById("demo").innerHTML = options;
}

//* Täyttää aikataulun elokuvilla ja niiden tiedoilla
function myCalendar(xml) {
	var i;
	var xmlDoc = xml.responseXML;
	var table="";
	var x = xmlDoc.getElementsByTagName("Show");
	for (i = 0; i <x.length; i++) {

			
	table += "<tr><td>" + "<h1>" +
		  x[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue + "</h1> " +
		   x[i].getElementsByTagName("TheatreAndAuditorium")[0].childNodes[0].nodeValue +
			"</td><td>" +
			 x[i].getElementsByTagName("dttmShowStart")[0].childNodes[0].nodeValue + " " +
			"</td><td><img src='" +
			x[i].getElementsByTagName("EventMediumImagePortrait")[0].childNodes[0].nodeValue +
			"'/></td></tr>"
	}
	
  document.getElementById("schedule").innerHTML = table;
}

//* funktio hakee ja kirjoittaa console.logiin select laatikon nykyisen arvon. Käyettiin testaamiseen.
//* ei tee tällä hetkellä mitään -> Toiminta siirretty loadCal() funktioon
	function getValue() {
	var e = document.getElementById("demo");
	var value = e.options[e.selectedIndex].value;
	var text = e.options[e.selectedIndex].text;
	console.log(text);
	}
	
