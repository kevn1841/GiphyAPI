var Sports = ["Basketball", "Football", "Soccer", "Baseball", "Tennis", "Golf"];
function loadSportButtons(){
     for (i=0;i<Sports.length;i++){
            var a = $('<button>')
            a.text(Sports[i]);
            $(listedSports).append(a);
        }
}
loadSportButtons()