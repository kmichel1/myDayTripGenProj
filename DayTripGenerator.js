"use strict";
console.log("DayTripGenerator");
// As a user, I want a destination, restaurant, transportation and entertainement to be randomly selected for my day trip.//

function random_destination(items){
    
    return items[Math.floor(Math.random() * items.length)];
    
}
let items =["New York", "Miami", "Tampa", "Atlanta", "Virginia Beach"];
let selectedDest = random_destination(items);
console.log(selectedDest);

function random_restaurant(itemsR){
    
    return itemsR[Math.floor(Math.random() * itemsR.length)];
    
}
let itemsR =["Red Lobster", "Olive Garden", "Smokey Bones", "Pops Diner", "Burger King"];
let selectedRest = random_restaurant(itemsR);
console.log(selectedRest);

function random_transportation(itemsT){
    
    return itemsT[Math.floor(Math.random() * itemsT.length)];
    
}
let itemsT =["Uber", "Lyft", "Taxi", "Walk", "Horse Carriage"];
let selectedTrans = random_transportation(itemsT)
console.log(selectedTrans);

function random_entertainment(itemsE){
    
    return itemsE[Math.floor(Math.random() * itemsE.length)];
    
}
let itemsE =["Movies", "Live Jazz Band", "Circus", "Dancing with the stars!", "Opera"];
let selectedEnt = random_entertainment(itemsE);
console.log(selectedEnt);

/* Randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment 
if I don’t like one or more of those things. */

let happyWithSelection;
happyWithSelection = "no";

while(happyWithSelection === "no"){
    let user1 = prompt("Are you happy with the console log selections?")
    if(user1 === "yes"){
    console.log("Great! Hope you enjoy your trip!");
    happyWithSelection = "yes";
}
    else{
    selectedDest = random_destination(items);
    selectedRest = random_restaurant(itemsR);
    selectedTrans = random_transportation(itemsT);
    selectedEnt = random_entertainment(itemsE);
    console.log(`Your new trip is ${selectedDest}. You will be eating at ${selectedRest}. You will be traveling using ${selectedTrans}.
     Your entertainment will be ${selectedEnt}`)
}
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

