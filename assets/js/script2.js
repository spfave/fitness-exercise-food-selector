// New_Branch
document.getElementById("btn1").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("the btn has been clicked");
  console.log(document.getElementById("exampleInputEmail1").value);
  getRecipie(document.getElementById("exampleInputEmail1").value);
});

function getRecipie(userChoice) {
  $.ajax({
    url:
      "https://api.edamam.com/search?q=" +
      userChoice +
      "&app_id=8e833b6c&app_key=a35a7f3bd00aa93c46dc3023dcf5866b",
    method: "GET",
  }).then(function (data) {
    console.log(data);

    // const url = data.hits[0].recipe.url;
    // const imageurl = data.hits[0].recipe.image;

    var recipies = [];

    for (let i = 0; i < data.hits.length; i++) {
      const recipeName = data.hits[i].recipe.label;
      const url = data.hits[i].recipe.url;
      const imageurl = data.hits[i].recipe.image;
      console.log("recipie");

      var recipieContent = `
        <div class="card" style="width: 18rem">
          <div class="card-body">
              <h5 id="recipie" class="card-Recipie">${recipeName}</h5>
          </div>

          <a href="${url}" id="url" target="_blank">
            <img id="image" src="${imageurl}" alt="" />
          </a>

          <button id="recipe-${i}" class="save-recipe button"
                  id="center" style="color:white, background-color: #5e5e5e;">
              Save Recipe
          </button>
        </div>`;

      recipies.push(recipieContent);
    }

    document.getElementById("recipeContainer").innerHTML = recipies;

    for (let i = 0; i < data.hits.length; i++) {
      document
        .querySelector(`#recipe-${i}`)
        .addEventListener("click", saveRecipe);
    }
  });
}

function saveRecipe(event) {
  event.stopPropagation();
  const recipeName = event.target.closest(".card").children[0].children[0]
    .textContent;

  saveEventDailyLog("recipe", recipeName);
  updateDayEntry("recipe", recipeName);

  document.getElementById("recipeContainer").innerHTML = "";
}
