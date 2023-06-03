

var card = document.getElementById("doctor-1");
var button = document.getElementById("see-1");

button.onclick = function(){

    if(card.className=="open"){
        card.className="card mb-3";
        button.innerHTML = "See More";
    }

    else{
        card.className="open";
        button.innerHTML = "See Less";
    }
};