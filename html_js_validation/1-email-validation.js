function validateForm() {
    var email = document.getElementById("email").value;
  
    // Email validation using regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("error").innerText = "Please enter a valid email address.";
      return false; // Prevent form submission
    }
  
    return true; // Allow form submission if email format is valid
  }