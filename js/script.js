"use strict"
const template = document.querySelector('template').content;

fetch("json/examInfo.json").then(result => result.json()).then(data => showExam(data));

fetch("json/otherRulesInfo.json").then(result => result.json()).then(data => showInfo(data));


function showExam(data) {
    data.forEach(elem => {
        const section = document.querySelector('.examInfo');
        const clone = template.cloneNode(true);
        clone.querySelector("h3").textContent = elem.name;
        clone.querySelector("p").textContent = elem.description;
        section.appendChild(clone);
    });
};

function showInfo(data) {
    data.forEach(elem => {
        const section = document.querySelector('.rules');
        const clone = template.cloneNode(true);
        clone.querySelector("h3").textContent = elem.name;
        clone.querySelector("p").textContent = elem.description;
        section.appendChild(clone);
    });
};


const modal = document.getElementById('myModal');

const bubbles = document.querySelectorAll('.bubbleSVG');

bubbles.forEach(bubble => {
    bubble.addEventListener("click", function () {
        modal.style.display = "block";
        modal.querySelector("h1").textContent = "Exam";
    });
});

// Get the <span> element that closes the modal
let span = document.querySelector('.close');

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function (){
    modal.style.display = "none";
});


// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});


/*bubble.addEventListener("click", function(){
    modal.style.display = "block";
    modal.querySelector("h1").textContent="Exam";
});*/
