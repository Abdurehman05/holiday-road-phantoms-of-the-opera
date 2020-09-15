import { DetailDialog } from "./DetailDialog.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", event => {
    if(event.target.id.startsWith("parks--")){
        const [prefix, parkId] = event.target.id.split("--")

        const detailEvent = new CustomEvent("parksClicked", {
            detail: {
                chosenPark: parkId
            }
        })
        
        eventHub.dispatchEvent(detailEvent);
    }
})

export const ParkHTML = attractionObj => {
	return `
	<section id="park-${parkObj.id}" class="card-park">
	<h3>${parkObj.name}</h3>
	 <button class="park--${parkObj.id}">Park Details</button>
	${DetailDialog(parkObj.id)}
	</section>
	`
}








