import { AttractionSelect } from './attractions/AttractionSelect.js';
import { EaterySelect } from './eateries/EaterySelect.js';
import { getWeather } from './weather/WeatherProvider.js';
import { ParkSelect } from './parks/ParkSelected.js'
import { populateAttractionPreview } from './itinerarypreview/ItineraryPreviewAttractions.js'
import { populateEateryPreview } from './itinerarypreview/ItineraryPreviewEatery.js'
import { weatherList } from './weather/weatherList.js';
import { populateParkPreview } from './itinerarypreview/ItineraryPreviewPark.js'

AttractionSelect();
EaterySelect();
getWeather();
ParkSelect()
populateAttractionPreview()
populateEateryPreview();
weatherList();
populateParkPreview()
