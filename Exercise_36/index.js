"use strict";
//36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, message) {
    console.log(`Creating a ${size} T-shirt with the message: "${message}"`);
}
// Calling the function
make_shirt('Medium', 'Spiders are the only web developers who get happy when they get a bug');