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