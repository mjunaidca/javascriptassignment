// Album

function make_album(artist, title,  number_of_track) {
    let album = {
        artist: artist,
        title: title,
        number_of_tracks: number_of_track || 0
    };
    return album;
};

console.log(make_album("Youtube", "Keseriya"));
console.log(make_album("Rock", "Mona Lisa"));
console.log(make_album("J.", "JJ"));


function make_album2(artist, title,  number_of_track) {
    let album = {
        artist: artist,
        title: title,
        number_of_tracks: 10
    };
    return album;
};

console.log(make_album2("Track", "Verified"));