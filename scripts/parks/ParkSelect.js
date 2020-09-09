import { getParks, useParks } from "./ParkProvider.js";

const contentTarget = document.querySelector(".National-ParksContainer")

const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.class === "parkSelect") {
        const slectedPark = changeEvent.target.value
    }
})

const theChosenPark = new CustomeEvent("'parkSelected", {
    detail: {
        park: selectedPark
    }
})

eventHub.dispatchEvent(theChosenPark);

export const parkList = () => {
    getParks()
    .then(() => {
        const parksArray = useParks();
        addParksToDOM(parksArray);
    })
}

export const parkSelect = () => {
    getParks()
    .then(() => {
        const parks = useParks()
        render(parks)
    })
    }

    const render = allParks => {
        contentTarget.innerHTML = `
        <select class="dropdown" id="parkSelect">
        option value="0"> Please select a park...</option>
        ${
            allParks.map(park => {
                return `<option value="${park.name}">${park.name}</option>
                `
            }).join("")
        }
        </select>
        `
    }