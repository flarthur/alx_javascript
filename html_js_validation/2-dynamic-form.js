function generateInputFields() {
    var numFields = document.getElementById("dropdown").value;
    var inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ''; // Clear previous fields
    
    // Generate specified number of text input fields
    for (var i = 0; i < numFields; i++) {
      var inputField = document.createElement("input");
      inputField.type = "text";
      inputField.name = "field" + (i + 1); // Unique name attribute for each field
      inputField.placeholder = "Field " + (i + 1);
      inputContainer.appendChild(inputField);
    }
  }
  
  function validateForm() {
    var numFields = document.getElementById("dropdown").value;
    var inputContainer = document.getElementById("inputContainer");
  
    // Check if any dynamically generated fields are empty
    for (var i = 0; i < numFields; i++) {
      var inputField = inputContainer.querySelector('input[name="field' + (i + 1) + '"]');
      if (!inputField.value.trim()) {
        alert("Please fill in all fields");
        return false; // Prevent form submission
      }
    }
  
    return true; // Allow form submission if all fields are filled
  }