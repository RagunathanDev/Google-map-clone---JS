mapboxgl.accessToken =
  "pk.eyJ1IjoicmFndW5hdGhhbmRldiIsImEiOiJja2hjOTJxMmswZmtjMnpvZ2hzZnA2Z3FvIn0.DnBk0GymZhspvME18spn2A";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position.coords);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav, "top-right");

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: "metric",
    profile: "mapbox/cycling",
  });
  map.addControl(directions, "top-left");
}
