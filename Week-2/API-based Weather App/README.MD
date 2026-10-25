# API-Based Weather App

A simple browser-based weather application that displays current conditions for a city using the OpenWeatherMap API.

## Features

- Search for a city by name.
- View the current temperature in Celsius, weather description, humidity, wind speed, and weather icon.
- See the location's city and country.
- Receive helpful status messages while data is loading or if a request fails.
- Responsive layout for desktop and mobile screens.

## Run the app

No build tools or package installation are required.

1. Open `index.html` in a web browser, or serve the project directory with a local static web server.
2. Enter a city name in the search field.
3. Select **Search** to view its current weather.

The app requires an internet connection to contact OpenWeatherMap.

## Project files

- `index.html` — page structure and weather display.
- `style.css` — layout, visual styling, and responsive rules.
- `script.js` — form handling, API request, error messaging, and weather display.

## Configuration

The OpenWeatherMap API key is currently defined as `API_KEY` in `script.js`. Replace it with a valid key if requests are rejected. Because this is a static front-end app, a key included in JavaScript is visible to visitors; use a backend proxy to keep a production API key private.