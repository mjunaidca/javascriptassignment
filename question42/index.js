// Continuing From Q 41 Magicians

let magicians = ['john', 'wick', 'michel', 'kelvin', 'wolverine'];
function show_magacians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
};
show_magacians(magicians);

// Make Great Magicians

function great_magacians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(`Great ${(magicians[i])}`);
    }
};
great_magacians(magicians);