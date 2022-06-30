const circle = document.getElementById("circle")
const upBtn = document.getElementById("upBtn")
const downBtn = document.getElementById("downBtn")

const rotatevalue = circle.style.transform;
let rotateSum;

upBtn.onclick = function () {
    rotateSum = rotatevalue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotatevalue = rotateSum;

}
downBtn.onclick = function () {
    rotateSum = rotatevalue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotatevalue = rotateSum;

}