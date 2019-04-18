import React, { Component } from 'react';
import './levelOneComponent.css';

class LevelOneTree extends Component {
  render() {
    return (
      <div className="container">
         {this.props.text}
      </div>
    );
  }
}

export default LevelOneTree;