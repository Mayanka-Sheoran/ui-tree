import React, { Component } from 'react';
import './levelTwoComponent.css';

class LevelTwoTree extends Component {
  render() {
    const children = this.props.childData.map(function(item, index){
        return <div key={index} className="level-two-container" ><ul>
        <li><a href={item.link} target="_blank">{item.text}</a></li></ul></div>
      }) 
    return (
      <div>
         {children}
      </div>
    );
  }
}

export default LevelTwoTree;