import { useAttractions } from "./AttractionProvider.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("attractionClicked", event => {
            const detailAttraction = useAttractions().find(attraction => {
                return attraction.id === parseInt(event.detail.chosenAttraction);
            });
            const attractionTarget = document.querySelector(
                `.attraction--${detailAttraction.id}`
            );
            const hTarget = document.querySelector("h4");

            if (attractionTarget.contains(hTarget)) {
                attractionTarget.innerHTML = "";
            } else {
                attractionTarget.innerHTML = `${(detailAttraction.ameneties,
    attraction => {
      return `
            <h4>Souvenirs: ${attraction.souvenirs}</h4>
            <h4>Restrooms: ${attraction.restrooms}</h4>
				`;
    })}`;
  }
});

export const AttractionDialog = id => {
  return `
		<span class="attraction--${id}"></span>
	`;
};