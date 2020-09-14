import { useAttractions } from "./AttractionProvider.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("detailsClicked", event => {
            const detailAttraction = useAttractions().find(attraction => {
                return attraction.id === parseInt(event.detail.attractionThatWasChosen);
            });

            const detailTarget = document.querySelector(
                `.detailDialog--${detailAttraction.id}`
            );
            const hTarget = document.querySelector("h4");

            if (detailTarget.contains(hTarget)) {
                detailTarget.innerHTML = "";
            } else {
                detailTarget.innerHTML = `${detailAttraction.known_associates
      .map(associate => {
        return `
				<h4>${associate.name}</h4>
				<div>${associate.alibi}</div>
				`;
      })
      .join("")}`;
  }
});

export const DetailDialog = id => {
  return `
		<span class="detailDialog--${id}"></span>
	`;
};