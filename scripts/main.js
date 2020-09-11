import { EaterySelect } from "./eateries/EaterySelect.js";
import { AttractionSelect } from "./attractions/AttractionSelect.js";
import { ParkSelect } from "./parks/ParkSelected.js";
import { weatherList } from "./weather/weatherList.js";
import { getWeather } from "./weather/WeatherProvider.js";
import { testing } from "./itinerarypreview/ItineraryPreviewEatery.js";

EaterySelect();
AttractionSelect();
ParkSelect();
weatherList();
testing();