import { useAttractions } from "./AttractionProvider.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("attractionClicked", event => {
            const detailAttraction = useAttractions().find(attraction => {
                return attraction.id === event.detail.chosenAttraction;
            });

            const attractionTarget = document.querySelector(
                `.attractionDialog--${detailAttraction.id}`
            );
            const hTarget = document.querySelector("h4");

            if (attractionTarget.contains(hTarget)) {
                attractionTarget.innerHTML = "";
            } else {
                attractionTarget.innerHTML = `${detailAttraction
      .map(attraction => {
        return `
            <h4>Located in: ${attraction.city}, ${attraction.state} </h4>
            <p>Description: ${attraction.description}</p>
            <p>Souvenirs: ${attraction.ameneties.souvenirs}</p>
            <p>Restrooms: ${attraction.ameneties.restrooms}</p>
				`;
      })
      .join("")}`;
  }
});

export const AttractionDialog = id => {
  return `
		<span class="attractionDialog--${id}"></span>
	`;
};