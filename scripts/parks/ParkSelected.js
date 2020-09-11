
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
	<fieldset>
        <legend>List of National Parks</legend>
			<select class="park-dropdown" id="parkSelect">
			<option value="0">Please select a park...</option>
	${theParkArray.map(parksObject => {
		return `<option value="${parksObject.name}">${parksObject.name}</option>`
		
	})
	.join("")
}
</select>
</fieldset>
`
}

export const ParkSelect = () => {
	getParks()
	.then(() => {
		const parksArray = useParks()
		render(parksArray)
	});
};


	

