import React, { Component } from 'react';
import './levelOneComponent.css';
import LevelTwoTree from './levelTwoComponent';

class LevelOneTree extends Component {
  state ={
      showChildren: false
  }  
  show = () => {
      this.setState({showChildren: !this.state.showChildren})
  }
  render() {
    return (
      <div><div className="container" onClick={this.show}>
         {this.props.text}
      </div>
    {this.state.showChildren && <LevelTwoTree childData={this.props.childData}/>}</div>
    );
  }
}

export default LevelOneTree;