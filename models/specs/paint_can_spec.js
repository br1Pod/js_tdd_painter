const assert = require('assert');
const PaintCan = require('../paint_can.js');

describe('Paint Can', function () {
  let paintCan;

  beforeEach(function () {
    paintCan = new PaintCan (10)
  });

  it('should have a number of litres of paint', function () {
    const actual = paintCan.volume
    assert.strictEqual(actual, 10)
  });

  it('should not start empty', function () {
    
    const actual = paintCan.checkIfEmpty();
    assert.strictEqual(actual, "You have paint... get to it")

  });

  xit('should be able to empty itself', function () {
    
  });

});
