// Question 3
function palindrome(str){
    return str.split('').every((char, i)=> {
        return char === str[str.length-i-1];
    });
}
console.log(palindrome('eve'))

// Question 1
function revStr(str){
    let reversed = '';
    for(let character of str){
        reversed = character + reversed
    }
    return reversed
}
console.log(revStr('doG'))

// Question 2
// function reverse(str){
//     return str.split('').reduce((rev, char) => char + rev, '');
// }
// console.log(reverse())

// class Logger {
//     constructor(x) {
//         x++;
//         console.log(x);
//         new.target(x);
//     }
// }

// const l = new Logger(1);

class FirstLogger {
    constructor() {
        console.log(1);
    }
}

class SecondLogger extends FirstLogger {
    constructor() {
        console.log(2);
    }
}

const l = new SecondLogger();