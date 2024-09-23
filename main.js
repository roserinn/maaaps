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

fetch('/cRoot.json') // Загружаем ваш локальный JSON файл
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })