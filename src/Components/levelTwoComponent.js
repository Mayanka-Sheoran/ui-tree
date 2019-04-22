import React, { Component } from 'react';
import './levelTwoComponent.css';
import BulletImage from '../bulletImage.png';

class LevelTwoTree extends Component {
  render() {
    const children = typeof this.props.childData!=='string' ? this.props.childData.map(function(item, index){
        return <div key={index} className="level-two-container" ><ul>
            <img className="bullet-image" src={BulletImage} alt=''/>
        <li><a href={item.link}>{item.title}</a></li></ul></div>
      }) : <div></div>
    return (
      <div className='transition-div'>
         {children}
      </div>
    );
  }
}

export default LevelTwoTree;