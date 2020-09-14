export const ParkHTML = (parksObject) => {
    return `
    <div class="parkFormatting">
    <h4 class="Park-Itinerary-Display">
        ${(parksObject.fullName)}
    </h4>
    <button class="parkDetails">Park Details</button> 
    </div>
    `
};