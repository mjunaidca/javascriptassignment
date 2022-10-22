function mycar(manufacturer, model, ...arguments){
    return{
        manufacturer : manufacturer,
        model : model,
        arguments : arguments
    }
};
console.log(mycar('Mustung', '2012'));
console.log(mycar('Ferrari', '2017', 'green', '2 doors'));
console.log(mycar('Ford', '1987', 'red', 'automatic', '4 doors'));