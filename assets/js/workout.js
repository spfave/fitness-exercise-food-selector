//
// Exercise categories: https://wger.de/api/v2/exercisecategory/
// Exercise filtered by category: https://wger.de/api/v2/exercise/?category=10&language=2
// Exercise info: https://wger.de/api/v2/exerciseinfo/345/
// Exercise image: https://wger.de/api/v2/exerciseimage/345/thumbnails

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
  // Render each category exercise to page
  for (const exercise of categoryExercises) {
    renderExerciseCard(exercise);
  }
}

// Create exercise card and display to screen
function renderExerciseCard(exercise) {
  const catExerciseEl = document.querySelector("#category-exercises");

  // Create list item and append to list
  const exerciseCard = document.createElement("a");
  exerciseCard.setAttribute("href", "#");
  exerciseCard.classList.add("card-exer");
  exerciseCard.dataset.exercise = exercise.id;
  exerciseCard.innerHTML = `
    <div>
      <h4>${exercise.name}</h4>
    </div>
  `;
  catExerciseEl.appendChild(exerciseCard);
}

// Testing
getExerciseList(11)
  .then((data) => {
    console.log(data);
    renderExerciseCards(data);
  })
  .catch((error) => {
    console.log(error);
  });
