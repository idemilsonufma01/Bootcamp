/*
const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}


function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item *this.value;
    }, thisArg);
}


const number = [1,2];

console.log('this -> maçã', mapComThis(number, maca));
console.log('this -> laranja', mapComThis(number, laranja));

*/

function mapSemThis(arr){
    return arr.map(function(item){
        return item * 2;
    });
}

const number = [2,4,6,8,10];

console.log(mapSemThis(number));

console.log(number);