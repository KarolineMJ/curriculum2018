let bigCircle = document.querySelectorAll(".circleContainer");

bigCircle.forEach(big=>big.onmouseover = function (e) {
    let elm = big;
    let smallCircles = elm.querySelectorAll(".smallJs1");
    let textOverBubble = elm.querySelectorAll(".textOverSmallCircle");
    smallCircles.forEach(bub=>bub.classList.add("moveCircles"));
    textOverBubble.forEach(bub=>bub.style.display="block");
    console.log(smallCircles);
});

bigCircle.forEach(big=>big.onmouseout = function (e) {
    let elm = e.target;
    let smallCircles = elm.querySelectorAll(".smallJs1");
    let textOverBubble = elm.querySelectorAll(".textOverSmallCircle");
   smallCircles.forEach(bub=>bub.classList.remove("moveCircles"));
    textOverBubble.forEach(bub=>bub.style.display="none");
});

