// Methods that modify the array by adding or removing elements

// push()

const countries = ["USA", "Canada", "Mexico"];
const newConuntries = countries.push("Japan", "Argentina");
console.log(countries);
console.log(newConuntries); // returns the new length of the array

//pop

const removedCountry = countries.pop();

console.log(countries);
console.log(removedCountry); // returns the removed element