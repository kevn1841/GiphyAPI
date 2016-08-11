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
    Sports = [];
}

loadSportButtons()

$('#submit').on('click', function(){
    newSport = document.getElementById('userInput').value;
    newSport = newSport.replace( /\s/g, ""); 
    Sports.push(newSport);
    loadSportButtons();
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

 });

     $("#Football").click(function(){
        console.log("You just clicked Football")
        
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + "basketball" + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({url: queryURL, method: 'GET'})
     .done(function(response) {
         var results = response.data;
         console.log(results);
    })
})

      $("#Soccer").click(function(){
        console.log("You just clicked Soccer")
        
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + "basketball" + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({url: queryURL, method: 'GET'})
     .done(function(response) {
         var results = response.data;
         console.log(results);
    })
    })

       $("#Baseball").click(function(){
        console.log("You just clicked Baseball")
        
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + "basketball" + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({url: queryURL, method: 'GET'})
     .done(function(response) {
         var results = response.data;
         console.log(results);
    })
    })

        $("#Tennis").click(function(){
        console.log("You just clicked Tennis")
        
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + "basketball" + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({url: queryURL, method: 'GET'})
     .done(function(response) {
         var results = response.data;
         console.log(results);
    })
    })


}
function newButton(){
    var newInput = document.getElementById("userInput").value;
    newInput = newInput.replace( /\s/g, ""); 
    $("#" + newInput).click(function(){
        console.log("You just clicked " + newInput)
    })
}

clicking();