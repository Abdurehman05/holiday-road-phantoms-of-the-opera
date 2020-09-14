import { AttractionSelect } from './attractions/AttractionSelect.js';
import { EaterySelect } from './eateries/EaterySelect.js';
//import { getWeather } from './weather/WeatherProvider.js';
import { ParkSelect } from './parks/ParkSelect.js'
import { populateAttractionPreview } from './itinerarypreview/ItineraryPreviewAttractions.js'
import { populateEateryPreview } from './itinerarypreview/ItineraryPreviewEatery.js'
import { populateParkPreview } from './itinerarypreview/ItineraryPreviewPark.js'
import { weatherList } from './weather/weatherList.js';

AttractionSelect();
EaterySelect();
//getWeather();
ParkSelect()
populateAttractionPreview()
populateEateryPreview();
populateParkPreview()
//weatherList();