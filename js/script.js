 /*when hovered circles get a bit bigger

let circleBig = document.querySelector(".circleBigExam");

circleBig.addEventListener("onmouseover", getBig)

function getBig(){
   console.log("im over");
    //circleGetBig()
}


*/
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
        let article = clone.querySelector("article");
        clone.querySelector("h3").textContent = elem.name;
        console.log(elem.description)
        elem.description.forEach(elem => {
            let ptag = document.createElement("p");
            ptag.textContent = elem;
            console.log(ptag);
            const newBreak = document.createElement("br");
            ptag.appendChild(newBreak);
            article.appendChild(ptag);
        });
        section.appendChild(clone);
    });
};



const modal = document.getElementById('myModal');

const bubbles = document.querySelectorAll('.bubbleSVG');

bubbles.forEach(bubble => {
    bubble.addEventListener("click", function (e) {
        fetch("json/modalExams.json").then(result => result.json()).then(data => {
            console.log(e.target.id);
            if(e.target.id == "first"){
                modal.querySelector("h1").textContent = data[0].title;
                //data.forEach(modalData=>{
                    document.querySelectorAll(".modal-content p").forEach(p=>p.remove());
                    data[0].description.forEach(desc=>{
                        let ptag = document.createElement("p");
                        ptag.textContent=desc;
                        let modalDiv = document.querySelector(".modal-content");
                        modalDiv.appendChild(ptag);
                    });
                //})
                //modal.querySelector("p").textContent = data[0].description;

            }
            if(e.target.id == "second"){
                modal.querySelector("h1").textContent = data[1].title;
                    document.querySelectorAll(".modal-content p").forEach(p=>p.remove());
                    document.querySelectorAll(".modal-content h2").forEach(h2=>h2.remove());
                    data[1].description.forEach(desc=>{
                        let ptag = document.createElement("p");
                        ptag.textContent=desc;
                        let modalDiv = document.querySelector(".modal-content");
                        modalDiv.appendChild(ptag);
                    });
                    data[1].bulletpoints.forEach(desc=>{
                        let bullet = document.createElement("p");
                        bullet.classList.add("listetBullet");
                        bullet.textContent=desc;
                        let modalDiv = document.querySelector(".modal-content");
                        modalDiv.appendChild(bullet);

                    });
                    data[1].subtitle.forEach(desc=>{
                        let subtitle = document.createElement("h2");
                        subtitle.textContent=desc;
                        let modalDiv = document.querySelector(".modal-content");
                        modalDiv.appendChild(subtitle);

                    });
               //modal.querySelector("h1").textContent = data[1].title;
                //modal.querySelector("p").textContent = data[1].description;
                //console.log(data[1].bulletpoints)
            }
            if(e.target.id == "third"){
                modal.querySelector("h1").textContent = data[2].title;
                    document.querySelectorAll(".modal-content p").forEach(p=>p.remove());
                    data[2].description.forEach(desc=>{
                        let ptag = document.createElement("p");
                        ptag.textContent=desc;
                        let modalDiv = document.querySelector(".modal-content");
                        modalDiv.appendChild(ptag);

                    });

                //modal.querySelector("h1").textContent = data[2].title;
                //modal.querySelector("p").textContent = data[2].description;
                //console.log(data[1].bulletpoints)
            }
            if(e.target.id == "fourth"){
                modal.querySelector("h1").textContent = data[3].title;
                    document.querySelectorAll(".modal-content p").forEach(p=>p.remove());
                    data[3].description.forEach(desc=>{
                        let ptag = document.createElement("p");
                        ptag.textContent=desc;
                        let modalDiv = document.querySelector(".modal-content");
                        modalDiv.appendChild(ptag);

                    });
                //modal.querySelector("h1").textContent = data[3].title;
                //modal.querySelector("p").textContent = data[3].description;
                //console.log(data[1].bulletpoints)
            }
            modal.style.display = "block";
        });
    });
});


// Get the <span> element that closes the modal
let span = document.querySelector('.close');

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function () {
    modal.style.display = "none";
});


// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

