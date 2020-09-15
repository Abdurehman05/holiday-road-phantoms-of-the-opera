import { AttractionDialog } from "./DetailDialog.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("attraction--")) {
        const [prefix, attractionId] = event.target.id.split("--");

        const attractionEvent = new CustomEvent("attractionClicked", {
            detail: {
                chosenAttraction: attractionId
            }
        });

        eventHub.dispatchEvent(attractionEvent);
    }
});

export const AttractionHTML = attractionObj => {
    return `
	<div id="attraction--${attractionObj.id}" class="attractionFormatting">
		<h3>${attractionObj.name}  <button id="associates--${
    attractionObj.id
  }">Bizarre Details</button>${AttractionDialog(attractionObj.id)}</h3>
		
		
	</div>			
	`;
};