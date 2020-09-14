import { useEatery, getEatery } from "./EateryProvider.js"

//creates a variable named eventHub and attaches it to the "container" class in the main portion of index.html
const eventHub = document.querySelector(".container");

//creates a variable named contentTarget and attaches it to the "Eateries" class in index.html
const contentTarget = document.querySelector(".EateriesContainer");

//attaches an eventlistener to the eventhub. The eventlistener listens for a change in the eaterySelect element and then dispatches the value that the user selects to the eventhub
eventHub.addEventListener("change", event => {
    if (event.target.id === "eaterySelect") {
        const customEateryEvent = new CustomEvent("eateryChosen", {
            detail: {
                eateryThatWasChosen: event.target.value
            }
        })
        eventHub.dispatchEvent(customEateryEvent)
    }

});             

//receives the eateries names from the useEatery function and passes them individually as html dropdown options
const render = (EateryCollection) => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="eaterySelect">
            <option value="0">Please select an eatery...</option>
            ${
        EateryCollection.map(
            eateryObj => {
                const newEatery = eateryObj.businessName
                return `<option value="${newEatery}">${newEatery}</option>`
            })
        }
        </select >
    `
};

//exports and renders the copy of the array containing the eatery names that were brought over in the useEatery function from the EateryProvider.js sheet
export const EaterySelect = () => {
    getEatery()
        .then(() => {
            const eateries = useEatery()
            render(eateries)
        })
};