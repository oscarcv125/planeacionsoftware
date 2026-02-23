const myArray = [1, 2, 3, 4, 5];

myArray.push(6);
console.log(myArray);

myArray.pop();
console.log(myArray);

let a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);

[a, b, ...rest] = [30, 40, 50, 60, 70, 100];
console.log(rest);