const weatherIcon = document.getElementById("weatherIcon");
const weatherDisplay = document.getElementById("weatherDisplay");
const warningMessage = document.getElementById("warningMessage");

const weatherConditions = [
    { condition: "Sunny", temperatureRange: [25, 35] },
    { condition: "Cloudy", temperatureRange: [15, 25] },
    { condition: "Rainy", temperatureRange: [10, 20] },
    { condition: "Snowy", temperatureRange: [-5, 5] },
    { condition: "Stormy", temperatureRange: [5, 15] },
    { condition: "Heatwave", temperatureRange: [35, 45] },
    { condition: "Blizzard", temperatureRange: [-15, -5] },
];

function getRandomTemperature(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateWeather() {
    const randomIndex = Math.floor(Math.random() * weatherConditions.length);
    const selectedWeather = weatherConditions[randomIndex];
    const randomTemperature = getRandomTemperature(
        selectedWeather.temperatureRange[0],
        selectedWeather.temperatureRange[1]
    );

    // Update weather text
    weatherDisplay.textContent = `${selectedWeather.condition}, ${randomTemperature}°C`;

    // Update weather icon
    weatherIcon.className = "weather-icon";
    switch (selectedWeather.condition) {
        case "Sunny":
            weatherIcon.classList.add("sunny");
            break;
        case "Cloudy":
            weatherIcon.classList.add("cloudy");
            break;
        case "Rainy":
            weatherIcon.classList.add("rainy");
            break;
        case "Snowy":
            weatherIcon.classList.add("snowy");
            break;
        case "Stormy":
            weatherIcon.classList.add("stormy");
            break;
        case "Heatwave":
            weatherIcon.classList.add("sunny");
            break;
        case "Blizzard":
            weatherIcon.classList.add("snowy");
            break;
        default:
            break;
    }

    // Update warnings
    if (
        selectedWeather.condition === "Stormy" ||
        selectedWeather.condition === "Heatwave" ||
        selectedWeather.condition === "Blizzard"
    ) {
        warningMessage.textContent = `Warning: Extreme weather conditions - ${selectedWeather.condition}!`;
    } else {
        warningMessage.textContent = "";
    }
}

// Initialize weather and set interval
generateWeather();
setInterval(generateWeather, 180000); // Updates every 3 minutes








