// Question 32

let current_users = ['user1', 'user2', 'user3', 'user4', 'user5'];
let new_users = ['user2', 'user4', 'user5', 'user8', 'user9'];

for (let i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i])) {
        console.log(new_users[i] + ' is already taken');
    } else {
        console.log(new_users[i] + ' is available');
    }
}