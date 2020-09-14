export const EateryHTML = (eateryObj) => {
    return `
    <div class="eateryFormatting">
    <h4 class="Eatery-Itinerary-Display">
        ${(eateryObj.businessName)}
    </h4>

    <button class="eateryDetail">Eatery Details</button> 
    `
};