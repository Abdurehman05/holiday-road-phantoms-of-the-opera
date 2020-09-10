import { getAttractions, useAttractions } from "./AttractionProvider.js";

const eventHub = document.querySelector(".container");

// It listen changes on eventHub
eventHub.addEventListener("change", event => {
    // if attraction select changes, statments inside the curly brackets will be executed
    if (event.target.id === "attractionSelect") {
        const customEvent = new CustomEvent("attractionChosen", {
            detail: {
                attractionThatWasChosen: event.target.value
            }
        });

        //add event to the hub
        eventHub.dispatchEvent(customEvent);
    }
});

// Get a reference to the DOM element where the <select> will be rendered in index.html and assign it to a variable
const contentTarget = document.querySelector(".AttractionsContainer");

export const AttractionSelect = () => {
    getAttractions().then(() => {
        const attractionArray = useAttractions();
        render(attractionArray);
    });
};

const render = theAttractionArray => {
        contentTarget.innerHTML = `
        <fieldset>
            <legend>Choose your favorite bizarre attraction</legend>
		        <select class="attraction-dropdown" id="attractionSelect">
			        <option value="0">Please select an attraction...</option>
			        ${theAttractionArray
                .map(attractionObject => {
                  return `<option value="${attractionObject.name}">${attractionObject.name}</option>`;
                })
                .join("")}
             </select>
        </fieldset>
	`;
};