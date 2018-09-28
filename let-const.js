var nameVar = 'Ichie';
var nameVar = 'LakaDaddy'
console.log('nameVar', nameVar)

let nameLet = 'Obinna';
nameLet = 'Ichie';
console.log('nameLet', nameLet)

//VAR based variables are function scope
function getPetName() {
    var petName = 'Ceasar';
    return petName
}
var petName = getPetName();
console.log(petName)

// LET and CONST are same function scope too, and they are Block level scoping,
// not only is bound to functions but they also exist in FOR loop.
let fullName = 'Merchandise Obinna';
//let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName)
}

console.log(firstName)


// ES 5 functions
// const square = function (x){
//     return x * x;
// };

// console.log(square(6))
// ES 6 Arrow functions
const square = (a, b, c) => {
    return a + b + c;
};

console.log(square(5, 5, 2));

const squareArrow = (a, b, c) => a + b + c;

console.log(squareArrow(4, 2, 1))

const getFirstName = (a) => {
    return a.split(' ')[0];
}
console.log(getFirstName('Mike Smith'))

const name = (b) => b.split(' ')[0];

console.log(name('Chijioke Chocho'))

// With ES 6 syntax when using arrow functions, arguments object are not defined.
// That's is no longer bound with arrow function.
const add = (a, b) => {
    return a + b;
};
console.log(add(12, 2));

// this keyword are not defined with defined with ES 6 syntax, that's is no longer
// bound with the arrow function.
const user = {
    name: 'IK',
    cities: ['PH', 'Aba', 'Owerri'],
    printPlacesLived() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city)
        });
    }
};
user.printPlacesLived();

const userName = {
    names: 'Mikky',
    citis: ['Calabar', 'Bayelsa', 'Uyo'],
    printPlaces() {
        return this.citis.map((cityy) => this.names + ' has lived in ' + cityy);
    }
};
console.log(userName.printPlaces());

// Challenge

const multiplier = {
    num: [2, 4, 6],
    multiplyBy: 2,
    multiply() {
        return this.num.map((multi) => multi * this.multiplyBy);
    }
};
console.log(multiplier.multiply());

// function reverse(str){
//     return str.split('').reduce((rev, char) => char + rev, '');
// }
// console.log(reverse('lakaDaddy'))

function revStr(str) {
    if (str === '') return '';
    return revStr(str.substr(1) + str.charAt(0))
}
console.log(revStr('Bernadine'))

function reverseInt(n) {
    const a = n.toString().split('').reverse().join('');
    return parseInt(a) * Math.sign(n);
}
console.log(reverseInt(-15))

function revStr(str) {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed
    }
    return reversed
}
console.log(revStr('Obim'))

// PALINDROME'S METHODS 
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}

console.log(palindrome('ada'))

// METHOD TWO ON PALINDROME
function pal(x) {
    let A = x.split('').reverse().join('');
    return x === A
}
console.log(pal('eve'))

// Given an array, you must increment any duplicate element, until all of its
// elements are unique. In addition the sum of the element must be the minimum 
// possible within the rules

let array = [1, 1, 2, 3, 2, 6];
function getUniqueNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        let sliceArr = arr.slice(0, i);
        let flag = true;
        while (flag) {
            if (sliceArr.includes(arr[i])) {
                    arr[i]++;
            } else {
                flag = false;
            }
            console.log(sliceArr);
        }
        return arr.reduce((sum, a) => sum + a, 0);
    }
    
}
console.log(getUniqueNumber(array));