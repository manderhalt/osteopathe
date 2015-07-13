function initialize() {
    var myLatlng = { lat: 43.613118, lng: 1.428277};
  var mapOptions = {
    center: myLatlng,
    zoom: 15,
    scrollwheel: false
  };

  var map = new google.maps.Map(document.getElementById('Plan'),
      mapOptions);
      var marker = new google.maps.Marker({
         position: myLatlng,
         map: map,
         title: "Cabinet d'ostéopathie de l'Embouchure"
      });
}
google.maps.event.addDomListener(window, 'load', initialize);
