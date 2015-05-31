'use strict';

var React = require('react');

var Pixel = require('./pixel');
var Unmined = require('./unmined');
var Pos = require('../position.js');

var Canvas = React.createClass({
  render: function() {
    var used = {};
    var unmined = [];
    var pixels = [];
    var self = this;
    this.props.pixels.forEach(function(pixel) {
      var posStr = Pos.posToString(pixel.position);
      used[posStr] = true;
      posStr = 'pixel_' + posStr;
      pixels.push(
        <Pixel client={self.props.client} key={posStr} pixel={pixel} />
      );
      Pos.neighbors(pixel.position).forEach(function(neighbor) {
        unmined.push(neighbor);
      });
    });
    unmined.forEach(function(pos) {
      var posStr = Pos.posToString(pos);
      if (!used[posStr]) {
        used[posStr] = true;
        posStr = 'unmined_' + posStr;
        pixels.push(
          <Unmined client={self.props.client} key={posStr} pos={pos} />
        );
      }
    });

    return (
      <div id="canvas">
        {pixels}
      </div>
    );
  }
});

module.exports = Canvas;
