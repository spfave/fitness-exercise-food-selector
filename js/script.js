//DOM elements
let continueButton = document.getElementById("continue_button")
let userForm = document.querySelector(".userForm")
let wholeContainer = document.querySelector(".wholeContainer")

continueButton.addEventListener("click" , displayUserForm);

//Display Form
function displayUserForm() {
    userForm.setAttribute("style" , "display:block");
    wholeContainer.setAttribute("style", "display: none");
}