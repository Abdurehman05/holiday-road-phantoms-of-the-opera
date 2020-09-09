import { parkHTML } from "./Park.js";
import { useParks, getParks } from "./ParkProvider.js";

export const parksList = () => {
    getParks()
    .then(() => {
        const parksArray = useParks();
        addParksToDOM(parksArray);
    })
}

const addParksToDOM = (allParksArray) => {
    const domElement = document.querySelector(".National-ParksContainer")

}

let HTMLArray = allParksArray.map(singlePark => {
    return parkHTML(singlePark);
    })

    domElement.innerHTML = HTMLArray.join("");