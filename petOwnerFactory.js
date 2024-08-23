console.log("hello world");

function createPetOwner(customerName, petName, species) {
  let owner = {
    name: customerName,
    petName: petName,
    species: species,
    status: function () {
        console.log(`Name: ${this.name}, Pet Name: ${this.petName}, Species: ${this.species}`);
    },
    render: function() {
      let nameOutput = document.getElementById("customerNameOutput");
      nameOutput.textContent = this.name;
      let petNameOutput = document.getElementById("petNameOutput");
      petNameOutput.textContent = this.petName;
      let speciesOutput = document.getElementById("speciesOutput");
      speciesOutput.textContent = this.species;
      
    }
  } 
  return owner;

}

let owner1 = createPetOwner("chris", "tawook", "cat");
console.log(owner1);
owner1.status();
owner1.render();