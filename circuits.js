var mymap = L.map('map').setView([6.14, 19.14], 1.5);

	
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYXVudGllYW5nZWxiIiwiYSI6ImNqd3ZnaDBtODBpcG4zeW4xbDdod3pyd3AifQ.ie-VKuEPmGLzQGCjsU5Q3Q'
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
