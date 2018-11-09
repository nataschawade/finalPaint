var board = document.getElementById("board");

var color = "red";
var width = "10px";
var height = "10px";
var borderRadius = "0px"

function mouse(event) {

    board.onmousemove = function (e) {

        var drawing = document.createElement('div');
        board.appendChild(drawing);
        var distance = board.getBoundingClientRect().x;

        drawing.style.backgroundColor = color;
        drawing.style.width = width;
        drawing.style.height = height;
        drawing.style.borderRadius = borderRadius;

        var x = e.clientX - distance;
        var y = e.clientY;
        drawing.style.position = "absolute";
        drawing.style.left = (x - 10) + "px";
        drawing.style.top = (y - 10) + "px";
    }
}

board.addEventListener('mouseup', stop);
function stop() {
    board.onmousemove = null;
}

board.addEventListener('mousedown', mouse);

document.querySelector(".orange").addEventListener('click', function (e) {
    color = "orange";
});

document.querySelector(".blue").addEventListener('click', function (e) {
    color = "blue";
});

document.querySelector(".green").addEventListener('click', function (e) {
    color = "green";
});

document.querySelector(".yellow").addEventListener('click', function (e) {
    color = "yellow";
});

document.querySelector(".pink").addEventListener('click', function (e) {
    color = "pink";
});

document.querySelector(".white").addEventListener('click', function (e) {
    color = "white";
});

document.querySelector(".red").addEventListener('click', function (e) {
    color = "red";
});

var submitColor = document.getElementById("submit");
submitColor.addEventListener('click', colorChange);

function colorChange() {
    color = "#" + document.getElementById('colorSelector').value;
}

var slider = document.querySelector('.font-size');
slider.addEventListener('input', function () {
    var size = slider.value;
    width = size + "px";
    height = size + "px";
});

document.getElementById("circle").addEventListener('click', function (e) {
    borderRadius = 20 + "px";
});
document.getElementById("square").addEventListener('click', function (e) {
    borderRadius = 0 + "px";
});

document.querySelector(".clear").addEventListener('click', function (e) {
    var clear = document.querySelectorAll('#board > div');
    for (var i = 0; i < clear.length; i++) {
        clear[i].remove();
    }
});

var boardObj = [];
document.querySelector(".save").addEventListener('click', function (e) {
    var clear = document.querySelectorAll('#board > div');
    for (var i = 0; i < clear.length; i++) {
        boardObj.push(clear);
    }
    localStorage.setItem('board', boardObj);
    console.log("yay")
});





