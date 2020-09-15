import { useParks } from "./ParkProvider.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("parkClicked", event => {
    //display all associates for criminal
    
    const detailPark = useParks().find(park => {
        return park.id === parseInt(event.detail.chosenPark)
    })
    
    const parkTarget = document.querySelector(`.park--${detailPark.id}`);
    const hTarget = document.querySelector("h4")

    if (parkTarget.contains(hTarget)) {
        parkTarget.innerHTML = "";
    } else {
        parkTarget.innerHTML = `${(detailPark,
            park => {
				return `
				<h4>${detailPark.address.line1}</h4>
				<h4>${detailPark.address.city}</h4>
				<h4>${detailPark.address.state}</h4>
                `
            })
        }`
    }
})



export const DetailDialog = (id) => {
    return `
    <span class="detailDialog--${id}"></span>
    `
}