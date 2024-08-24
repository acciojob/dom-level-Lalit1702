//your JS code here. If required.
// Select the element with the id 'level'
let element = document.getElementById('level');

// Initialize a counter for the DOM level
let level = 0;

// Loop through the parent nodes until the root element is reached
while (element) {
    level++;
    element = element.parentElement;
}

// Display the DOM level in an alert box
alert("The level of the element is: " + level);
