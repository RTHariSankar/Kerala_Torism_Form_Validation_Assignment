// SIGNUP PAGE VALIDATION

var firstName = document.getElementById("first-name-error");
var lastName = document.getElementById("last-name-error");
var number = document.getElementById("number-error");
var email = document.getElementById("email-error");
var passWord = document.getElementById("password-error");
var confirmPassword = document.getElementById("confirm-password-error");
var submit = document.getElementById("submit-error");

// FIRST NAME

function validateFName(){
    
    var fname = document.getElementById("firstName").value;
    if (fname.trim() === '') {
        firstName.innerHTML = "Mandatory Field";
        firstName.style.color = "red" ;
        return false;
        
    }
    if (!fname.match(/^[aA-Za-z]*$/)) {
        firstName.innerHTML = "please use only letters";
        return false;
    }
    firstName.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

// LAST NAME

function validateLName(){
    
    var lname = document.getElementById("lastName").value;
    if (lname.trim() === '') {
        lastName.innerHTML = "Mandatory Field";
        lastName.style.color = "red" ;
        return false;
        
    }
    if (!lname.match(/^[aA-Za-z]*$/)) {
        lastName.innerHTML = "please use only letters";
        return false;
    }
    lastName.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

// PHONE NUMBER

function validateNumber(){

    var num = document.getElementById("number").value;
    
    if (num.trim() === '') {
        number.innerHTML = "Mandatory Field";
        number.style.color = "red" ;
        return false;
        
    }

    if ((/^(?:\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})$/).test(num)) {

        number.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    } else {
        number.innerHTML = "please enter a valid phone number";
        return false;

    }
}

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

  
//   CONFIRM PASSWORD

function validateConfirmPassword(){

    var cpword = document.getElementById("confirmPassword").value;
    var pword = document.getElementById("password").value;

    if (cpword.trim() === "") {

        confirmPassword.innerHTML = "Mandatory Field";
        confirmPassword.style.color = "red";
        return false;
      }
    
    else{

        if (pword !== cpword) {

            confirmPassword.innerHTML = "Enter the same password as above";
            return false
            
        } else {
    
            confirmPassword.innerHTML = '<i class="fas fa-check-circle"></i>';
            return true;
        }
    }
    


}

// VALIDATE FORM

function validateForm(){
    if (validateFName() && validateLName() && validateNumber() && 
        validateEmail() && validatePassword() && validateConfirmPassword()) {

        alert("Signup Successful");
        
    }

    else{
        
        submit.style.display = "block";
        submit.innerHTML = "Please fix error to Sign up";
        setTimeout(function(){submit.style.display = "none";}, 3000);
        return false;
        
    }
}