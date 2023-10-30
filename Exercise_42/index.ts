//42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


// Copy 
function show_magicians(magicians: string[]): void {
    magicians.forEach((magician: string) => {
      console.log(magician);
    });
  }
  
  // Create an array of magician's names
  const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  // Call the show_magicians() function and pass the array
  show_magicians(magicians);
  
  

function makeGreat(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = "the Great " + magicians[i];
    }
  }

  makeGreat(magicians);
  show_magicians(magicians);
  