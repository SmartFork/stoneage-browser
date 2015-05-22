'use strict';

var React = require('react');

var Mining = React.createClass({
  render: function() {
    // TODO: <li><strong>Public Key</strong>: {this.props.mining.publicKey}</li> 
    return (
      <div>
        <h2>Status</h2>
        <ul>
          <li><strong>Mining Target</strong>: {this.props.mining.targetPos.x}, {this.props.mining.targetPos.y}</li>
          <li><strong>Current Difficulty</strong>: {this.props.mining.difficulty}</li>
          <li><strong>Target Color</strong>: {this.props.mining.color}</li>
        </ul>
      </div>
    );
  }
});

module.exports = Mining;
