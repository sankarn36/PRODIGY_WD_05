document.getElementById('locationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('locationInput').value;
    getWeather(location);
});

function getWeather(location) {
    const apiKey = 'your_api_key' ;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('Location not found. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert('Error fetching the weather data. Please try again later.');
        });
}

function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = `
        <p>Location: ${data.name}, ${data.sys.country}</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}
