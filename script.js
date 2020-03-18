// This is just a example script template

// 1- Write a script that will ask a visitor for a username, then prompt for a password.
let userName = prompt("What is your username?");

// 2- The username will be checking as follows:
// 3 - If the visitor enters "admin" as a username, then prompt for a "Please enter your password."
// 4 - If they submit an empty string for the username, alert “sorry, not valid. Will be Canceled”
// 5 - If it’s any other string, then alert “Sorry, I don’t know you”.
if (userName === "Admin");
    let password = prompt ("Please Enter Your Password");

if (userName === ""){
    alert = ("Sorry, not valid, will be canceled");
    } else if (userName === "null"){
    alert = ("Sorry, I don't know you.")
    }

// 6 - If they really are the admin, their password is checked as follows:
// If password equals “TheMaster”, then alert “Welcome!”, if other password w/another string, alert "Wrong password"

if (password === "TheMaster"){
    alert = ("Welcome!");
} else if (password === "" || password === "null"){
    alert = ("Wrong Password.");
}





    
    