 Assignment: Create a Pet Owner Sign-Up Form

#### Objective:
Create a simple HTML form that collects information about a pet owner and stores the data in a global JavaScript object called `state`. The form will not submit data to a server but will log the `state` object to the console.

NOTE: This time, don't include a input with type of "submit" in your form. We don't want to submit the form. We want to capture the data in JavaScript. So instead of a "submit" input, use a button with type of "button".

#### Instructions:

1. **Create an HTML File:**
   - Create a file named `index.html`.
   - Inside the `<body>`, create a form with fields for the pet owner's name, email, phone, city, zip code, and pet's name.

2. **Create a JavaScript File:**
   - Create a file named `script.js`.
      - proof of life: console.log "hello world" to make sure your script is connected.
   - Define a global object called `state`.
      - proof of life 1: console.log or console.table `state` so you can view your state in the console.
      - proof of life 2: set a breakpoint to examine your `state` object. (It should be empty at this point.)
   - Write a function named `saveForm()` Set an event listener on the button to fire `saveForm` `onclick`
      - proof of life: `console.log` "button clicked!" to make sure your button is hooked up.
   - Write code in your `saveForm()` that captures the form data and saves it into the `state` object.
      - proof of life 1: `console.log` or `console.table` each data input as you write it. For example, check you get the name before moving on to the email.
      - proof of life 2: set a breakpoint after getting the value your input. Check in Dev Tools to make sure your variables are set when you run it.
   - Log the `state` object to the console after the all data is saved.

3. **Bonus Task (Optional):**
   - Add a select element to the form for selecting the pet type (e.g., dog, cat, fish).
   - Modify the `saveForm()` function to include the selected pet type in the `state` object.
   - Declare a factory function for your pet owner with a `status` method to print the pet owner's data to the console. (You may make one for the pet, too!)
   - Use Bootstrap or CSS flex to improve the appearance of your form.

4. **Connect Your HTML and JavaScript:**
   - The `<script>` tag already links your `script.js` file to the `index.html` file.

5. **Test Your Form:**
   - Open `index.html` in a web browser.
   - Fill out the form and click the "Sign Up" button.
   - Check the console to see the contents of the `state` object.
   - Remember to do a "proof of life" for each step of your program. Check that it works before moving on.

#### A note about `state`

The "state" of a program refers to the current condition or status of a program, or component at a specific point in time. This includes the values of all the variables (the data). So, we will put all the global data into one object. We will give the variable that holds it all `state` to indicate it contains the primary data the program needs to operate.

Here is an example what your `state` object would look like after logging it to the console.

```javascript
{
   name: 'Bob',
   phone: '555-555-5555',
   city: 'Nashville',
   zip: 37011,
   email: 'bob@example.com',
   petName: 'Rex'
}
```

#### Submission:
Submit your `index.html` and `script.js` files. Ensure your code is well-commented, explaining each part.

### 10-Point Rubric for Pet Owner Sign-Up Form Assignment

1. **HTML Form Structure (2 points)**
   - 1 point: The form includes all required fields (owner's name, email, phone, city, zip code, pet's name).
   - 1 point: The form includes a button with type "button" instead of a "submit" input.

2. **JavaScript File Creation (2 points)**
   - 1 point: The `script.js` file is correctly linked to `index.html`, and initial proof of life ("hello world") is logged.
   - 1 point: A global `state` object is correctly defined, and its initial state is logged.

3. **Event Listener & Button Setup (2 points)**
   - 1 point: The event listener on the button is properly set up to trigger `saveForm()` on click, with proof of life logged ("button clicked!").
   - 1 point: The `saveForm()` function captures form data and logs each value or uses `console.table` for debugging.

4. **State Object Population (2 points)**
   - 1 point: The `saveForm()` function correctly populates the `state` object with data from all form fields.
   - 1 point: The final state of the `state` object is accurately logged to the console after all data is saved.

5. **Bonus Task - Optional (2 points)**
   - 1 point: A select element for pet type is included in the form and properly integrated into the `state` object.
   - 1 point: A factory function for the `petOwner` with a `status` method is implemented, and basic styling improvements using Bootstrap or CSS are applied.

**Total: 10 points**