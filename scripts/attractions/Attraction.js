export const AttractionHTML = attractionObj => {
    return `
		<section id="attraction-${attractionObj.id}" class="attraction-card">
			<h3>Name:${attractionObj.name}</h3>
			<p>State: ${attractionObj.state}</p>
			<p>City: ${attractionObj.city}</p>
            <p>${attractionObj.description}</p>
            <p>Souvenirs: ${attractionObj.descriptionameneties.souvenirs}</p>
            <p>Restrooms: ${attractionObj.descriptionameneties.restrooms}</p>
		</section>
	`;
};