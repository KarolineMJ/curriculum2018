let bigCircle = document.querySelectorAll(".circleContainer");
//let smallCircles = document.querySelectorAll(".smallJs1");
// onmouseover bigCircle add new class to smallCircles
/*bigCircle.addEventListener("mouseover", circlesGetBig);
function circlesGetBig (){
    console.log("yo");
} */
bigCircle.forEach(big=>big.onmouseover = function (e) {
    let elm = e.target;
    console.log(elm);
    let smallCircles = elm.querySelectorAll(".smallJs1");
    smallCircles.forEach(bub=>bub.classList.add("moveCircles"));
    //circleGetBig()
});

bigCircle.forEach(big=>big.onmouseout = function (e) {
    let elm = e.target;
    console.log(elm);
    let smallCircles = elm.querySelectorAll(".smallJs1");
    smallCircles.forEach(bub=>bub.classList.remove("moveCircles"));
    //circleGetBig()
});
/*

function circleGetBig() {
    console.log("yo");

}
*/
