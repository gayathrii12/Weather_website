async function searchWeather() {
  const city = document.getElementById('searchInput').value;  // Get the city name from input
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;  // API URL with the city name
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0f5e8900d5msh05ff13a87a80ef2p183dddjsn816058baa147',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);  // Fetching weather data for the city
    const data = await response.json();          // Parse the response as JSON
    displayWeather(data, city);                  // Display weather data for the searched city
    updateCommonCityWeather(city);               // Update weather data for other common cities
  } catch (error) {
    console.error('Error fetching weather data:', error);  // Catch and log any errors
  }
}

// Example function to display weather data
function displayWeather(data, city) {
  const weatherDiv = document.getElementById('weatherData');
  weatherDiv.innerHTML = `
    <h2>Weather in ${city}</h2>
    <p>Temperature: ${data.temp}°C</p>
    <p>Feels Like: ${data.feels_like}°C</p>
    <p>Humidity: ${data.humidity}%</p>
    <p>Wind Speed: ${data.wind_speed} m/s</p>
  `;
}

// Example function to update common cities' weather data
function updateCommonCityWeather(city) {
  // Logic for updating weather data of common cities (like New York, Tokyo, etc.)
  // This could fetch weather data for these cities using the same API and update the UI.
  console.log(`Updating weather data for common cities after searching for ${city}`);
}


async function updateCommonCityWeather(city) {
  const commonCities = ['Shanghai', 'Boston', 'Lucknow', 'Kolkata']; // Corrected spelling of Shanghai
  const urlPrefix = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '0f5e8900d5msh05ff13a87a80ef2p183dddjsn816058baa147',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
  };

  try {
      for (const cityName of commonCities) {
          const url = `${urlPrefix}${cityName}`;
          const response = await fetch(url, options);
          const data = await response.json();
          displayCommonCityWeather(data, cityName.toLowerCase());
      }
  } catch (error) {
      console.error(error);
  }
}

function displayCommonCityWeather(data, cityName) {
  document.getElementById(`${cityName}_feels_like`).innerText = data.feels_like;
  document.getElementById(`${cityName}_humidity`).innerText = data.humidity;
  document.getElementById(`${cityName}_max_temp`).innerText = data.max_temp;
  document.getElementById(`${cityName}_min_temp`).innerText = data.min_temp;
  document.getElementById(`${cityName}_sunrise`).innerText = data.sunrise;
  document.getElementById(`${cityName}_sunset`).innerText = data.sunset;
  document.getElementById(`${cityName}_temp`).innerText = data.temp;
  document.getElementById(`${cityName}_wind_degrees`).innerText = data.wind_degrees;
  document.getElementById(`${cityName}_wind_speed`).innerText = data.wind_speed;
}

function displayWeather(data, city) {
  document.getElementById('cityNameValue').innerText = city;
  document.getElementById('temp').innerText = data.temp;
  document.getElementById('min_temp').innerText = data.min_temp;
  document.getElementById('max_temp').innerText = data.max_temp;
  document.getElementById('humidity').innerText = data.humidity;
  document.getElementById('wind_speed').innerText = data.wind_speed;
  document.getElementById('wind_degrees').innerText = data.wind_degrees;
  document.getElementById('sunrise').innerText = data.sunrise;
  document.getElementById('sunset').innerText = data.sunset;
  document.getElementById('feels_like').innerText = data.feels_like;
}
