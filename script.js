console.log("Hello World");

let state = {
  name: "",
  phone: "",
  city: "",
  zip: 0,
  email: "",
  petName: "",
  species: "",
};

let saveBtn = document.getElementById("saveButton");
let nameInput = document.getElementById("customerName");
let phoneInput = document.getElementById("phone");
let cityInput = document.getElementById("city");
let zipInput = document.getElementById("zipCode");
let emailInput = document.getElementById("email");
let petNameInput = document.getElementById("petName");
let speciesInput = document.getElementById("species");

function saveForm() {
  console.log("save button was clicked");
  let name = nameInput.value;
  state.name = name;
  console.log("Added name " + state.name);

  state.phone = phoneInput.value;
  console.log("Added phone number " + state.phone);
  state.city = cityInput.value;
  console.log("Added city " + state.city);
  state.zip = zipInput.value;
  console.log("Added zip code " + state.zip);
  state.email = emailInput.value;
  console.log("Added email " + state.email);
  state.petName = petNameInput.value;
  console.log("Added pet name " + state.petName);
  state.species = speciesInput.value;
  console.log("Added species " + state.species);


  console.table(state);

  let user = createPetOwner(state.name, state.petName, state.species);
  user.status();
}


function petStatus(nameInput, speciesInput, ageInput) {
  let pet = {
    name: nameInput,
    species: speciesInput,
    age: ageInput,
  status: function() {
    console.log(`Pet name: ${this.name} / Species: ${this.species} / Age: ${this.age}`);
  }
} 
pet.status();
return pet;
} 

saveBtn.addEventListener("click", saveForm);