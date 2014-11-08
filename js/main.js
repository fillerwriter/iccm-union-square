$(document).ready(function() {
  var colors = ['rgb(166,97,26)','rgb(223,194,125)','rgb(245,245,245)','rgb(128,205,193)','rgb(1,133,113)'];

  var map = L.map('map', {
    center: [40.735806, -73.989929],
    zoom: 18
  });

  L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png').addTo(map);


  $.get('data.json', function(data) {
    L.geoJson(data, {
      style: function (feature) {
        var style = {fillColor: '#F00', stroke: "true", color: "#666"};

        if (feature.properties.Rating) {
          style.fillColor = colors[feature.properties.Rating - 1];
        }

        return style;
      },
      pointToLayer: function(feature, latlng) {
        return new L.CircleMarker(latlng, {radius: 10, fillOpacity: 0.85});
      },
    }).addTo(map);
  });

  var info = L.control();

  info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };

// method that we will use to update the control based on feature properties passed
  info.update = function (props) {
    this._div.innerHTML = $('#info-data').html();
  };

  info.addTo(map);
});