(this["webpackJsonpvector-puzzle-game"]=this["webpackJsonpvector-puzzle-game"]||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n.p+"static/media/origin.068bcbaa.png"},function(t,e,n){t.exports=n.p+"static/media/0.b4b28463.png"},function(t,e,n){t.exports=n.p+"static/media/1.1fea833f.png"},function(t,e,n){t.exports=n.p+"static/media/2.2ea2e1c5.png"},function(t,e,n){t.exports=n.p+"static/media/3.c06514a8.png"},function(t,e,n){t.exports=n.p+"static/media/4.83019e3d.png"},function(t,e,n){t.exports=n.p+"static/media/5.5b723bbb.png"},function(t,e,n){t.exports=n.p+"static/media/6.07b242d8.png"},function(t,e,n){t.exports=n.p+"static/media/7.115e2eb2.png"},function(t,e,n){t.exports=n.p+"static/media/8.7ce4002b.png"},function(t,e,n){t.exports=n(28)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(8),c=n.n(i),o=(n(24),n(1)),s=n(2),l=n(4),u=n(3),p=n(5),h=(n(25),n(6)),d=(n(26),n(27),function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this,e={gridArea:this.props.gridRow+"/"+this.props.gridCol+"/"+this.props.gridRow+"/"+this.props.gridCol,height:"100%",width:"100%"};return r.a.createElement("img",{className:"tile",style:e,src:this.props.img,alt:this.props.imageIndex,onClick:function(){return t.props.onClick(t.props.imageIndex)}})}}]),e}(r.a.Component));function f(t,e){for(var n=0;n<t.length;n++)for(var a=0;a<t[n].length;a++)if(t[n][a]===e)return{row:n,col:a};return null}function g(t,e){for(var n=Array(t*e),a=0;a<n.length;a++)n[a]=a;n.sort((function(){return Math.random()-.5}));for(var r=[];n.length;)r.push(n.splice(0,e));return r}var m=n(9),b=n.n(m),x=n(10),v=n.n(x),j=n(11),O=n.n(j),k=n(12),C=n.n(k),w=n(13),I=n.n(w),y=n(14),E=n.n(y),z=n(15),N=n.n(z),T=n(16),H=n.n(T),M=n(17),R=n.n(M),W=n(18),A=n.n(W),J=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).handleClick=function(t){var e=this.state.current;if(void 0!==e&&null!==e){var n=f(e,this.holeIndex),a=f(e,t);if(null!=n&&null!=a&&Math.abs(n.row-a.row)+Math.abs(n.col-a.col)===1){for(var r=[],i=0;i<e.length;i++)r.push(e[i].slice());r[a.row][a.col]=this.holeIndex,r[n.row][n.col]=t,this.setState({current:r}),function(t){for(var e=0;e<t.length;e++)for(var n=t[e].length,a=0;a<n;a++)if(t[e][a]!==e*n+a)return!1;return!0}(r)&&alert("Congratulation!")}}},n.createTiles=function(){for(var t=[],e=this.state.current,n=0;n<e.length;n++)for(var a=0;a<e[n].length;a++)e[n][a]!==this.holeIndex&&t.push(r.a.createElement(d,{key:e[n][a],imageIndex:e[n][a],img:this.tileImages[e[n][a]],maxHeight:this.maxHeight/3,maxWidth:this.maxWidth/3,gridRow:n+1,gridCol:a+1,onClick:this.handleClick}));return t},n.tileImages=[v.a,O.a,C.a,I.a,E.a,N.a,H.a,R.a,A.a],n.holeIndex=0,n.maxHeight=600,n.maxWidth=600,n.state={current:g(3,3)},n.createTiles=n.createTiles.bind(Object(h.a)(n)),n.handleClick=n.handleClick.bind(Object(h.a)(n)),n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"game-board"},this.createTiles(),r.a.createElement("img",{className:"background",src:b.a,alt:"bg"}))}}]),e}(r.a.Component),B=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(J,null))}}]),e}(r.a.Component);c.a.render(r.a.createElement(B,null),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.2e76cb6f.chunk.js.map