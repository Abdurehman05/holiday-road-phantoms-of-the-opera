export const ParkHTML = (parksObject) => {
    return `
    <h3 class="Park-Itinerary-Display">
        ${(parksObject.fullName)}
    </h3>
    <button class="parkDetails">Park Details</button> 
    `
};