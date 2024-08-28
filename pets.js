/* Add a console.log("Hello from pets.js!") in pets.js. */
console.log("Hello from pets.js!");

/* In pets.js, use createPet to create a pet named "Hello". */
let helloPet = createPet("hello", "greeting", 13);

/* Call the status method on "Hello" and log the output to the console. */
helloPet.status();


/* Add an event listener to the button in pets.js. */



/* - Log the values of each form input to the console when the button is clicked. */

state.pets.catKennel = [];
state.pets.dogKennel = [];
state.pets.fishKennel = [];

let saveButton2 = document.getElementById("saveButton2");
let petNameInput2 = document.getElementById("petName2");
let speciesInput2 = document.getElementById("species2");
let ageInput2 = document.getElementById("age2");

saveButton2.addEventListener("click", logInput);

function logInput() {
  let petName = petNameInput2.value;
  let species = speciesInput2.value;
  let age = ageInput2.value;
  console.log(petName);
  console.log(species);
  console.log(age);
  let pet = createPet(petName, species, age);
  state.pets.push(pet)
  console.table(state.pets);
  console.log(pet.toHTML);
  renderPets();
}

function renderPets() {
  let html = "";
  for (let i = 0; i < state.pets.length; i++ ) {
      html += state.pets[i].toHTML();
      console.log(html);
  }
  let petsHTML = document.getElementById("petOutput");
  petsHTML.innerHTML = html;
}


renderPets();



/* 
saveButton2.addEventListener("click", createPet);
 */




