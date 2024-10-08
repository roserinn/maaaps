mapboxgl.accessToken = 'pk.eyJ1Ijoicm9zZXJpbm4iLCJhIjoiY20xODB4MWw2MHdtMjJyc2tueWFjNGFubSJ9.tx6B50zt2ZEAksf6gdFuKg'; // Замените на ваш токен

const map = new mapboxgl.Map({
  container: 'map',
  style: 'cRoot.json',
  center: [13.3, 47.6],
  zoom: 7
});

//NUTZUNG - Земля
//GEWAESSER - Вода
//GRENZEN - Границы



map.addControl(new mapboxgl.NavigationControl());

fetch('/cRoot.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })

map.on('load', () => {
  fetch('/austria_tunnel.geojson')
    .then(response => response.json())
    .then(data => {
      map.addSource('tunnelData', {
        type: 'geojson',
        data: data
      });

      map.addLayer({
        id: 'tunnels',
        type: 'line',
        source: 'tunnelData',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#1900ff',
          'line-width': 5
        }
      });
      // map.moveLayer('tunnels', "TXT/GEONAMEN_P_KIRCHE_KAPELLE/Kirche, Kloster");
    });
});