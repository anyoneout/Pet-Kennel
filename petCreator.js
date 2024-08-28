/* Add a console.log("Hello from petCreator.js!") in petCreator.js. */
console.log("Hello from petCreator.js!");

/* In petCreator.js, define a factory function called createPet. */
function createPet(petNameInput2, speciesInput2, ageInput2) {
  let pet = {
    name: petNameInput2,
    species: speciesInput2,
    age: ageInput2,
    happiness: Math.floor(Math.random() * 51),
    energy: Math.floor(Math.random() * 51),
    playPet: function (randomNumber) {
      for (let i=0; i <= randomNumber; i++){
      this.happiness += 10;
      this.energy -= 15;
      console.log(`You played with ${this.name}! Happiness is now ${this.happiness}, Energy is now ${this.energy}.`);
      }
    },
    feedPet: function() {
      this.happiness += 20;
      this.energy += 20;
      console.log(`${this.name} has been fed and their happiness is now ${this.happiness}!`);
      },
    status: function() {
      console.log(`Pet name: ${this.name} / Species: ${this.species} / Age: ${this.age} / Happiness: ${this.happiness} / Energy: ${this.energy}`);
      },
    toHTML: function() {
      return `
          <div>
              <h3>Pet Name: ${this.name}</h3>
              <p>Species: ${this.species}</p>
              <p>Age: ${this.age}</p>
              <p>Energy: ${this.energy}</p>
              <p>Happiness: ${this.happiness}</p>
            </div>
            `
    }
  }
  console.log("Created a pet...");
  pet.status();
  return pet;

}
