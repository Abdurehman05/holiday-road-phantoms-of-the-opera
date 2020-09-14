export const ParkHTML = attractionObj => {
	return `
	<section id="park-${parkObj.id}" class="card-park">
	<h3>${parkObj.name} <button class="park">Park Details</h3>
	<p>Street: ${parkObj.line1}</p>
	<p>City&State: ${parkObj.city}, ${parkObj.state}</p>
		
	
	`;
};