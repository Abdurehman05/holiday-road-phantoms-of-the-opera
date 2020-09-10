console.log("EateryPreviewEatery.js");

import { EateryHTML } from './EateryPreview.js'
import { useEatery } from '../eateries/EateryProvider.js'

console.log("EateryDialog.js");

const eventHub = document.querySelector(".container")

eventHub.addEventListener("eateryChosen", event => {
    if (event.detail.eateryThatWasChosen !== "0") {
        const matchedEatery = useEatery().filter(eatery => {
            return eatery.businessName === event.detail.eateryThatWasChosen
        })
        render(matchedEatery)
        console.log(matchedEatery)
    }
})

const render = (taco) => {
    const domElement = document.querySelector(".Itinerary-Display")
    let EateryHTMLArray = taco.map(singleEatery => {
        return EateryHTML(singleEatery);
    })
    domElement.innerHTML = EateryHTMLArray.join("");
}

export const testing = () => {
    console.log("test complete")
}