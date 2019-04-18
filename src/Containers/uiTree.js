import React, { Component } from 'react';
import './uiTree.css';
import mockData from '../Mocks/treeData.json';
import LevelOneTree from '../Components/levelOneTreeComponent';

class Tree extends Component {
  render() {
    const treeElements = mockData.map(function(item){
        return <LevelOneTree text={item.parentText}/>
      }) 
    return (
      <div className="tree-container">
        {treeElements}
      </div>
    );
  }
}

export default Tree;
