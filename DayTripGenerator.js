"use strict";
console.log("DayTripGenerator");
// As a user, I want a destination to be randomly selected for my day trip.//

function random_destination(items){
    
    return items[Math.floor(Math.random() * items.length)];
    
}
let items =["New York", "Miami", "Tampa", "Atlanta", "Virginia Beach"];
console.log(random_destination(items));
