import { EateryHTML } from './EateryPreview.js'
import { useEatery } from '../eateries/EateryProvider.js'

const eventHub = document.querySelector(".container")
const domElement = document.querySelector(".Eatery-Itinerary-Display")
eventHub.addEventListener("eateryChosen", event => {
    if (event.detail.eateryThatWasChosen === "0") {
        domElement.innerHTML = ""
    } else if (event.detail.eateryThatWasChosen !== "0") {
        const matchedEatery = useEatery().filter(eatery => {
            return eatery.businessName === event.detail.eateryThatWasChosen
        })
        render(matchedEatery)
    }
    
})

const render = (taco) => {
    let EateryHTMLArray = taco.map(singleEatery => {
        return EateryHTML(singleEatery);
    })
    domElement.innerHTML = EateryHTMLArray.join("");
}

export const populateEateryPreview = () => {
    
}