//23: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. 

let river: string = 'indus';

console.log("Is river == 'indus'? I predict true.");
console.log(river == 'indus');

console.log("Is river == 'satluj'? I predict false.");
console.log(river == 'satluj');

console.log("Is river != 'ford'? I predict true.");
console.log(river != 'ford');

console.log("Is river != 'indus'? I predict false.");
console.log(river != 'indus');

console.log("Is river === 'indus'? I predict true.");
console.log(river === 'indus');

console.log("Is river === 'Indus'? I predict false.");
console.log(river === 'Indus');

console.log("Is river !== 'satluj'? I predict true.");
console.log(river !== 'satluj');

console.log("Is river !== 'indus'? I predict false.");
console.log(river !== 'indus');

console.log("Is river.toLowerCase() === 'indus'? I predict true.");
console.log(river.toLowerCase() === 'indus');

console.log("Is river.length > 5? I predict false.");
console.log(river.length > 5);