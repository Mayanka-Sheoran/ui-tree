import React, { Component } from 'react';
import './uiTree.css';
import mockData from '../Mocks/treeData.json';
import LevelOneTree from '../Components/levelOneTreeComponent';

class Tree extends Component {
  render() {
    const treeElements = mockData.map(function(item, index){
        return <LevelOneTree key={index} text={item.parentText} childData={item.childElements}/>
      }) 
    return (
      <div className="tree-container">
      <div className='page-heading'>A sample UI Tree</div>
        {treeElements}
      </div>
    );
  }
}

export default Tree;
