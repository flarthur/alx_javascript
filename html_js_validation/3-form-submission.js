document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("myForm");
    form.addEventListener("submit", handleFormSubmit);
  });
  
  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var errorDiv = document.getElementById("error");
    var successDiv = document.getElementById("success");
  
    // Validation: Check if name and email fields are filled
    if (name.trim() === "" || email.trim() === "") {
      errorDiv.innerText = "Please fill in all required fields";
      successDiv.innerText = ""; // Clear success message if any
    } else {
      // If all validations pass, display success message
      errorDiv.innerText = ""; // Clear error message if any
      successDiv.innerText = "Form submitted successfully!";
    }
  }