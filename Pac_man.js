// img of the Pac_man.
// 1: right/opened mouth. 2: right/closed mouth.
// 3: left/opened mouth. 4: left/closed mouth.
const pacArray = [
  ["./PacMan1.png", "./PacMan2.png"],
  ["./PacMan3.png", "./PacMan4.png"],
];
// Initial position. It'll start at position 0.
var inpo = 0;
// Edge of the screen.
var pageWidth = window.innerWidth;
// Direction of where it moves. 
// 0 will be right to left. 1 will be left to right.
var direction = 0;
// img of the Pac_man.
// 0 will be open and closed mouth facing right.
// 1 will be open and closed mouth facing left.
var focus = 0;

// this function will be called everytime the img is clicked.
// updates the img of Pac-man going left to right.
function Run() {
  let img = document.getElementById("Pac_man");
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, inpo, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    inpo -= 20;
    img.style.left = inpo + "px";
  } else {
    inpo += 20;
    img.style.left = inpo + "px";
  }
}
// this will call function 'Run' every 150ms.
setInterval(Run, 150);

// this function will detect screen edge.
// when Pac_man hits the edge, it will flip and moves to the other direction.
function checkPageBounds(direction, imgWidth, inpo, pageWidth) {
  if (direction == 0 && inpo + imgWidth > pageWidth) direction = 1;
  if (direction == 1 && inpo < 0) direction = 0;

  return direction;
}

module.exports = checkPageBounds;
