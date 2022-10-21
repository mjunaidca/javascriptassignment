let name = "JUNaid";
console.log(name.toLowerCase());
console.log(name.toUpperCase());

function titleCase (name) {
    name = name.toLowerCase();
    name = name.split(" ");
    for(let i=0; i<name.length; i++){
        name[i]=name[i].charAt(0).toUpperCase() + name[i].slice(1);
    }
    return name.join(" ");
}
console.log(titleCase(name));