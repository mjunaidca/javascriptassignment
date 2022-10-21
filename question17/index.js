let guests = ["Muhammad Tahir Bakshi", "Jaffar Sadiq" ,"Waqas Aslam", "Habib ur Rehman", "Ahmad Shaukat", "Shaukat Ali"];
let message = "would you be avalible for dinner this Sunday? Let's meet at 7:00 PM";
for (i=0; i<guests.length; i++){
    console.log('Mr.' + guests[i] + ", " + message);
}

console.log("Mr. " + guests[2] + " will not come to dinner this Sunday due to their flight schedule");

guests[2] = "Hassaan";
for (i=0; i<guests.length; i++){
    console.log('Mr.' + guests[i] + ", " + message);
}

console.log("I have found a bigger dinner table, so I am inviting more guests");

guests.unshift("Sir Zia");
guests.splice(4,0,"Awais Aslam");
guests.push("Sir Daniyal Nagori");
for (i=0; i<guests.length; i++){
    console.log('Mr.' + guests[i] + ", " + message);
}

// Starting Question 17

console.log("Due to unexpected circumstance new Dinner Table will not arrive on time, so I can invite only two guests");
console.log(guests);

let newMessage = "I am really sorry to inform you that we can't have dinner this Sunday";

console.log("Mr. " + guests.pop() + ", " + newMessage);
console.log("Mr. " + guests.pop() + ", " + newMessage);
console.log("Mr. " + guests.pop() + ", " + newMessage);
console.log("Mr. " + guests.pop() + ", " + newMessage);
console.log("Mr. " + guests.pop() + ", " + newMessage);
console.log("Mr. " + guests.pop() + ", " + newMessage);
console.log("Mr. " + guests.pop() + ", " + newMessage);


console.log("Mr. " + guests[0] + ", " + message);
console.log("Mr. " + guests[0] + ", " + message);

guests.shift();
guests.shift();
