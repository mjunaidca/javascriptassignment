// Question 31- contuned from 30

let users = ['admin', 'user1', 'user2', 'user3', 'user4', 'user5'];
for (let i = 0; i < users.length; i++) {
    if (users[i] === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    } else {
        console.log('Hello ' + users[i] + ', thank you for logging in again.');
    }
}


// Starting Question 31

// No Users: Add an if test to make sure the list of users is not empty.
if (users = []){
    console.log(`Update! there's no user, so we need to find some users!`);
}

// Remove all of the usernames from your array, and make sure the correct message is printed.
for(let i = 0; i < users.length+5; i++){
    users.pop();
}