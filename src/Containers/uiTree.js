import React, { Component } from 'react';
import './uiTree.css';
import LevelOneTree from '../Components/levelOneTreeComponent';

class Tree extends Component {
  state = {
    lessonData : [],
    showChildren: false,
    showChildrenObj: {}
  }
  componentDidMount = () => {
    fetch('http://localhost:3000/api/book/maths/')
    .then((result) => {
      return result.json();
    }).then((jsonResult) => {
      this.setState({lessonData: jsonResult.response})
    })
  }
  fectchChildData = (id, childrenCount)=> () => {
    let key = id;
    let val = !this.state.showChildrenObj[id];
    let showChildrenObj  = {}
    showChildrenObj[key] = val;
    if(!this.state[id] && childrenCount!==0){
      fetch(`http://localhost:3000/api/book/maths/section/${id}`)
      .then((result) => {
        return result.json();
      }).then((jsonResult) => {
        const childDataValues = jsonResult.response;
        this.setState({[id]: childDataValues[Object.keys(childDataValues)[0]], showChildrenObj: showChildrenObj})
      })
    } else if(childrenCount!==0){
      this.setState({showChildrenObj: showChildrenObj});
    } else {
      return;
    }
  }
  render() {
    const treeElements = this.state.lessonData.map(function(item, index){
         const progress = item.childrenCount!==0 ? Math.round((item.completeCount/item.childrenCount)*100): undefined;
        return <LevelOneTree key={index} text={item.title} progress={progress} 
        onClick={this.fectchChildData(item.id, item.childrenCount)} 
        childData={this.state[item.id]|| []} showChildren={this.state.showChildrenObj[item.id]} childrenCount={item.childrenCount}/>
      }, this) 
    return (
      <div className="tree-container">
      <div className='page-heading'>Maths</div>
        {treeElements}
      </div>
    );
  }
}

export default Tree;
