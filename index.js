/*
 * This is index.js
 * NB: Start adding your code to the end of the file.
 */
// eslint-disable-next-line no-unused-vars

'use strict';

const TAU = Math.PI * 2;

// draws a stick figure on the canvas
// the stick figure will stand over
// the point X,Y
function drawStickFigure(el, x = 100, y = 150) {
  const c = el.getContext("2d");

  // set our drawing style
  c.lineWidth = 2;
  c.lineCap = "round";
  c.lineJoin = "round"
  c.strokeStyle = "#000";


  // draw a circle on canvas context `c`,
  // centered on x,y, with radius r
  // also fill the circle with white
  // (so it's not transparent)
  function circle(c, x, y, r) {
    c.beginPath();
    c.fillStyle="#fff"
    c.arc(x, y, r, 0, TAU, false);
    c.fill();
    c.stroke();
  }

  // draw a line on canvas context `c`,
  // from point x1,y1 to point x2,y2
  function line(c, x1, y1, x2, y2) {
    c.beginPath();
    c.moveTo(x1,y1);
    c.lineTo(x2,y2);
    c.stroke();
  }

  // helpful functions start here
  function drawLimbs(c, x, y) {
    line(c, x-20, y, x, y-30);
    line(c, x+20, y, x, y-30);
  }

  circle(c, x, y-100, 20)       // head
  line(c, x, y-40, x, y-80)     // body is just a line
  drawLimbs(c, x, y-40)         // arms
  drawLimbs(c, x, y)            // legs
}

// Add your code after here...
