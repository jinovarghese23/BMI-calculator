function clearFields() {
    document.getElementById('weight').value = "";
    document.getElementById('height').value = "";
}

function calculateBodyMassIndex() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight > 0 && height > 0) {
        var bmi = weight / ((height / 100) * (height / 100));
        bmi = bmi.toFixed(2); // Round to 2 decimal places

        var result = document.getElementById('result');
        result.innerHTML = `Your BMI is ${bmi}`;

        if (bmi < 18.5) {
            result.innerHTML += ` (Underweight)`;
        } else if (bmi >= 18.5 && bmi < 24.9) {
            result.innerHTML += ` (Normal weight)`;
        } else if (bmi >= 25 && bmi < 29.9) {
            result.innerHTML += ` (Overweight)`;
        } else {
            result.innerHTML += ` (Obesity)`;
        }
    } else {
        alert("Please enter valid values for weight and height.");
    }
}
