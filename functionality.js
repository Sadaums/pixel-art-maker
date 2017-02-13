let body = document.getElementsByTagName('body')[0];
let canvas = document.createElement('div');
canvas.className = 'canvas';
body.appendChild(canvas);
// var width = 2;


function createPixelGrid() {
  for (var i = 0; i < 2280; i++) {
    var pixelDiv = document.createElement('div');
    canvas.appendChild(pixelDiv);
    pixelDiv.className = 'pixel';
  }
}
createPixelGrid();

// the pallet
let red = document.createElement('div');
red.className = 'red';
let blue = document.createElement('div');
blue.className = 'blue';
let green = document.createElement('div');
green.className = 'green';
let black = document.createElement('div');
black.className = 'black';
let yellow = document.createElement('div');
yellow.className = 'yellow';
let pink = document.createElement('div');
pink.className = 'pink';
let white = document.createElement('div');
white.className = 'white';
let cyan = document.createElement('div');
cyan.className = 'cyan';
let magenta = document.createElement('div');
magenta.className = 'magenta';
let purple = document.createElement('div');
purple.className = 'purple';
let grey = document.createElement('div');
grey.className = 'grey';
let aquamarine = document.createElement('div');
aquamarine.className = 'aquamarine';
let brown = document.createElement('div');
brown.className = 'brown';
let maroon = document.createElement('div');
maroon.className = 'maroon';
let orange = document.createElement('div');
orange.className = 'orange';
let tan = document.createElement('div');
tan.className = 'tan';
let orangered = document.createElement('div');
orangered.className = 'orangered'
let saddlebrown = document.createElement('div');
saddlebrown.className = 'saddlebrown';

let pallet = document.createElement('div');
pallet.className = 'pallet';
body.appendChild(pallet);

let colorDivs = [blue, green, cyan, magenta, aquamarine, grey, black, white, yellow, brown, maroon, orange, tan, orangered, saddlebrown, red, pink, purple,];

let colorNames = ['blue', 'green', 'cyan', 'magenta', 'aquamarine', 'black', 'grey', 'white', 'yellow', 'brown', 'maroon', 'orange', 'tan','orangered', 'saddlebrown', 'red', 'pink', 'purple'];

for (var i = 0; i < colorDivs.length; i++) {
  var cDiv = colorDivs[i];
  cDiv.className += ' color';
  cDiv.style.backgroundColor = cDiv.classList[0];
  pallet.appendChild(cDiv);
}

var currentColor = 'black';
var held = false;

//eventlisteners!!!//

//painter (sets current color = pallet color event)
pallet.addEventListener('click', function(e) {
  if (e.target.className !== 'pallet') {
    currentColor = e.target.style.backgroundColor;
    console.log(currentColor);
  }
})
//current Color selected
canvas.addEventListener('click', function(e) {
  if (e.target.className !== 'canvas') {
      e.target.style.backgroundColor = currentColor;
      console.log(target.className);
  }
})
//hold
canvas.addEventListener('mouseover', function(e) {
 console.log(e);
 if(held) {
   if (e.target.className !== 'canvas') {
       e.target.style.backgroundColor = currentColor;
    }
 }
})
//...and drag
canvas.addEventListener('mousedown', function(e) {
  held = true
})
//release
canvas.addEventListener('mouseup', function(e) {
  held = false

})
