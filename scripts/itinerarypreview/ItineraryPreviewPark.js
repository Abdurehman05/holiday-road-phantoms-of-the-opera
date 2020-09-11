import { ParkHTML } from './ParkPreview.js'
import { useParks } from '../parks/ParkProvider.js'

const eventHub = document.querySelector(".container");
const domElement = document.querySelector(".Itinerary-Display");

eventHub.addEventListener("parkSelected", event => {
    if (event.detail.parkThatWasSelected === "0") {
        domElement.innerHTML = ""
    } else if (event.detail.parkThatWasSelected !== "0") {
        const matchedPark = useParks().filter(parksObject => {
            return parksObject.name === event.detail.parkThatWasSelected
        })
        render(matchedPark)
    }
});

const render = (taco) => {
    let ParkHTMLArray = taco.map(singlePark => {
        return ParkHTML(singlePark);
    })
    domElement.innerHTML = ParkHTMLArray.join("");
}

export const populateParkPreview = () => {
};