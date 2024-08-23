### Assignment: Creating a `petOwner` Factory Function and Rendering Content to the DOM with a Button Click

#### Overview
In this assignment, you will create a factory function called `createPetOwner` that generates a `petOwner` object with a `render` method. This method will display the pet owner's details on the webpage when a button is clicked. You'll update the webpage dynamically by setting the `textContent` of specific DOM elements.

Note: This will extend your work on your previous assignment from day 1.

#### Instructions

Update your `index.html` and your `script.js` files from yesterday.

1. **Create the `createPetOwner` Factory Function:**
   - Create a JavaScript file named `petOwnerFactory.js`.
     - proof of life: verify that this works with console.log.
   - Define a factory function called `createPetOwner` that takes parameters like the pet owner's name, pet name, and pet type.
     - proof of life: verify that this works at each step with console.log and Dev Tools.
   - The function should return an object with these properties.
     - proof of life: use console.log and the Console in Dev Tools to test this factory function.

2. **Update the EventListener**
   - update the EventLister function so that it creates a petOwner after the user clicks the button. (HINT: You won't necessarily need a new function, just update the old function from Day 1.)
   - Note: create the petOwner from the data that you stored in global `state`. This will help us decouple the `form` from the data and the display.

3. **Update the HTML File:**
   - Ensure your HTML file has elements with `id`s that match the properties of the `petOwner` object (e.g., `ownerName`, `ownerCity`, `petName`).

4. **Add a `status` Method:**
   - Inside the factory function, add a method called `status`.
   - This will print the data of the petOwner to the console as a string or table.

5. **Add a `render` Method:**
   - Inside the factory function, add a method called `render`.
   - Update the EventListener function so that it calls `render` after the user clicks the button.
     - proof of life: verify the render function is called on button click with console.log and Dev Tools.
   - This method should set the `textContent` of DOM elements with specific `id`s to the corresponding values of the `petOwner` object.
     - For example, the `render` method should set the `textContent` of the element with the id `ownerName` to the value of the `name` property.
     - proof of life: after each HTML element you modify, visually inspect your page with live-server to make sure it works as expected.

6. **Bonus Task (Optional):**
   - Use Bootstrap to style your form
   - Use Bootstrap to style the petOwner output with a card, list, or other Bootstrap component.
   - Hide the form when the petOwner is successfully created.
   - Give an error message if the form is not valid.

#### Learning Objectives:
This assignment will help you practice working with JavaScript factory functions, methods, DOM manipulation, and event handling. By the end, you'll be able to update a webpage dynamically based on user interaction.

### 10-Point Rubric for Pet Owner Factory Function Assignment

1. **Factory Function Creation (2 points)**  
   - 1 point: The `createPetOwner` factory function is defined correctly.
   - 1 point: The function accepts parameters for the owner's name, pet's name, etc...

2. **Object Creation (2 points)**  
   - 1 point: The `createPetOwner` function returns an object with the correct properties (`name`, `petName`, `petType`, etc...).
   - 1 point: The `petOwner` object has the method `status` to print its data to the console.

3. **Render Method Implementation (2 points)**  
   - 1 point: The `render` method is correctly implemented within the object.
   - 1 point: The `render` method updates the text content of the DOM elements with the appropriate `id`s.

4. **Button Event Listener (2 points)**  
   - 1 point: The event listener creates a `petOwner` object.
   - 1 point: The event listener calls the `render` method.

5. **HTML Structure (1 point)**  
   - 1 point: The HTML file includes elements with the correct `id`s that correspond to the object properties.

6. **Bonus Task (1 point)**  
   - 1 point: one or more of the bonus tasks are completed.

**Total: 10 points**