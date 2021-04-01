//DOM elements
let continueButton = document.getElementById("continue_button")
let userForm = document.querySelector(".userForm")
let wholeContainer = document.querySelector(".wholeContainer")

//continueButton.addEventListener("click" , displayUserForm);

//Display Form
function displayUserForm() {
    userForm.setAttribute("style" , "display:block");
    wholeContainer.setAttribute("style", "display: none");
}

//Returning User Name
let submitButton = document.getElementById("submit_button")
let welcomeDisplay = document.querySelector(".welcome")

submitButton.addEventListener("click" , displayWelcome);

function displayWelcome() {
    $("#userForm").submit(function(e) {
        e.preventDefault();
    });
    welcomeDisplay.setAttribute("style" , "display: block");
    userForm.setAttribute("style", "display: none");
    
    //window.location.href = "food.html"
}