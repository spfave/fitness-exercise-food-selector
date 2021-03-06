// DOM SELECTORS
const muscleGroupsEl = document.querySelector("#muscle-groups");
const btnMuscleExerUp = document.querySelector("#btn-muscle-group-up");
const muscleGrpExerEl = document.querySelector("#muscle-group-exercises");
const exerciseInfoEL = document.querySelector("#exercise-info");

// FUNCTIONS
// Call wger API for list of category exercises
async function getExerciseList(exerciseCategoryID) {
  // Create request url
  let url = `https://wger.de/api/v2/exercise/?category=${exerciseCategoryID}&language=2`;

  // Handle bad response
  const response = await fetch(url);
  if (!response.ok) {
    throw response.json();
  }

  // Return data if good resonse
  const data = await response.json();
  return data.results;
}

// Call wger API for exercise details
async function getExerciseInfo(exerciseID) {
  // Create request url
  let url = `https://wger.de/api/v2/exerciseinfo/${exerciseID}`;

  // Handle bad response
  const response = await fetch(url);
  if (!response.ok) {
    throw response.json();
  }

  // Return data if good response
  const data = await response.json();
  return data;
}

// Create category exercise cards
function renderExerciseCards(categoryExercises) {
  btnMuscleExerUp.setAttribute("style", "display: inline-block");
  muscleGrpExerEl.innerHTML = "";
  exerciseInfoEL.innerHTML = "";

  // Render each category exercise to page
  for (const exercise of categoryExercises) {
    renderExerciseCard(exercise);
  }
}

// Create exercise card and display to screen
function renderExerciseCard(exercise) {
  // Create exercise card content append to muscle group exercises list
  const exerciseCard = document.createElement("a");
  exerciseCard.setAttribute("href", "#");
  exerciseCard.classList.add("card-exer", "list-group-item");
  exerciseCard.dataset.exercise = exercise.id;

  exerciseCard.innerHTML = `
    <p>${exercise.name}</p>
    `;
  muscleGrpExerEl.appendChild(exerciseCard);
}

function renderExerciseInfo(exercise) {
  //
  btnMuscleExerUp.setAttribute("style", "display: none");
  muscleGrpExerEl.innerHTML = "";
  exerciseInfoEL.innerHTML = "";

  // Create exercise info
  const exerciseInfo = document.createElement("div");
  exerciseInfo.classList.add("card");

  exerciseInfo.innerHTML = `
    <div class="card-divider align-center">
      <div class="card-header">
        <h4 id="card-exer-name">${exercise.name}</h4>
      </div>
    </div>
    <div class="card-section">
      <p>${exercise.description}</p>
    </div>
    <div class="card-divider align-center">
      <div class="card-header">
        <button id="btn-exer-comp" class="button" type="button">Completed Exercise</button>
        <button id="btn-exer-cancel" class="button hollow" type="button">Cancel</button>
      </div>
    </div>`;
  exerciseInfoEL.appendChild(exerciseInfo);
  document
    .querySelector("#btn-exer-comp")
    .addEventListener("click", saveExercise);
  document
    .querySelector("#btn-exer-cancel")
    .addEventListener("click", cancelExercise);
}

//
function saveExercise(event) {
  const exerciseName = document.querySelector("#card-exer-name").textContent;

  saveEventDailyLog("exercise", exerciseName);
  updateDayEntry("exercise", exerciseName);
  exerciseInfoEL.innerHTML = "";
}

//
function cancelExercise() {
  exerciseInfoEL.innerHTML = "";
}

// Handler for event listener on muscle group
function handleMuscleGroupExercises(event) {
  event.preventDefault();

  if (event.target.classList.contains("muscle-group")) {
    // Get exercise category ID of clicked muscle group
    // Call wger API to get exercise list for muscle group
    // if data successfully received display to page
    const exerciseCategoryID = event.target.dataset.category;
    getExerciseList(exerciseCategoryID)
      .then((exercises) => {
        renderExerciseCards(exercises);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

// Handler for event listener on exercise
function handleExerciseInfo(event) {
  event.preventDefault();

  // Get exercise ID of clicked exercise
  // Call wger API to get details for exercise
  // if data successfully received display exercise info to page
  const exerciseID = event.target.closest("a").dataset.exercise;
  getExerciseInfo(exerciseID)
    .then((exerciseInfo) => {
      renderExerciseInfo(exerciseInfo);
    })
    .catch((error) => {
      console.log(error);
    });
}

//
function handleDismissExerList(event) {
  if (event.target.classList.contains("clear")) {
    event.stopPropagation();
  }
  btnMuscleExerUp.setAttribute("style", "display: none");
  muscleGrpExerEl.innerHTML = "";
}

// EVENT LISTENERS
muscleGroupsEl.addEventListener("click", handleMuscleGroupExercises);
muscleGrpExerEl.addEventListener("click", handleExerciseInfo);
btnMuscleExerUp.addEventListener("click", handleDismissExerList);

// Testing
