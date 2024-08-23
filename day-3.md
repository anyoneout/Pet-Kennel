### Assignment: Splitting JavaScript Files and Creating a Pet Management System

#### Objective:
In this assignment, you’ll split your JavaScript code into multiple files and create a simple pet management system. You will create a `createPet` factory function in one file and use it in another to manage pets through a form in an HTML page.

#### Instructions:

1. **Scaffold the Project:**
   - Create three new files: `pets.html`, `pets.js`, and `petCreator.js`.
   - In `pets.html`, include both JavaScript files using `<script>` tags.
     - Make sure to include `petCreator.js` before `pets.js` since `pets.js` depends on it.
   - **Proof of Life:**
     - Add a `console.log("Hello from petCreator.js!")` in `petCreator.js`.
     - Add a `console.log("Hello from pets.js!")` in `pets.js`.
     - Open `pets.html` in your browser and check the console to ensure both messages appear.

2. **Create the Factory Function:**
   - In `petCreator.js`, define a factory function called `createPet`.
   - NOTE: YOU MAY COPY `createPet` over from `day-4` or `day-5` from last week.
   - The `createPet` function should create a pet object with the following properties:
     - `name`, `age`, `species`, `energy`, `happiness`
   - Add methods to the `pet` object:
     - `status` to log the pet's current status.
     - `feed` to increase the pet's `energy`.
     - `play` to increase the pet's `happiness` but decrease `energy`.
   - **Proof of Life:**
     - AFTER COPYING THE FILE, DO A PROOF OF LIFE!
     - In `pets.js`, use `createPet` to create a pet named "Hello".
     - Call the `status` method on "Hello" and log the output to the console.
     - Verify that the factory function works as expected by checking the console output.
     - This will show that you can share code between files. (What happens if you import `pets.js` before `petCreator.js` in your `pets.html` file?)

3. **Create the HTML Form:**
   - In `pets.html`, create a form with the following text inputs:
     - Pet's name, age, species
   - Add a button (type="button") to the form to trigger the JavaScript event.
   - **Proof of Life:**
     - Add an event listener to the button in `pets.js`.
     - Log the values of each form input to the console when the button is clicked.
     - Verify that the form inputs are correctly logged by checking the console.

4. **Create and Manage Pets:**
   - In `pets.js`, modify the event listener to:
     - Use `createPet` to create a pet based on the form input values.
     - Push each pet object to an array called `pets`.
     - The `pets` array should be a property of the global `state` object.
   - **Proof of Life:**
     - After creating each pet, call the `status` method and log the output to the console.
     - Log the entire `pets` array using `console.table` to the console.
     - Verify that the pets are correctly added to the array and their status is logged.

5. **Bonus Task (Optional):**
   - Modify the form to include a `select` element for species instead of a text input.

6. **Version Control with Git:**
   - After each significant change, commit your changes using Git.
   - Make sure to write clear and descriptive commit messages.

7. More bonus ideas
   - This time you created all the pets in one array called `pets`. This is different from when we used kennels to organize the species of pets. Try researching and using the `filter` method to create a new array with just the cats, dogs, or fish.

#### Evaluation Criteria (10 Points):

1. **Project Setup (2 Points)**
   - 1 point: Correct inclusion and ordering of script tags in `pets.html`.
   - 1 point: Proof of life console logs in both JS files.

2. **Factory Function Implementation (2 Points)**
   - 1 point: Correct definition of `createPet` factory function.
   - 1 point: Methods (`status`, `feed`, `play`) are correctly implemented.

3. **Form Handling (2 Points)**
   - 1 point: Correctly logs form input values on button click.
   - 1 point: Correctly creates and logs a pet object.

4. **Array Management (2 Points)**
   - 1 point: Pets are correctly added to the `pets` array.
   - 1 point: Correct use of `console.table` to display the array.

5. **Git Usage (2 Points)**
   - 2 points: Proper use of Git with meaningful commit messages.

**Total: 10 Points**