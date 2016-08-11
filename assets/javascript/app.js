var Sports = ["Basketball", "Football", "Soccer", "Baseball", "Tennis"];

var newSport;

function loadSportButtons(){
     for (i=0;i<Sports.length;i++){
        var a = $('<button>')
        a.text(Sports[i])
        $("#listedSports").append(a);
        a.attr('id', Sports[i]);
        
    }
     clicking();
     Sports = [];
}

loadSportButtons()

$('#submit').on('click', function(){
    newSport = document.getElementById('userInput').value;
    Sports.push(newSport);
    loadSportButtons();
    console.log(Sports);
});

function clicking() {
    $("#Basketball").click(function(){
        console.log("You just clicked basketball")
    })

     $("#Football").click(function(){
        console.log("You just clicked Football")
    })

      $("#Soccer").click(function(){
        console.log("You just clicked Soccer")
    })

       $("#Baseball").click(function(){
        console.log("You just clicked Baseball")
    })

        $("#Tennis").click(function(){
        console.log("You just clicked Tennis")
    })
    newButton();

}
function newButton(){
    var newInput = document.getElementById("userInput").value;
    $("#" + newInput).click(function(){
        console.log("You just clicked " + newInput)
    })
}