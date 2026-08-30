const searchFormElement = document.getElementById("search-form");
const cityInputElement = document.getElementById('city-input');

searchFormElement.addEventListener('submit', async  (event) => {
  event.preventDefault();
  const city = cityInputElement.value.trim();
  const locationData = await getLocation(city);
  const { name, latitude, longitude, country} = locationData;
})


async function getLocation(cityName) {
  const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`);
  const data = await response.json();
  const location = data.results[0];
  return location;
}

