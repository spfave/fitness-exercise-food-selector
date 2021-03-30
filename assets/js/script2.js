// New_Branch
document.getElementById("btn1").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("the btn has been clicked");
  console.log(document.getElementById("exampleInputEmail1").value);
  getRecipie(document.getElementById("exampleInputEmail1").value);
});

function getRecipie(userChoice) {
    $.ajax({
        url: "https://api.edamam.com/search?q="+userChoice+"&app_id=8e833b6c&app_key=a35a7f3bd00aa93c46dc3023dcf5866b" ,
        method: "GET"
    }).then(function (data) {
        console.log(data)

        const url = data.hits[0].recipe.url
        const imageurl = data.hits[0].recipe.image

        //document.getElementById("image").setAttribute("src", imageurl)
        //document.getElementById("url").setAttribute("href", url)
        var recipies = [];

        for (let i = 0; i < data.hits.length; i++) {
            const url = data.hits[i].recipe.url
            const imageurl = data.hits[i].recipe.image
            console.log("recipie");
            
            var recipieContent = `<a href="${url}" id="url">
            <div class="card" style="width: 18rem">
            <div class="card-body">
                <h5 id="recipie" class="card-Recipie"></h5>
            </div>
            <img id="image" src="${imageurl}" alt="" />
            </div>
        </a>`;
            recipies.push(recipieContent)
            // console.log(recipies);
            //document.getElementById("recipeContainer").append(recipieContent)
        
        }

        document.getElementById("recipeContainer").innerHTML = recipies;

    })
