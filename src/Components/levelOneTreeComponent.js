import React, { Component } from 'react';
import './levelOneComponent.css';
import LevelTwoTree from './levelTwoComponent';

class LevelOneTree extends Component {
  render() {
    return (
      <div><div className="container" onClick={this.props.onClick}>
         <div>{this.props.text} <span className="concepts">{`(${this.props.childrenCount} concepts)`}</span></div>{this.props.progress!== undefined && <span className="progress">{`${this.props.progress} %`}</span>}
      </div>
    {this.props.showChildren && <LevelTwoTree childData={this.props.childData}/>}</div>
    );
  }
}

export default LevelOneTree;