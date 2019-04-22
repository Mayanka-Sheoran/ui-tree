import React, { Component } from 'react';
import './levelTwoComponent.css';
import Start from '../progress.jpg';
import Completed from '../completed.png';
import Progress from '../bulletImage.png';

class LevelTwoTree extends Component {
  getIcon = (status) => () => {
    if(status === 'COMPLETE'){
        return Completed
    } else if( status === 'IN_PROGRESS'){
        return Progress
    } else return Start
  }
  render() {
    const children = typeof this.props.childData!=='string' ? this.props.childData.map(function(item, index){
        const iconUrl = this.getIcon(item.status)();
        return <div key={index} className="level-two-container" ><ul>
            <img className="bullet-image" src={iconUrl} alt=''/>
        <li><a href={item.link}>{item.title}</a></li></ul></div>
      }, this) : <div></div>
    return (
      <div className='transition-div'>
         {children}
      </div>
    );
  }
}

export default LevelTwoTree;