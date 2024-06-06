let person = "DJ Holt";

//
// ['D', 'J', ' ', 'H'.....]
let personArray = person.split(" ");
console.log(personArray);

// joining
let newPerson = personArray.join("-");
console.log(newPerson);

// slicing
let dj_without_t = person.slice(0, -1);
console.log(dj_without_t);
