(this.webpackJsonpblackjack=this.webpackJsonpblackjack||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);for(var n=a(0),c=a.n(n),r=a(7),l=a.n(r),s=(a(13),a(1)),i=a(2),d=a(4),o=a(3),h=a(5),u=(a(14),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(o.a)(t).call(this))).isClicked=function(){console.log(e.state.clicked),e.setState({clicked:!0})},e.state={clicked:!1},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return!0===this.props.mutable?!1===this.state.clicked?c.a.createElement(n.Fragment,null,c.a.createElement("img",{className:"dib br4 ma2 grow bw3 shadow-5",src:"/blackjackreact/assets/cards/".concat(this.props.id,".png"),alt:"",height:"200",width:"150",onClick:this.isClicked.bind(this)})):c.a.createElement("div",null):c.a.createElement(n.Fragment,null,c.a.createElement("img",{className:"dib br4 ma2 bw3 shadow-5",src:"/blackjackreact/cards/".concat(this.props.id,".png"),alt:"",height:"200",width:"150"}))}}]),t}(c.a.Component)),m=function(e){var t=e.deckOf,a=e.startIndex,n=e.endIndex,r=e.mutable,l=t.map((function(e,a){return c.a.createElement(u,{key:t[a],id:t[a],mutable:r})})).slice(a,n);return c.a.createElement("div",{className:"fl w-70 tc"},l)},b=(a(15),function(e){var t=e.clickChange;return c.a.createElement("div",{className:"fl-30 pa2 dib"},c.a.createElement("div",null,c.a.createElement("img",{className:"dib br4 ma1 bw3 shadow-5",src:"/blackjackreact/assets/cardback.png",alt:"",height:"200",width:"150"})),c.a.createElement("button",{className:"br3 f7 ma1 grow shadow-5",onClick:t},"  ",c.a.createElement("h1",null,"HIT"),"  "))}),k=["C","D","H","S"],f=[],g=0,v=["2","3","4","5","6","7","8","9","10","A","J","Q","K"];g<v.length;g++){var p=v[g],x=!0,E=!1,I=void 0;try{for(var w,j=k[Symbol.iterator]();!(x=(w=j.next()).done);x=!0){var C=w.value;f.push(p+C)}}catch(F){E=!0,I=F}finally{try{x||null==j.return||j.return()}finally{if(E)throw I}}}for(var O=f.length-1;O>0;O--){var y=Math.floor(Math.random()*O),N=f[O];f[O]=f[y],f[y]=N}for(var J=f.length-1;J>0;J--);var S=f,B=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(o.a)(t).call(this))).onClickChange=function(t){e.state.endIndex<e.state.deck.length+2&&(e.setState({startIndex:e.state.endIndex,endIndex:e.state.endIndex+2}),console.log(e.state.startIndex+" to "+e.state.endIndex))},e.state={deck:S,startIndex:3,endIndex:5},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=c.a.createElement(m,{deckOf:this.state.deck,startIndex:0,endIndex:3,mutable:!1});return c.a.createElement("div",null,c.a.createElement("h1",{className:"f1 tc br4 ma4"},"BlackJack"),e,c.a.createElement(m,{deckOf:this.state.deck,startIndex:this.state.startIndex,endIndex:this.state.endIndex,mutable:!0}),c.a.createElement(b,{clickChange:this.onClickChange}))}}]),t}(n.Component);a(16);l.a.render(c.a.createElement(B,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.84ea566e.chunk.js.map