"use strict";
console.log("DayTripGenerator");
// As a user, I want a destination to be randomly selected for my day trip.//

function random_destination(items){
    
    return items[Math.floor(Math.random() * items.length)];
    
}
let items =["New York", "Miami", "Tampa", "Atlanta", "Virginia Beach"];
console.log(random_destination(items));

function random_restaurant(itemsR){
    
    return itemsR[Math.floor(Math.random() * itemsR.length)];
    
}
let itemsR =["Red Lobster", "Olive Garden", "Smokey Bones", "Pops Diner", "Burger King"];
console.log(random_restaurant(itemsR));

function random_transportation(itemsT){
    
    return itemsT[Math.floor(Math.random() * itemsT.length)];
    
}
let itemsT =["Uber", "Lyft", "Taxi", "Walk", "Horse Carriage"];
console.log(random_transportation(itemsT));

