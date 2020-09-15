import { ParkHTML } from "./Park.js";
import { getParks, useParks } from "./ParkProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".National-ParksContainer");

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "parkSelect") {
        const customEvent = new CustomEvent("parkSelected", {
            detail: {
                parkThatWasSelected: event.target.value
                
            }
        });
        eventHub.dispatchEvent(customEvent);
    }
});

const render = theParkArray => {
        contentTarget.innerHTML = `
	<select class="dropdown" id="parkSelect">
	<option value="0">Please select a park...</option>
	${theParkArray.map(parksObject => {
		return `<option value="${parksObject.fullName}">${parksObject.fullName}</option>`
	})
		}

	</select>
	`;
};

export const ParkSelect = () => {
  getParks().then(() => {
    const parksArray = useParks();
    render(parksArray);
  });
};