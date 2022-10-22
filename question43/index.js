// Continuing From Q 41 Magicians

let magicians = ['john', 'wick', 'michel', 'kelvin', 'wolverine'];

function show_magacians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
};

// Copying Magicians

let great_magicians = magicians.slice();

// Make Great Magicians
function make_great(great_magicians) {
    for (let i = 0; i < great_magicians.length; i++) {
      console.log(`Great ${(great_magicians[i])}`);
}
};
show_magacians(magicians);
make_great(great_magicians);