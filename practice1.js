
const image = document.getElementById("image");
const duration = 6000;
let startTime;

const curves = [
  {
    start: { x: 120, y: 80 },
    control: { x: 380, y: 40 },
    end: { x: 622, y: 222 },
  },
  {start: {x: 622, y: 222}, end: {x: 850, y: 275} },
  {
    start: { x: 850, y: 275 },
    control: { x: 1050, y: 300 },
    end: { x: 1120, y: 434 },
  },
  { start: { x: 1120, y: 434 }, end: { x: 1120, y: 830 } },
  {
    start: { x: 1120, y: 585 },
    control: { x: 1260, y: 590 },
    end: { x: 1350, y: 698 },
  },
  { start: { x: 1350, y: 698 }, end: { x: 1350, y: 830 } }
];

let currentCurveIndex = 0;

function animate(time) {
  if (!startTime) {
    startTime = time;
  }

  const elapsed = time - startTime;

  let t = Math.min(elapsed / duration, 1);

  const curve = curves[currentCurveIndex];

  var x, y;
  if (curve.control) {
    x =
      Math.pow(1 - t, 2) * curve.start.x +
      (1 - t) * t * 2 * curve.control.x +
      Math.pow(t, 2) * curve.end.x;

    y =
      Math.pow(1 - t, 2) * curve.start.y +
      (1 - t) * t * 2 * curve.control.y +
      Math.pow(t, 2) * curve.end.y;
  } else {
    x = (1 - t) * curve.start.x + t * curve.end.x;
    y = (1 - t) * curve.start.y + t * curve.end.y;
  }


  image.style.left = `${x}px`;
  image.style.top = `${y}px`;

  if(t>=1){
    currentCurveIndex++; 

    if(currentCurveIndex >= curves.length){
      currentCurveIndex = 0; 
    }
    startTime = null; 
  }
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);







