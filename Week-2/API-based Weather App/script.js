const API_KEY = "d625d2f43d5ab6386e461f4da67df8be";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const form = document.querySelector("#weather-form");
const cityInput = document.querySelector("#city-input");
const searchButton = document.querySelector("#search-button");
const status = document.querySelector("#status");
const weatherCard = document.querySelector("#weather-card");
const locationText = document.querySelector("#location");
const localDate = document.querySelector("#local-date");
const weatherIcon = document.querySelector("#weather-icon");
const temperature = document.querySelector("#temperature");
const condition = document.querySelector("#condition");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed");

function setStatus(message, state = "") {
    status.textContent = message;
    if (state) {
        status.dataset.state = state;
    } else {
        delete status.dataset.state;
    }
}

function showWeather(weather) {
    const city = weather.name;
    const country = weather.sys?.country;
    const currentCondition = weather.weather?.[0];
    const temp = weather.main?.temp;
    const humidityValue = weather.main?.humidity;
    const wind = weather.wind?.speed;

    if (
        typeof city !== "string" ||
        !currentCondition ||
        typeof currentCondition.description !== "string" ||
        typeof currentCondition.icon !== "string" ||
        typeof temp !== "number" ||
        typeof humidityValue !== "number" ||
        typeof wind !== "number"
    ) {
        throw new Error("The weather service returned incomplete data. Please try again.");
    }

    locationText.textContent = country ? `${city}, ${country}` : city;
    localDate.textContent = new Intl.DateTimeFormat(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
    }).format(new Date());
    weatherIcon.src = `https://openweathermap.org/img/wn/${encodeURIComponent(currentCondition.icon)}@2x.png`;
    weatherIcon.alt = currentCondition.description;
    temperature.firstChild.textContent = Math.round(temp);
    condition.textContent = currentCondition.description;
    humidity.textContent = `${humidityValue}%`;
    windSpeed.textContent = `${wind} m/s`;
    document.body.dataset.weather = currentCondition.main?.toLowerCase() || "";
    weatherCard.hidden = false;
}

async function loadWeather(city) {
    try {
        const params = new URLSearchParams({
            q: city,
            appid: API_KEY,
            units: "metric",
        });
        const response = await fetch(`${API_URL}?${params}`);

        if (response.status === 404) {
            throw new Error(`We couldn't find "${city}". Check the spelling and try again.`);
        }
        if (response.status === 401) {
            throw new Error("The API key was rejected. Check your OpenWeatherMap key in script.js.");
        }
        if (response.status === 429) {
            throw new Error("The weather service is receiving too many requests. Please try again later.");
        }
        if (!response.ok) {
            throw new Error("The weather service is unavailable right now. Please try again.");
        }

        const weather = await response.json();
        showWeather(weather);
        setStatus(`Showing current conditions for ${weather.name}.`);
    } catch (error) {
        let message = "Something went wrong while loading the weather. Please try again.";
        if (error instanceof TypeError) {
            message = "Couldn't connect to the weather service. Check your internet connection and try again.";
        } else if (error instanceof SyntaxError) {
            message = "The weather service returned unreadable data. Please try again.";
        } else if (error instanceof Error) {
            message = error.message;
        }
        setStatus(message, "error");
    } finally {
        searchButton.disabled = false;
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const city = cityInput.value.trim();
    if (!city) {
        setStatus("Enter a city name to search.", "error");
        cityInput.focus();
        return;
    }

    searchButton.disabled = true;
    setStatus(`Loading weather for ${city}...`, "loading");
    loadWeather(city);
});
