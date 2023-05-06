// LOGIN PAGE VALIDATION

var email = document.getElementById("email-error");
var passWord = document.getElementById("password-error");
var submit = document.getElementById("submit-error");

// EMAIL

function validateEmail(){
    var em = document.getElementById("email").value;
    if (em.trim() === "") {
        email.innerHTML = "Mandatory Field";
        email.style.color = "red";
        return false;
    }

    if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(em)) {

        var tld = em.split('.').pop();
        var validTLDs = ["com", "org", "net", "edu", "gov"]; // Add more TLDs as needed
        
        if (validTLDs.includes(tld)) {
            email.innerHTML = '<i class="fas fa-check-circle"></i>';
            return true;
        
    }

    email.innerHTML = "invalid email";
    return false;
    
    }
}

// PASSWORD

function validatePassword() {

    var pword = document.getElementById("password").value;
  
    // Check if the password field is empty
    if (pword.trim() === "") {
      passWord.innerHTML = "Mandatory Field";
      passWord.style.color = "red";
      return false;
    }
  
    // Check for spaces
    if (pword.includes(" ")) {
      passWord.innerHTML = "no spaces allowed";
      passWord.style.color = "red";
      return false;
    }
  
    // Check if the password is at least 8 characters long
    if (pword.length < 8) {
      passWord.innerHTML = "password must contain minimum 8 characters";
      passWord.style.color = "red";
      return false;
    }

    // Check if the password contains all three of the required parameters (uppercase, lowercase, digits)
    if (/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(pword)) {
      passWord.innerHTML = "Strong password";
      passWord.style.color = "green";
      return true;
    }
    // only uppercase
    if (/^[A-Z]{8,}$/.test(pword)) {
        passWord.innerHTML = "Weak Password: only uppercase not allowed"
        passWord.style.color = "red";
        return false;
    }
    // only lowercase
    if (/^[a-z]{8,}$/.test(pword)) {
        passWord.innerHTML = "Weak Password: only lowercase not allowed"
        passWord.style.color = "red";
        return false;
    }
    // only digits
    if (/^\d{8,}$/.test(pword)) {
        passWord.innerHTML = "Weak Password: only digits not allowed"
        passWord.style.color = "red";
        return false;
    }
    //lowercase missing
    if (/^[A-Z\d]{8,}$/.test(pword)) {
        passWord.innerHTML = "Medium strength: no lowercase letters present"
        passWord.style.color = "orange";
        return false;
    }
    // if uppercase missing
    if (/^[a-z\d]{8,}$/.test(pword)) {
        passWord.innerHTML = "Medium strength: no uppercase letters present"
        passWord.style.color = "orange";
        return false;
    }
    // if digits are missing
    if (/^(?=.*[a-zA-Z]).{8,}$/.test(pword)) {
        passWord.innerHTML = "Medium strength: no digits present"
        passWord.style.color = "orange";
        return false;
    }

    return false;
  }

  // VALIDATE FORM

function validateForm(){
    if (validateEmail() && validatePassword()) {

        alert("Login Successful");
        
    }

    else{
        
        submit.style.display = "block";
        submit.innerHTML = "Please fix error to Login";
        setTimeout(function(){submit.style.display = "none";}, 3000);
        return false;
        
    }
}