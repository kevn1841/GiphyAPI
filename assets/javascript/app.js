var Sports = ["Basketball", "Football", "Soccer", "Baseball", "Tennis"];

var newSport;


function loadSportButtons(){
     for (i=0;i<Sports.length;i++){
        var a = $('<button>')
        a.text(Sports[i])
        $("#listedSports").append(a);
        a.attr('id', Sports[i]);
        
    }
    newButton();
}

loadSportButtons()

$('#submit').on('click', function(){
    newSport = document.getElementById('userInput').value;
    newSport = newSport.replace( /\s/g, ""); 
    Sports.push(newSport);
    loadSportButtons();
    Sports = [];
    // console.log("You just added "+newSport)
});

function clicking() {
    $("#Basketball").click(function(){
        console.log("You just clicked basketball")

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + "basketball" + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({url: queryURL, method: 'GET'})
     .done(function(response) {
         var results = response.data;
         console.log(results);
})
    })

 };

     $("#Football").click(function(){
        console.log("You just clicked Football")
        
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + "football" + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({url: queryURL, method: 'GET'})
     .done(function(response) {
         var results = response.data;
         console.log(results);
    })
})

      $("#Soccer").click(function(){
        console.log("You just clicked Soccer")
        
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + "soccer" + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({url: queryURL, method: 'GET'})
     .done(function(response) {
         var results = response.data;
         console.log(results);
    })
})

       $("#Baseball").click(function(){
        console.log("You just clicked Baseball")
        
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + "Baseball" + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({url: queryURL, method: 'GET'})
     .done(function(response) {
         var results = response.data;
         console.log(results);
    })
})

        $("#Tennis").click(function(){
        console.log("You just clicked Tennis")
        
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + "tennis" + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({url: queryURL, method: 'GET'})
     .done(function(response) {
         var results = response.data;
         console.log(results);
         document.getElementById("img1").setAttribute("src", "https://media.giphy.com/media/" + "l0MYxeCf4TTPFAfLi" + "/giphy.gif")
    })
})



function newButton(){
    Sports = [];
    var newInput = document.getElementById("userInput").value;
    newInput = newInput.replace( /\s/g, ""); 
    $("#" + newInput).click(function(){
        console.log("You justt clicked " + newInput)
        Sports.push(newInput);
        // console.log(Sports[0]);
        console.log(Sports);
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + Sports[0] + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({url: queryURL, method: 'GET'})
     .done(function(response) {
         var results = response.data;
         console.log(results);
        Sports = [];

    })      
})
}
clicking();
