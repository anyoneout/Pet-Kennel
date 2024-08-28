### Assignment: Managing State with LocalStorage and Handling Objects with Methods

#### Objective:
In this assignment, you'll continue building your pet management system, now incorporating `localStorage` to persist data across page reloads. You'll learn how to manage state in a separate file, handle serialization and deserialization of objects with methods, and structure your project to maintain clean code.

#### Files to be Used:
- `index.js`
- `pets.html`
- `pets.js`
- `petCreator.js`
- `state.js` (new)

### Instructions:

1. **Setup State Management with `state.js`:**
   - Create a new file called `state.js`.
   - In `state.js`, move the `state` global variable from `script.js` to this file.
   - Ensure `state.js` is imported before `script.js` in `index.js` and before `pets.js` in `pets.html`.

   **Proof of Life:**
   - Add a `console.log("Hello from state.js")` to confirm it's loaded correctly.

2. **Saving Form Data to `localStorage`:**
   - In `script.js`, use `localStorage.setItem` to save the form data from the user when the button is clicked.
   - Store values like `name`, `email`, and `zipcode` from the form into `localStorage`.
   - Example:
     ```javascript
     localStorage.setItem("name", state.name);
     localStorage.setItem("email", state.email);
     localStorage.setItem("zipcode", state.zipcode);
     ```

   **Proof of Life:**
   - After the button is clicked, check the `Application` tab in Chrome DevTools to verify that the data is stored in `localStorage`.
     - Open DevTools (F12 or right-click → Inspect).
     - Go to the `Application` tab → `LocalStorage` → Select your domain to see the stored data.

3. **Loading Data from `localStorage`:**
   - In `state.js`, load the data back into `state` when the page loads.
   - Example:
     ```javascript
     state.name = localStorage.getItem("name") || "";
     state.email = localStorage.getItem("email") || "";
     state.zipcode = localStorage.getItem("zipcode") || "";
     ```

   **Proof of Life:**
   - Log the state variables to the console after loading them to verify that the data is correctly retrieved from `localStorage`.

4. **Managing the `pets` Array:**
   - Move the `pets` array to `state.pets` in `state.js`.
   - Update your code in `pets.js` to reference `state.pets` instead of `state`.

   **Serialization and Deserialization:**
   -  NOTE: You can't store the pet object in javascript. This is becuase it contains functions as well as data. So, we will need to "serialize" the object first to save only the data. When we bring it out of "deep storage" we can "rehydrate" it by calling createPet on its data afresh.
   - Since this can be tricky, the code is given for you. It is your job to make it work in your code. Use the Dev Tools if you get stuck and use `console.log()` frequently to give proof of life.
   - **Serialization**: Create a function in `state.js` called `savePets` that converts the `pets` array to a JSON-compatible format, excluding methods, and saves it to `localStorage`.
     ```javascript
     function serializePet(pet) {
       return {
         name: pet.name,
         age: pet.age,
         species: pet.species
       };
     }

     function savePets() {
       const serializedPets = state.pets.map(serializePet);
       localStorage.setItem("pets", JSON.stringify(serializedPets));
     }
     ```

   - **Deserialization**: In `state.js`, create a function to load the pets from `localStorage` and reattach the methods by using the `createPet` factory function.
     ```javascript
     function loadPets() {
      let petString = localStorage.getItem("pets");
       const savedPets = JSON.parse(petString) || [];
       state.pets = [];
       for(let i=0; i<savedPets.length; =++) {
         state.pets.push(createPet(petData.name, petData.age, petData.species))
       }
     }

     loadPets();
     ```

   **Proof of Life:**
   - After adding or modifying a pet, log the updated `state.pets` array using `console.table` to verify the data is correctly serialized and deserialized.

5. **Updating `pets.html`:**
   - Update the form in `pets.html` to remove the `petName` field since pet data will be managed separately.
   - Ensure the event listener in `pets.js` creates and adds pets to `state.pets` and calls `savePets` to store the updated array in `localStorage`.

6. **Version Control with Git:**
   - After each significant change, commit your changes using Git.
   - Ensure each commit has a clear and descriptive message to document your progress.

### Evaluation Criteria (10 Points):

1. **State Management Setup (2 Points)**
   - 1 point: Proper inclusion and ordering of script tags.
   - 1 point: Proof of life from `state.js`.

2. **Form Data Handling (2 Points)**
   - 1 point: Correctly saves form data to `localStorage`.
   - 1 point: Correctly loads form data from `localStorage`.

3. **Pets Array Management (2 Points)**
   - 1 point: Correct serialization and deserialization of the `pets` array.
   - 1 point: Proper use of `savePets` and `loadPets` functions.

4. **Code Structure and Logic (2 Points)**
   - 1 point: Logical organization of code across files.
   - 1 point: Correct use of functions and methods.

5. **Git Usage (2 Points)**
   - 2 points: Proper use of Git with meaningful commit messages.

**Total: 10 Points**