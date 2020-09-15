import { AttractionHTML } from "./Attraction.js";
import { useAttractions } from "./AttractionProvider.js";

const eventHub = document.querySelector(".container");
const DOMElement = document.querySelector(".Attraction-Itinerary-Display");
eventHub.addEventListener("attractionChosen", event => {
    if (event.detail.attractionThatWasChosen === "0") {
        DOMElement.innerHTML = ""
    } else if (event.detail.attractionThatWasChosen !== "0") {
        const matchedAttraction = useAttractions().filter(attraction => {
            return attraction.name === event.detail.attractionThatWasChosen;
        });
        render(matchedAttraction);
    }
});

const render = attractionArray => {

    let AttractionHTMLArray = attractionArray.map(anAtraction => {
        return AttractionHTML(anAtraction);
    });
    DOMElement.innerHTML = AttractionHTMLArray.join("");
};

export const AttractionPreview = () => { };