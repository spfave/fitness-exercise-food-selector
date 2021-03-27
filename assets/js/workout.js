//
// Exercise categories: https://wger.de/api/v2/exercisecategory/
// Exercise filtered by category: https://wger.de/api/v2/exercise/?category=10&language=2
// Exercise info: https://wger.de/api/v2/exerciseinfo/345/
// Exercise image: https://wger.de/api/v2/exerciseimage/345/thumbnails

// DOM SELECTORS
const muscleGroupsEl = document.querySelector("#muscle-groups");
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
  muscleGrpExerEl.innerHTML = "";

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
  exerciseCard.classList.add("card-exer");
  exerciseCard.dataset.exercise = exercise.id;

  exerciseCard.innerHTML = `
    <div>
      <h4>${exercise.name}</h4>
    </div>
  `;
  muscleGrpExerEl.appendChild(exerciseCard);
}

function renderExerciseInfo(exercise) {
  //
  exerciseInfoEL.innerHTML = "";

  // Create exercise info
  const exerciseInfo = document.createElement("div");
  exerciseInfo.classList.add();

  exerciseInfo.innerHTML = `
    <h3>${exercise.name}</h3>
    ${exercise.description}
  `;
  exerciseInfoEL.appendChild(exerciseInfo);
}

// Handler for event listener on muscle group
function handleMuscleGroupExercises(event) {
  event.preventDefault();

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

// EVENT LISTENERS
muscleGroupsEl.addEventListener("click", handleMuscleGroupExercises);
muscleGrpExerEl.addEventListener("click", handleExerciseInfo);

// Testing
// getExerciseList(11)
//   .then((data) => {
//     console.log(data);
//     renderExerciseCards(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
