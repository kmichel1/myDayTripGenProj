"use strict";
console.log("DayTripGenerator");
// As a user, I want a destination, restaurant, transportation and entertainement to be randomly selected for my day trip.//

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

function random_entertainment(itemsE){
    
    return itemsE[Math.floor(Math.random() * itemsE.length)];
    
}
let itemsE =["Movies", "Live Jazz Band", "Circus", "Dancing with the stars!", "Opera"];
console.log(random_entertainment(itemsE));

/* Randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment 
if I don’t like one or more of those things. */

let happyWithSelection;
happyWithSelection = "yes";

let user1 = prompt("Are you happy with the console log selections? ")

if(user1 === happyWithSelection){
    console.log("Great! Hope you enjoy your trip!");
}
else{
    console.log("please refresh this page for a new selection");
}

/* confirm that my day trip is “complete” once I like all of the random selections. */

let confirmComplete;
confirmComplete = "yes";

let user2 = prompt("Please type yes to confirm that you like all of the random selections ")

if(user2 === confirmComplete){
    console.log("Thank you for confirming your trip!");
}
else{
    console.log("please refresh this page for a new selection, then review selection and type yes in order to confirm that you like all selections");
}

console.log("Your completed trip is displayed above.");

