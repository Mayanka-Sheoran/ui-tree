(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t){t.exports=[{parentText:"Introduction to functions",childElements:[{text:"Linear functions",link:"http://www.google.com"},{text:"Graphs and Equations for Linear Functions",link:"http://www.google.com"},{text:"Finding Functions",link:"https://www.google.com"}]},{parentText:"Equations and Inequalities",childElements:[{text:"Linear functions",link:"http://www.google.com"},{text:"Graphs and Equations for Linear Functions",link:"http://www.google.com"},{text:"Finding Functions",link:"https://www.google.com"}]},{parentText:"Probability and statistics",childElements:[{text:"Linear functions",link:"http://www.google.com"},{text:"Graphs and Equations for Linear Functions",link:"http://www.google.com"},{text:"Finding Functions",link:"https://www.google.com"}]}]},function(t,e,n){t.exports=n.p+"static/media/bulletImage.a3c7d243.png"},function(t,e,n){t.exports=n(21)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(7),o=n.n(c),r=(n(16),n(1)),l=n(2),s=n(4),u=n(3),h=n(5),p=(n(17),n(18),n(8)),m=(n(19),n(20),n(9)),d=n.n(m),w=function(t){function e(){return Object(r.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props.childData.map(function(t,e){return i.a.createElement("div",{key:e,className:"level-two-container"},i.a.createElement("ul",null,i.a.createElement("img",{className:"bullet-image",src:d.a,alt:""}),i.a.createElement("li",null,i.a.createElement("a",{href:t.link},t.text))))});return i.a.createElement("div",{className:"transition-div"},t)}}]),e}(a.Component),f=function(t){function e(){var t,n;Object(r.a)(this,e);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(i)))).state={showChildren:!1},n.show=function(){n.setState({showChildren:!n.state.showChildren})},n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"container",onClick:this.show},this.props.text),this.state.showChildren&&i.a.createElement(w,{childData:this.props.childData}))}}]),e}(a.Component),g=function(t){function e(){return Object(r.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=p.map(function(t,e){return i.a.createElement(f,{key:e,text:t.parentText,childData:t.childElements})});return i.a.createElement("div",{className:"tree-container"},i.a.createElement("div",{className:"page-heading"},"A sample UI Tree"),t)}}]),e}(a.Component),b=function(t){function e(){return Object(r.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(g,null))}}]),e}(a.Component);o.a.render(i.a.createElement(b,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.8dfe1b15.chunk.js.map