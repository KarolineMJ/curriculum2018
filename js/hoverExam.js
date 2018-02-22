let bubblesExam = document.querySelectorAll(".exambubbleFirst");
let bubblesExam2 = document.querySelectorAll(".exambubbleSecond");
let bubblesExam3 = document.querySelectorAll(".exambubbleThird");
let bubblesExam4 = document.querySelectorAll(".exambubbleFourth");

let bubbleExam = document.querySelectorAll(".exambubble");



bubblesExam.forEach(big=>big.onmouseover = function (e) {
    bubblesExam.forEach(bub=>bub.classList.add("biggerBubble"));
});

bubblesExam.forEach(big=>big.onmouseout = function (e) {
    bubblesExam.forEach(bub=>bub.classList.remove("biggerBubble"));
});

bubblesExam2.forEach(big=>big.onmouseover = function (e) {
    bubblesExam2.forEach(bub=>bub.classList.add("biggerBubble"));
});

bubblesExam2.forEach(big=>big.onmouseout = function (e) {
    bubblesExam2.forEach(bub=>bub.classList.remove("biggerBubble"));
});

bubblesExam3.forEach(big=>big.onmouseover = function (e) {
    bubblesExam3.forEach(bub=>bub.classList.add("biggerBubble"));
});

bubblesExam3.forEach(big=>big.onmouseout = function (e) {
    bubblesExam3.forEach(bub=>bub.classList.remove("biggerBubble"));
});

bubblesExam4.forEach(big=>big.onmouseover = function (e) {
    bubblesExam4.forEach(bub=>bub.classList.add("biggerBubble"));
});

bubblesExam4.forEach(big=>big.onmouseout = function (e) {
    bubblesExam4.forEach(bub=>bub.classList.remove("biggerBubble"));
});
