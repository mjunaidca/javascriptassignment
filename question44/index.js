// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwichMaker() {
    let sandwich = [];
    for (let i = 0; i < arguments.length; i++) {
        sandwich.push(arguments[i]);
    }
    console.log(`Your sandwich will have following items:`);
    console.log(sandwich);

};

sandwichMaker('cheese', 'lettuce', 'tomato', 'mayo', 'mustard');