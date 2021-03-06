// DOM elements
let continueButton = document.getElementById("continue_button");
let userForm = document.querySelector(".userForm");
let wholeContainer = document.querySelector(".wholeContainer");
let form = document.getElementById("form");
let welcomeContain = document.querySelector(".welcome");
let foodTable = document.getElementById("foodTable");
let exerciseTable = document.getElementById("exerciseTable");
let historyTable = document.getElementById("historyTable");
continueButton.addEventListener("click", displayUserForm);

// Display Form
function displayUserForm() {
  userForm.setAttribute("style", "display:block");
  wholeContainer.setAttribute("style", "display: none");
  foodTable.setAttribute("style", "display: none");
}

// Returning User Name
let submitButton = document.getElementById("submit_button");
let welcomeDisplay = document.querySelector(".welcome");
submitButton.addEventListener("click", displayWelcome);

// Displays User Welcome and Name
function displayWelcome() {
  $("#userForm").submit(function (e) {
    e.preventDefault();
  });
  welcomeDisplay.setAttribute("style", "display: block");
  userForm.setAttribute("style", "display: none");
  //window.location.href = "food.html"
  userForm.setAttribute("style", "display: none");
  document.getElementById("result").innerHTML =
    document.getElementById("firstName").value +
    " " +
    document.getElementById("lastName").value;
}

// Nav bar
let home = document.getElementById("homeNav");
let userSignin = document.getElementById("userNav");
let exerciseNav = document.getElementById("exerciseNav");
let foodNav = document.getElementById("foodNav");
let historyNav = document.getElementById("historyNav");
let logout = document.getElementById("logout");
let userNav = document.getElementById("userNav");
let homeNav = document.getElementById("homeNav");
home.addEventListener("click", backtoHome);

// Show home page
function backtoHome() {
  wholeContainer.setAttribute("style", "display:block");
  userForm.setAttribute("style", "display: none");
}

userSignin.addEventListener("click", backtoUserSignIn);
// Show User sign in
function backtoUserSignIn() {
  userForm.setAttribute("style", "display:block");
  wholeContainer.setAttribute("style", "display:none");
}

submitButton.addEventListener("click", showhideNav);
//Show Hide Nav
function showhideNav() {
  exerciseNav.setAttribute("style", "display:inline");
  foodNav.setAttribute("style", "display:inline");
  historyNav.setAttribute("style", "display:inline");
  logout.setAttribute("style", "display:inline");
  homeNav.setAttribute("style", "display:none");
  userNav.setAttribute("style", "display:none");
}

logout.addEventListener("click", logouttoHome);
//Log out takes user back to homepage
function logouttoHome() {
  wholeContainer.setAttribute("style", "display: block");
  userForm.setAttribute("style", "display: none");
  welcomeContain.setAttribute("style", "display: none");
  homeNav.setAttribute("style", "display: inline");
  userNav.setAttribute("style", "display: inline");
  exerciseNav.setAttribute("style", "display: none");
  foodNav.setAttribute("style", "display: none");
  historyNav.setAttribute("style", "display: none");
  logout.setAttribute("style", "display: none");
  foodTable.setAttribute("style", "display: none");
  historyTable.setAttribute("style", "display: none");
}

foodNav.addEventListener("click", displayFoodTable);
//Recipe Table
function displayFoodTable() {
  wholeContainer.setAttribute("style", "display: none");
  foodTable.setAttribute("style", "display:block");
  userForm.setAttribute("style", "display: none");
  welcomeContain.setAttribute("style", "display: none");
  homeNav.setAttribute("style", "display: none");
  userNav.setAttribute("style", "display: none");
  exerciseNav.setAttribute("style", "display: inline");
  foodNav.setAttribute("style", "display: inline");
  historyNav.setAttribute("style", "display: inline");
  logout.setAttribute("style", "display: inline");
  historyTable.setAttribute("style", "display: none");
}

exerciseNav.addEventListener("click", displayExercisetable);
//Exercise table
function displayExercisetable() {
  //exerciseTable.setAttribute("style" , "display: block");
  wholeContainer.setAttribute("style", "display: none");
  foodTable.setAttribute("style", "display: none");
  userForm.setAttribute("style", "display: none");
  welcomeContain.setAttribute("style", "display: block");
  homeNav.setAttribute("style", "display: none");
  userNav.setAttribute("style", "display: none");
  exerciseNav.setAttribute("style", "display: inline");
  foodNav.setAttribute("style", "display: inline");
  historyNav.setAttribute("style", "display: inline");
  logout.setAttribute("style", "display: inline");
  historyTable.setAttribute("style", "display: none");
}

historyNav.addEventListener("click", displayHistory);
//History table
function displayHistory() {
  //exerciseTable.setAttribute("style" , "display: block");
  wholeContainer.setAttribute("style", "display: none");
  foodTable.setAttribute("style", "display: none");
  userForm.setAttribute("style", "display: none");
  welcomeContain.setAttribute("style", "display: none");
  homeNav.setAttribute("style", "display: none");
  userNav.setAttribute("style", "display: none");
  exerciseNav.setAttribute("style", "display: inline");
  foodNav.setAttribute("style", "display: inline");
  historyNav.setAttribute("style", "display: inline");
  logout.setAttribute("style", "display: inline");
  historyTable.setAttribute("style", "display: block");
}

//
