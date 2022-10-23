// Question 32

let current_users = ['user1', 'user2', 'user3', 'user4', 'user5'];
let new_users = ['User2', 'user4', 'user5', 'user8', 'user9'];
let currentUsers = current_users.map((user) => user.toLowerCase());
let newUsers = new_users.map((user) => user.toLowerCase());
for (let i = 0; i < newUsers.length; i++) {
    if (currentUsers.includes(newUsers[i])) {
        console.log(newUsers[i] + ' is already taken');
    } else {
        console.log(newUsers[i] + ' is available');
    }
}