

var card = document.getElementById("doctor-1");
var button = document.getElementById("see-1");





var form = document.querySelector("form");
var nextBtn = form.querySelector(".next-btn");
var backBtn = form.querySelector(".back-btn")
var allInput = form.querySelectorAll(".first input");




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

nextBtn.addEventListener = ('click', ()=>{
    allInput.forEach(input =>{
        
        if(input.value != ""){
            form.classList.add('active');
        }
        else{
            form.classList.remove('active');
            alert("empty");
        }
    })
});







