//01.

console.log(addNumbers (5, 10)); // 15

function addNumbers (num1, num2) { return num1 + num2;
};

//02. 

console.log(multiplyNumbers(3, 4));

'multiplyNumbers' before initialization

const multiplyNumbers = function (num1, num2) {

return num1* num2;

};

//03.
function addNumbers (num1, num2) {

console.log(sum); // undefined

var sum;

sum = num1 + num2;
 return sum;

}

console.log(addNumbers (5, 10)); // 15

//04.
console.log(x); // undefined due to hoisting console.log(y); // throws ReferenceError

console.log(z); // throws ReferenceError

var x = "PW";

let y = "Skills";

const z = "1";

console.log(x); // "PW"

console.log(y); // "Skills" console.log(z); // "1"

//05. 

console.log(x); // throws ReferenceError

let x = "hello";

console.log(x); // "hello" }

