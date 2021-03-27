// New_Branch
document.getElementById("btn1").addEventListener('click', function (e) {
    e.preventDefault();
    // console.log("the btn has been clicked");
    console.log(document.getElementById('exampleInputEmail1').value)
    getRecipie(document.getElementById('exampleInputEmail1').value);
});

function getRecipie(userChoice) {
       $.ajax({
        url: "https://api.edamam.com/search?q="+userChoice+"&app_id=8e833b6c&app_key=a35a7f3bd00aa93c46dc3023dcf5866b" ,
        method: "GET"
    }).then(function (data) {
        console.log(data)
        const url= data.hits[0].recipe.url
        const imageurl = data.hits[0].recipe.image
        document.getElementById("image").setAttribute("src", imageurl)
        document.getElementById("url").setAttribute("href", url)
    })
}

