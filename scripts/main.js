import { ParkSelect } from "./parks/ParkSelect.js";
import { AttractionPreview } from "./attractions/ItineraryPreview.js";
import { AttractionSelect } from "./attractions/AttractionSelect.js";
import { EaterySelect } from "./eateries/EaterySelect.js";
// import { populateAttractionPreview } from "./itinerarypreview/ItineraryPreviewAttractions.js";
import { populateEateryPreview } from "./itinerarypreview/ItineraryPreviewEatery.js";
import { populateParkPreview } from "./itinerarypreview/ItineraryPreviewPark.js";
import "./weather/weatherList.js";
import "../save/savePreview.js"

AttractionSelect();
EaterySelect();
AttractionPreview();
ParkSelect();
// populateAttractionPreview();
populateEateryPreview();
populateParkPreview();