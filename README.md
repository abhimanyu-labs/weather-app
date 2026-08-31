# Weather App

A lightweight weather app built to practice DOM manipulation, asynchronous JavaScript (`async/await`), and working with third-party APIs.

## Features

- Search weather by city name worldwide
- Display current temperature, humidity, and wind speed
- Convert WMO weather codes into readable weather conditions
- Handle invalid city names and API/server errors
- Display loading and error states

## Tech Stack

- **HTML5 & CSS3**
- **Vanilla JavaScript (ES6+)**
- **Open-Meteo API** (Geocoding & Forecast endpoints)

## What I Learned / Practiced

- Handling form submission events and preventing default page reloads with `preventDefault()`
- Fetching and parsing asynchronous JSON data using `fetch()` and `async/await`
- Chaining sequential API calls — resolving city coordinates first, then requesting weather data
- Handling HTTP errors using `response.ok`
- Handling API responses with missing or empty results
- Managing dynamic UI states such as loading, errors, and weather data
- Using `encodeURIComponent()` when constructing API URLs
- Working with WMO weather codes to display human-readable conditions

## How to Run

1. Clone the repository.
2. Open the project folder in VS Code.
3. Open `index.html` using VS Code Live Server.

Or simply open `index.html` directly in a browser.