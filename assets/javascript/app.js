var Sports = ["Basketball", "Football", "Soccer", "Baseball", "Tennis", "Golf"];

var a;

function loadSportButtons(){
     for (i=0;i<Sports.length;i++){
            a = $('<button>')
            a.text(Sports[i]);
            $(listedSports).append(a);
        }
}

loadSportButtons()

$('#submit').on('click', function(){
    var newSport = document.getElementById('userInput').value;
    Sports = [];
    Sports.push(newSport);
    loadSportButtons();
    console.log(Sports);
});

$("a").click(function(){
    console.log(a[i]);
})

$('button').on('click', function(){
    console.log(a);
});