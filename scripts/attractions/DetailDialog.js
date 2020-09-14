import { useAttractions } from "./AttractionProvider.js";

const eventHub = document.querySelector(".container");

export const DetailDialog = id => {
    return `
		<span class="detailDialog--${id}"></span>
	`;
};