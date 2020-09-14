import { useParks } from "./ParkProvider.js";
const eventHub = document.querySelector(".container");

export const DetailDialog = id => {
    return `
		<span class="detailDialog--${id}"></span>
	`;
};