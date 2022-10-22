// declaring my favorite tourist destinations
let myPlaces = ["Saudia Arabia", "Kashmir", "Switzerland", "Maldives", "Canada"];
console.log(myPlaces);

// Print your array in alphabetical order without modifying the actual list.
let newPlacesSorted = [];
for (let places of myPlaces){ 
    newPlacesSorted.push(places);
}
console.log(newPlacesSorted.sort());

// Show that your array is still in its original order by printing it.
console.log(myPlaces);

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log(newPlacesSorted.reverse());

// Show that your array is still in its original order by printing it again.
console.log(myPlaces);

// Reverse the order of your list. 
console.log(myPlaces.reverse());

// Reverse the order of your list again back to its original order.
console.log(myPlaces.reverse());

// Sort your array so it’s stored in alphabetical order. 
console.log(myPlaces.sort());

// Sort to change your array so it’s stored in reverse alphabetical order. 
console.log(myPlaces.sort().reverse());

