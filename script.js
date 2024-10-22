function calculateArea() {
    // Get the radius from the user using the prompt() function
    let radius = parseFloat(prompt("Enter the radius of the circle:"));
    
    // Ensure the input is a positive number
    if (radius > 0) {
        // Calculate the area of the circle using the formula π * r^2
        let area = Math.PI * Math.pow(radius, 2);
        
        // Round the result to two decimal places
        area = area.toFixed(2);
        
        // Display the result to the user in the required format
        alert(`The area of the circle with radius ${radius} is ${area}`);
    } else {
        // Handle cases where the user enters invalid input
        alert("Please enter a positive number for the radius.");
    }
}

calculateArea();
