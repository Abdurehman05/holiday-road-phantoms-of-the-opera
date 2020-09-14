import { AttractionHTML } from "./Attraction.js";
import { useAttractions } from "./AttractionProvider.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("attractionChosen", event => {
    if (event.detail.attractionThatWasChosen !== "0") {
        const matchedAttraction = useAttractions().filter(attraction => {
            return attraction.name === event.detail.attractionThatWasChosen;
        });
        render(matchedAttraction);
    }
});

const render = attractionArray => {
    const DOMElement = document.querySelector(".Attraction-Itinerary-Display");
    let AttractionHTMLArray = attractionArray.map(anAtraction => {
        return AttractionHTML(anAtraction);
    });
    DOMElement.innerHTML = AttractionHTMLArray.join("");
};

export const AttractionPreview = () => {};