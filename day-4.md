### Assignment: Introducing Template Methods for HTML Creation and Rendering

#### Objective:
In this assignment, you'll extend your pet management system by creating a method that generates HTML for each pet and then rendering this HTML to the webpage. You'll also learn how to aggregate HTML from multiple objects into a single string and display it dynamically.

#### Instructions:

1. **Add HTML Creation Method to `petCreator.js`:**
   - In `petCreator.js`, add a method called `html` to the `pet` object.
   - The `html` method should generate a simple HTML structure for the pet, such as:
     ```html
     <div>
       <h3>Pet Name</h3>
       <p>Species: species</p>
       <p>Age: age</p>
       <p>Energy: energy</p>
       <p>Happiness: happiness</p>
     </div>
     ```
   - **Proof of Life:**
     - In `pets.js`, create a pet using `createPet` and call the `html` method.
     - Log the output of the `html` method to the console.
     - Inspect the logged HTML visually to ensure it is correct.

2. **Create `renderPets` Function in `pets.js`:**
   - In `pets.js`, create a function called `renderPets`.
   - This function should:
     - Loop through the `pets` array and call the `html` method on each pet.
     - Aggregate the resulting HTML strings into one larger string.
   - **Proof of Life:**
     - Inside the loop, log the HTML for each pet to the console.
     - After the loop, log the complete HTML string to the console.
     - Call `renderPets` when the "Create Pet" button is clicked.

3. **Render Pets to the Webpage:**
   - In the event listener in `pets.js`, store the result of `renderPets` in a variable called `petsHTML`.
   - Set the `innerHTML` of a DOM element (e.g., a `div` with an `id` of `petsContainer`) to the value of `petsHTML`.
   - This will render your pets to the page.
   - **Proof of Life:**
     - Ensure that when the "Create Pet" button is clicked, the HTML for all pets is rendered in the `petsContainer` element.
     - Log the `petsHTML` variable to the console and visually inspect the webpage to confirm it is displaying correctly.

4. **Version Control with Git:**
   - After each significant change, commit your changes using Git.
   - Write clear and descriptive commit messages that reflect the changes made.

5. **Bonus**
   - Update your `html` function to use more elaborate HTML.
   - Use bootstrap and flex on your forms
   - Make you pet output a Bootstrap Card component as `html`
   - Add an image or icon for each species of pet to display

#### Evaluation Criteria (10 Points):

1. **HTML Creation Method (3 Points)**
   - 1 point: `html` method correctly generates HTML structure for a pet.
   - 1 point: HTML includes all required elements (`div`, `h3`, `p` tags).
   - 1 point: Proof of life logs the HTML to the console.

2. **Render Function Implementation (3 Points)**
   - 1 point: `renderPets` function correctly loops through the `pets` array.
   - 1 point: HTML strings are aggregated into a single string.
   - 1 point: Proof of life logs the aggregated HTML to the console.

3. **Webpage Rendering (3 Points)**
   - 1 point: `petsHTML` variable correctly stores the aggregated HTML.
   - 1 point: `innerHTML` of the `petsContainer` is correctly updated.
   - 1 point: Proof of life visually verifies correct rendering.

4. **Git Usage (1 Point)**
   - 1 point: Proper use of Git with meaningful commit messages.

**Total: 10 Points**