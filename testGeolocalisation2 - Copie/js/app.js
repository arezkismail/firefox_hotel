// DOMContentLoaded is fired once the document has been loaded and parsed,
// but without waiting for other external resources to load (css/images/etc)
// That makes the app more responsive and perceived as faster.
// https://developer.mozilla.org/Web/Reference/Events/DOMContentLoaded
/**window.addEventListener('DOMContentLoaded', function() {

  // We'll ask the browser to use strict code to help us catch errors earlier.
  // 
https://developer.mozilla.org/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
  'use strict';

  var translate = navigator.mozL10n.get;

  // We want to wait until the localisations library has loaded all the strings.
  // So we'll tell it to let us know once it's ready.
  navigator.mozL10n.once(start);
 // navigator.mozL10n.once(initialize);
	
  // ---

  function start() {

    var message = document.getElementById("message");
     
    // We're using textContent because inserting content from external sources into your page 
using innerHTML can be dangerous.
    // https://developer.mozilla.org/Web/API/Element.innerHTML#Security_considerations
    //message.textContent = translate('message');
	//document.getElementById("message").innerHTML="Bonjour";

  }

});

*/
///////////////////////////////////////////////Pr�cedant//////////////////////////////////////
/**
var myCenter=new google.maps.LatLng(51.508742,-0.120850);

function initialize()
{
var GeocoderOptions = {
	    'address' : document.getElementById("d").value
	}
var GeocoderOptions2 = {
	    'address' : document.getElementById("a").value
	}
alert("@1 : "+GeocoderOptions.address+"\n @2 :"+GeocoderOptions2.address)
var mapProp = {
  center: myCenter,
  zoom:9,
  mapTypeId: google.maps.MapTypeId.ROADMAP
  };

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var myMarker = new google.maps.Marker({
	      position: null,
animation:google.maps.Animation.BOUNCE,
	      map: map,
	      title: "Palais de l\'Elys�e"
	    });
		
		var myMarker2 = new google.maps.Marker({
	      position: null,
animation:google.maps.Animation.BOUNCE,
	      map: map,
	      title: "Palais de l\'Elys�e"
	    });
function GeocodingResult( results , status )
	{
	  // Si la recher � fonctionn�
	  if( status == google.maps.GeocoderStatus.OK ) {
 
	    
 
	    // On cr�� donc un nouveau marker sur l'adresse g�ocod�e
	    
 myMarker.setPosition(results[0].geometry.location);
  //myMarker2.setPosition(results[0].geometry.location);
	    // Et on centre la vue sur ce marker
	    map.setCenter(results[0].geometry.location);
 
	  } // Fin si status OK
 
	} // Fin de la fonction
var myGeocoder = new google.maps.Geocoder();
	myGeocoder.geocode( GeocoderOptions, GeocodingResult );
var infowindow = new google.maps.InfoWindow({
  content:GeocoderOptions.address
  });
  
  
 /** var myGeocoder2 = new google.maps.Geocoder();
	myGeocoder2.geocode( GeocoderOptions2, GeocodingResult );
var infowindow2 = new google.maps.InfoWindow({
  content:GeocoderOptions2.address
  });

// Zoom to 9 when clicking on marker
google.maps.event.addListener(myMarker,'click',function() {
  map.setZoom(12);  

  });
infowindow.open(map,myMarker);
//infowindow2.open(map,myMarker2);
myMarker.setMap(map);
//myMarker2.setMap(map);
}

//google.maps.event.addDomListener(window, 'load', initialize);

function myFunction() {

    var str = document.getElementById("googleMap").innerHTML;
    //var pos = str.indexOf("locate");
    document.getElementById("adresse").innerHTML = str;
}
 */
 
 var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  
  
  
  
  var mapOptions = {
    zoom: 5,
    center: new google.maps.LatLng(51.508742,-0.120850)
  };
  var map = new google.maps.Map(document.getElementById('googleMap'),
      mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('directions-panel'));

  var control = document.getElementById('champs');
  control.style.display = 'block';
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
}

function calcRoute() {
  var start = document.getElementById('d').value;
  var end = document.getElementById('a').value;
  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);


//////////////////////////////////////////////////////////////////////////////////////
function initialize2() {
  // The photoDiv defines the DIV within the info window for
  // displaying the Panoramio photo within its PhotoWidget.
  var photoDiv =  document.createElement('div');

  // The PhotoWidget width and height are expressed as number values,
  // not string values.
  var photoWidgetOptions = {
    width: 640,
    height: 500
  };

  // We construct a PhotoWidget here with a blank (null) request as we
  // don't yet have a photo to populate it.
  var photoWidget = new panoramio.PhotoWidget(photoDiv, null,photoWidgetOptions);

  /**var monoLake = new google.maps.LatLng(37.973432, -119.093170);
  var mapOptions = {
    zoom: 11,
    center: monoLake
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
*/
  var infoWindow = new google.maps.InfoWindow();
  var panoramioLayer = new google.maps.panoramio.PanoramioLayer({
    suppressInfoWindows: true
  });

  panoramioLayer.setMap(map);

  google.maps.event.addListener(panoramioLayer, 'click', function(e) {
    var photoRequestOptions = {
      ids: [{
        'photoId': e.featureDetails.photoId,
        'userId': e.featureDetails.userId
      }]
    };
    photoWidget.setRequest(photoRequestOptions);
    photoWidget.setPosition(0);
    infoWindow.setPosition(e.latLng);
    infoWindow.open(map);
    infoWindow.setContent(photoDiv);
  });
}



  

