const searchFormElement = document.getElementById("search-form");
const cityInputElement = document.getElementById('city-input');

searchFormElement.addEventListener('submit', async  (event) => {
  event.preventDefault();
  const city = cityInputElement.value.trim();
  renderWeatherCard(city);
})


async function getLocation(cityName) {
  const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`);
  const data = await response.json();
  const location = data.results[0];
  return location;
}

async function getWeather(lat, lon) {
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`);
  const data = await response.json();
  return data;
}

async function renderWeatherCard(city) {
  try {
    const locationData = await getLocation(city);
    const { name, latitude, longitude, country} = locationData;
    const weather = await getWeather(latitude, longitude);
    const temp = weather.current.temperature_2m;
    const humidity = weather.current.relative_humidity_2m;
    const windSpeed = weather.current.wind_speed_10m;
    const weatherDespcription = getWeatherDescription(weather.current.weather_code);
    document.getElementById('city-name')
      .textContent = `${name}, ${country}`;
    document.getElementById('weather-description')
      .textContent = weatherDespcription;
    document.getElementById('temp-value')
      .textContent = temp;
    document.getElementById('humidity-value')
      .textContent = `${humidity}%`;
    document.getElementById('wind-value')
      .textContent = `${windSpeed} Km/h`;
    document.getElementById('weather-card').classList.remove('hidden');
  } catch(error) {
    document.getElementById('status-message').textContent = 'Network issue. Please try again later.'
    document.getElementById('status-message').classList.remove('hidden');
  }
  
}

function getWeatherDescription(weather_code) {
  const weatherDescriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",

    45: "Fog",
    48: "Depositing rime fog",

    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",

    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",

    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",

    66: "Light freezing rain",
    67: "Heavy freezing rain",

    71: "Slight snow",
    73: "Moderate snow",
    75: "Heavy snow",
    77: "Snow grains",

    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",

    85: "Slight snow showers",
    86: "Heavy snow showers",

    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail"
  };

  return weatherDescriptions[weather_code];
}
