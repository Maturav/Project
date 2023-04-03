function calculateForce() {
	// Get input values from the user
	var mass = document.getElementById("mass").value;
	var acceleration = document.getElementById("acceleration").value;

	// Calculate the force using Newton's law of motion
	var force = mass * acceleration;

	// Display the result to the user
	document.getElementById("force").value = force;
	document.getElementById("force").readOnly = false;
}

function checkCalculation() {
    // Get input values from the user
    var mass = document.getElementById("mass").value;
    var acceleration = document.getElementById("acceleration").value;
    var force = document.getElementById("force").value;

    // Check if all three values are entered
    if (mass && acceleration && force) {
        // Calculate the force using Newton's law of motion
        var calculatedForce = mass * acceleration;

        // Check if calculated force matches the entered force
        if (calculatedForce == force) {
            alert("The calculation is correct according to Newton's First Law of Motion.");
        } else {
            alert("The calculation is incorrect according to Newton's First Law of Motion. Please check your values and try again.");
        }
    } else {
        alert("Please enter all values before checking the calculation.");
    }
}