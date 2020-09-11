
import { getParks, useParks } from "./ParkProvider.js";

const eventHub = document.querySelector(".container");



eventHub.addEventListener("change", changeEvent => {
	if (changeEvent.target.id === "parkSelect") {

		const customEvent = new CustomEvent("parkSelected", {
			detail: {
				parkThatWasSelected: event.target.value

			}
		})

		eventHub.dispatchEvent(customEvent)
	}
})

const contentTarget = document.querySelector(".National-ParksContainer")



const render = (theParkArray) => {
	contentTarget.innerHTML = `
	<select class="dropdown" id="parkSelect">
	<option value="0">Please select a park...</option>
	${theParkArray.map(parksObject => {
		return `<option value="${parksObject.name}">${parksObject.name}</option>`

	})
		// .join("")
		}
</select>
`
}

export const ParkSelect = () => {
	getParks()
		.then(() => {
			const parksArray = useParks()
			render(parksArray)
		});
};




