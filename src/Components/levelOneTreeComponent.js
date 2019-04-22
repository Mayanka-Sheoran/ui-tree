import React, { Component } from 'react';
import './levelOneComponent.css';
import LevelTwoTree from './levelTwoComponent';

class LevelOneTree extends Component {
  render() {
    console.log(this.props.childData);
    return (
      <div><div className="container" onClick={this.props.onClick}>
         {this.props.text}
      </div>
    {this.props.showChildren && <LevelTwoTree childData={this.props.childData}/>}</div>
    );
  }
}

export default LevelOneTree;