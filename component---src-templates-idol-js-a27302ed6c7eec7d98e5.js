webpackJsonp([0xb26169184af3],{121:function(e,t,o){!function(t,o){e.exports=o()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,r=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,a=Object.getOwnPropertyDescriptor,n=Object.getPrototypeOf,c=n&&n(Object);return function s(d,u,i){if("string"!=typeof u){if(c){var f=n(u);f&&f!==c&&s(d,f,i)}var m=r(u);l&&(m=m.concat(l(u)));for(var p=0;p<m.length;++p){var g=m[p];if(!(e[g]||t[g]||i&&i[g])){var v=a(u,g);try{o(d,g,v)}catch(e){}}}return d}return d}})},115:function(e,t){},88:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=o(4),a=r(l),n=o(117);r(n);o(115),t.default=function(e){return a.default.createElement("div",{className:e.position+" relative"},a.default.createElement("a",{onClick:function(){return(0,n.navigateTo)(""+e.path)},className:"bttn  color-"+e.style},e.text))},e.exports=t.default},254:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var l=o(4),a=r(l),n=o(117),c=o(348),s=r(c),d=o(88),u=r(d);t.default=function(e){var t=e.data,o=t.markdownRemark,r=t.allMarkdownRemark.edges,l=t.markdownRemark.frontmatter.title,c=r.map(function(e){return e.node.frontmatter.title}).indexOf(l),d=0,i=0,f=void 0,m=void 0;c===r.length-1?(d=-1,i=c-1):0===c?(d=c+1,i=-1):(d=c+1,i=c-1),f=d===-1?"/":r[d].node.fields.slug,m=i===-1?"/":r[i].node.fields.slug;var p=c+1,g="color-"+p;return console.log(g),a.default.createElement("div",null,a.default.createElement(u.default,{path:m,position:"left",text:"Left",style:c+1}),a.default.createElement("div",{onClick:function(){return(0,n.navigateTo)(f)},className:s.default.card+" "+s.default[g]},a.default.createElement("h1",{className:s.default.fadeIn},o.frontmatter.title),a.default.createElement("div",{dangerouslySetInnerHTML:{__html:o.html}})),a.default.createElement(u.default,{path:f,position:"right",text:"Right",style:c+1}))};t.query="** extracted graphql fragment **"},348:function(e,t){e.exports={fadeIn:"src-templates----idols-module---fadeIn---1x4Uh",card:"src-templates----idols-module---card---2BMXk","color-0":"src-templates----idols-module---color-0---G5dV9","color-1":"src-templates----idols-module---color-1---KcaUN","color-2":"src-templates----idols-module---color-2---3YzOe","color-3":"src-templates----idols-module---color-3---fmb7-","color-4":"src-templates----idols-module---color-4---3Ha5Y","color-5":"src-templates----idols-module---color-5---8Ansc","color-6":"src-templates----idols-module---color-6---26DNO","color-7":"src-templates----idols-module---color-7---1HzvS"}}});
//# sourceMappingURL=component---src-templates-idol-js-a27302ed6c7eec7d98e5.js.map