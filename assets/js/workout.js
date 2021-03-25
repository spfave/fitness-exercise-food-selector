//
// Exercise categories: https://wger.de/api/v2/exercisecategory/
// Exercise filtered by category: https://wger.de/api/v2/exercise/?category=10&language=2
// Exercise info: https://wger.de/api/v2/exerciseinfo/345/
// Exercise image: https://wger.de/api/v2/exerciseimage/345/thumbnails

let workoutURL = "https://wger.de/api/v2/";
workoutURL += `exercisecategory/?category=10`;

async function getExerciseList(exerciseCategoryID) {
  let url = `https://wger.de/api/v2/exercise/?category=${exerciseCategoryID}&language=2`;

  const response = await fetch(url);
  if (!response.ok) {
    throw response.json();
  }

  const data = await response.json();
  return data;
}

async function getExerciseInfo(exerciseID) {
  let url = `https://wger.de/api/v2/exerciseinfo/${exerciseID}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw response.json();
  }

  const data = await response.json();
  return data;
}

// Testing
getExerciseInfo(345)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
