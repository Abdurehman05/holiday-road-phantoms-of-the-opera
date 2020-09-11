import { AttractionHTML } from './AttractionsPreview.js'
import { useAttractions } from '../attractions/AttractionProvider.js'

const eventHub = document.querySelector(".container")
const domElement = document.querySelector(".Itinerary-Display")
eventHub.addEventListener("attractionChosen", event => {
    if (event.detail.attractionThatWasChosen === "0") {
        domElement.innerHTML = ""
    } else if (event.detail.attractionThatWasChosen !== "0") {
        const matchedAttraction = useAttractions().filter(attraction => {
            return attraction.name === event.detail.attractionThatWasChosen
        })
        render(matchedAttraction)
    }
})

const render = (taco) => {
    let AttractionHTMLArray = taco.map(singleAttraction => {
        return AttractionHTML(singleAttraction);
    })
    domElement.innerHTML = AttractionHTMLArray.join("");
}

export const populateAttractionPreview = () => {
}