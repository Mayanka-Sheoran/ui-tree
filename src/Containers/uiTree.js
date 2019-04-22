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
  fectchChildData = (id)=> () => {
    if(!this.state[id]){
      fetch(`http://localhost:3000/api/book/maths/section/${id}`)
      .then((result) => {
        return result.json();
      }).then((jsonResult) => {
        const childDataValues = jsonResult.response;
        var key = id;
        var val = !this.state.showChildrenObj[id];
        var showChildrenObj  = {}
        showChildrenObj[key] = val
        this.setState({[id]: childDataValues[Object.keys(childDataValues)[0]], showChildrenObj: showChildrenObj})
      })
    } else {
      var key = id;
      var val = !this.state.showChildrenObj[id];
      var showChildrenObj  = {}
      showChildrenObj[key] = val;
      this.setState({showChildrenObj: showChildrenObj});
    }
  }
  render() {
    const treeElements = this.state.lessonData.map(function(item, index){
        return <LevelOneTree key={index} text={item.title} onClick={this.fectchChildData(item.id)} childData={this.state[item.id]|| []} showChildren={this.state.showChildrenObj[item.id]}/>
      }, this) 
    return (
      <div className="tree-container">
      <div className='page-heading'>A sample UI Tree</div>
        {treeElements}
      </div>
    );
  }
}

export default Tree;
