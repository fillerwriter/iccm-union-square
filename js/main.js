$(document).ready(function() {
  var colors = ['rgb(166,97,26)','rgb(223,194,125)','rgb(245,245,245)','rgb(128,205,193)','rgb(1,133,113)'];

  var map = L.map('map', {
    center: [40.735806, -73.990429],
    zoom: 18
  });

  L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png').addTo(map);
});