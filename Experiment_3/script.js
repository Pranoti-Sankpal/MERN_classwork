function validateForm(){

let name = document.getElementById("name").value;
let age = document.getElementById("age").value;
let aadhaar = document.getElementById("aadhaar").value;
let mobile = document.getElementById("mobile").value;

let error = document.getElementById("error");

// Name validation
if(name === ""){
error.innerText = "Name is required";
return false;
}

// Age validation
if(age < 18){
error.innerText = "You must be 18+ to register";
return false;
}

// Aadhaar validation (12 digits)
if(aadhaar.length != 12){
error.innerText = "Aadhaar must be 12 digits";
return false;
}

// Mobile validation (10 digits)
if(mobile.length != 10){
error.innerText = "Mobile number must be 10 digits";
return false;
}

// If all valid
alert("Registration Successful!");
return true;
}