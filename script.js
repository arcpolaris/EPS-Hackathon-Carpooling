let progressElement = document.getElementById("progress");
console.log(progressElement);

function setPercent(x){
    progressElement.setAttribute("y2", 50 - x * 50);
}
function randomPercent(){
    setPercent(Math.min(Math.random(), 0.8));
}
window.setPercent = setPercent;
window.randomPercent = randomPercent;