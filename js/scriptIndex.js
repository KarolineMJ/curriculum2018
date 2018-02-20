let bigCircle = document.querySelector("#BigCircle");
let smallCircles = document.querySelectorAll(".smallJs1");

// onmouseover bigCircle add new class to smallCircles
/*bigCircle.addEventListener("mouseover", circlesGetBig);
function circlesGetBig (){
    console.log("yo");
} */
bigCircle.onmouseover = function () {
    console.log("yo");
    smallCircles.classList.add("moveCircles");
    //circleGetBig()
};
/*
function circleGetBig() {
    console.log("yo");

}
*/
