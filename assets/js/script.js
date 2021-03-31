// DOM elements
let continueButton = document.getElementById("continue_button")
let userForm = document.querySelector(".userForm")
let wholeContainer = document.querySelector(".wholeContainer")
let form = document.getElementById("form")

continueButton.addEventListener("click" , displayUserForm);

// Display Form
function displayUserForm() {
    userForm.setAttribute("style" , "display: none");
    document.getElementById("result").innerHTML = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
}

// Nav bar
let home = document.getElementById("homeNav")
let userSignin = document.getElementById("userNav")
let exercise = document.getElementById("exercise/foodNav")
let history = document.getElementById("historyNav")

home.addEventListener("click" , backtoHome);

// Show home page
function backtoHome() {
    wholeContainer.setAttribute("style" , "display:block");
}

userSignin.addEventListener("click" , backtoUserSignIn);

// Show User sign in
function backtoUserSignIn() {
    userForm.setAttribute("style" , "display:block");
    wholeContainer.setAttribute("style" , "display:none");
}