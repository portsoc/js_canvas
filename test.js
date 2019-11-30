"use strict";
QUnit.config.reorder = false;
const { test } = QUnit;
const MANUAL =
`This test cannot be automatically checked
for accuracy.  You must manually review the output and
decide if your solution is complete.`;


test(
  `Observe that if you scroll past these tests there are
  several canvas elements.  These elements are used as
  parameters in the tests that you will write, therefore
  you can see the output of your work by scrolling down.

  Confirm you have read this message by adding a function
  called "ok" which takes no parameters.`,

  (assert) => {

    assert.functionExists( 'ok', [] );

  }
);

test(
  `Create a 'drawLines' function which accepts a single
  parameter 'elem' which is a canvas element.

  It should draw two parallel lines.

  The first line should begin at a point 100 pixels to
  the right of, the origin (i.e. 0,0) and 100 pixels
  below it. It should be 400 pixels long.

  The second line should run parallel to the first line,
  exactly 100 pixels below it. It should start at a
  point 100 pixels from the edge of the canvas and
  be 200 pixels long.`,

  (assert) => {

    assert.functionExists( 'drawLines', ['elem'] ); 
    drawLines(window.canvas4);
    assert.ok(true, MANUAL);

  }
);




test(

  `Create a function 'drawTriangle' that takes
  seven parameters: a canvas element (elem),
  then x1, y1, x2, y2, x3 and y3.

  The function draws a red triangle, filled solid
  with green, between the three points given by
  the parameters.`,

  (assert) => {

    const params = ['elem', 'x1', 'y1', 'x2', 'y2', 'x3', 'y3'];
    assert.functionExists( 'drawTriangle', params );
    drawTriangle(window.canvas2, 10, 10, 10, 100, 100, 10);
    drawTriangle(window.canvas2, 30, 30, 30, 100, 100, 30);
    drawTriangle(window.canvas2, 190, 190, 190, 100, 100, 190);
    assert.ok(true, MANUAL);

  }
);


test(
  `Write a drawGrid function that accepts one
  parameter 'elem' which is a canvas.  It should
  fill this canvas with a grid where each squares
  is 50px wide and 50px high.`,

  (assert) => {

    assert.functionExists( 'drawGrid', ['elem'] );
    drawGrid(window.canvas5);
    assert.ok(true, MANUAL);

  }
);

test(
  `Write a drawCzechFlag function that accepts one
   parameter 'elem' which is a canvas.  It should
   draw the Czech flag.`, (assert) => {

    assert.functionExists( 'drawCzechFlag', ['elem'] );
    drawCzechFlag(window.canvas6);
    assert.ok( true, MANUAL );

  }
);


test(
  `Create a function 'drawSpartacus' that takes one
  parameter 'elem' which is a canvas element. 
  The function will draw the stick figure Spartacus
  on the provided canvas. Spartacus should be
  shown with sword in hand.

  For convenience, 'index.js' contains a function
  'drawStickFigure' that does most of the job.`,

  (assert) => {

    assert.functionExists( 'drawSpartacus', ['elem'] );
    drawSpartacus(window.canvas);
    assert.ok(true, MANUAL);

  }
);



test(
  `Create a function 'drawEyes' that takes one
  parameter 'elem' which is a canvas element. 

  The function will draw a pair of eyes.

  Each eye should be a black-outlined white circle
  with a colourful pupil and black iris.`,

  (assert) => {

    assert.functionExists( 'drawSpartacus', ['elem'] );
    drawEyes(window.canvasEyes);
    assert.ok(true, MANUAL);

  }
);



test(

  `Create a function 'drawSmiley' that takes one
  parameter 'elem' which is a canvas element. 
  The function will draw a happy yellow smiley
  face. Use the eyes you have already created.
  Try to stretch and scale each smiley to the
  available canvas size.`,

  (assert) => {

    assert.functionExists( 'drawSmiley', ["elem"] );
    drawSmiley(window.canvasSmiley1);
    drawSmiley(window.canvasSmiley2);
    drawSmiley(window.canvasSmiley3);
    assert.ok(true, MANUAL);

  }
);



test(

  `Challenge: create a function 'drawEmoji' that takes one
  parameter 'elem' which is a canvas element. The function
  will draw your favourite emoji* using canvas.

  * if you don't have a favourite, invent a new emoji.`,

  (assert) => {

    assert.functionExists("drawEmoji", ["elem"]);
    drawEmoji(window.canvasEmoji);
    assert.ok(true, MANUAL);

  }
);
