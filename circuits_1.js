L.mapbox.accessToken = 'pk.eyJ1IjoiYXVudGllYW5nZWxiIiwiYSI6ImNqd3ZnaDBtODBpcG4zeW4xbDdod3pyd3AifQ.ie-VKuEPmGLzQGCjsU5Q3Q'
var map = L.mapbox.map('map')
	.setView([6.14, 19.14], 1.5)
	.addLayer(L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {

}).addTo(mymap);
	
var fileInput = document.getElementById("maps/circuits.csv");

fileInput.addEventListener('change', function(event) {
  var file = fileInput.files[0],
    fr = new FileReader();

  fileInput.value = ''; // Clear the input.
  fr.onload = function() {
    console.log(fr.result);
    // Because we do not need to retrieve a CSV file through AJAX, we can directly use the omnivore.csv.parse synchronous function:
    // https://github.com/mapbox/leaflet-omnivore#api
    var layer = omnivore.csv.parse(fr.result).addTo(map); // Executed synchronously, so no need to use the .on('ready') listener.
    map.fitBounds(layer.getBounds());
  };
  fr.readAsText(file);
});
