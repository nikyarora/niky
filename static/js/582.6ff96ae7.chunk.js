"use strict";(globalThis.webpackChunknikhar=globalThis.webpackChunknikhar||[]).push([[582],{582:(t,e,o)=>{o.r(e),o.d(e,{default:()=>U});var n=o(791);function i(t){let{width:e,height:o}=t;return e/o}function r(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const o=10**e;return Math.round((t+Number.EPSILON)*o)/o}class a{constructor(t){this.comparator=t,this.heap=[],this.n=0}greater(t,e){return this.comparator(this.heap[t],this.heap[e])<0}swap(t,e){const o=this.heap[t];this.heap[t]=this.heap[e],this.heap[e]=o}swim(t){let e=t,o=Math.floor(e/2);for(;e>1&&this.greater(o,e);)this.swap(o,e),e=o,o=Math.floor(e/2)}sink(t){let e=t,o=2*e;for(;o<=this.n&&(o<this.n&&this.greater(o,o+1)&&(o+=1),this.greater(e,o));)this.swap(e,o),e=o,o=2*e}push(t){this.n+=1,this.heap[this.n]=t,this.swim(this.n)}pop(){if(0===this.n)return;this.swap(1,this.n),this.n-=1;const t=this.heap.pop();return this.sink(1),t}size(){return this.n}}function s(t,e,o){const n=function(t,e,o){const n=new Map,i=new Set,r=new Map;r.set(e,0);const s=new a((l=t=>t.weight,(t,e)=>l(e)-l(t)));var l;for(s.push({id:e,weight:0});s.size()>0;){const{id:e,weight:o}=s.pop();if(!i.has(e)){const a=t(e);i.add(e),a.forEach(((t,i)=>{const a=o+t,l=n.get(i),c=r.get(i);(void 0===c||c>a&&(c/a>1.005||void 0!==l&&l<e))&&(r.set(i,a),s.push({id:i,weight:a}),n.set(i,e))}))}}return r.has(o)?n:void 0}(t,e,o);return n?function(t,e){const o=[];for(let n=e;void 0!==n;n=t.get(n))o.push(n);return o.reverse()}(n,o):void 0}function l(t,e,o,n){return(e-(t.length-1)*o-2*n*t.length)/t.reduce(((t,e)=>t+i(e)),0)}function c(t,e,o,n,i,r,a){const s=t.slice(e,o),c=l(s,n,r,a);return c>0?(c-i)**2*s.length:void 0}function h(t){let{photos:e,layoutOptions:o}=t;const{spacing:n,padding:a,containerWidth:h,targetRowHeight:p,rowConstraints:g}=o,d=function(t){let{photos:e,targetRowHeight:o,containerWidth:n}=t;return r(n/o/e.reduce(((t,e)=>Math.min(i(e),t)),Number.MAX_VALUE))+2}({photos:e,containerWidth:h,targetRowHeight:p}),u=function(t){let{photos:e,layoutOptions:o,targetRowHeight:n,limitNodeSearch:i,rowConstraints:r}=t;return t=>{var a,s;const{containerWidth:l,spacing:h,padding:p}=o,g=new Map;g.set(t,0);const d=null!=(a=null==r?void 0:r.minPhotos)?a:1,u=Math.min(i,null!=(s=null==r?void 0:r.maxPhotos)?s:1/0);for(let o=t+d;o<e.length+1&&!(o-t>u);o+=1){const i=c(e,t,o,l,n,h,p);if(void 0===i)break;g.set(o,i)}return g}}({photos:e,layoutOptions:o,targetRowHeight:p,limitNodeSearch:d,rowConstraints:g}),m=s(u,0,e.length);if(void 0===m)return;const y=[];for(let r=1;r<m.length;r+=1){const t=e.map(((t,e)=>({photo:t,index:e}))).slice(m[r-1],m[r]),o=l(t.map((t=>{let{photo:e}=t;return e})),h,n,a);y.push(t.map(((e,n)=>{let{photo:r,index:a}=e;return{photo:r,layout:{height:o,width:o*i(r),index:a,photoIndex:n,photosCount:t.length}}})))}return y}function p(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return[...e].filter((t=>Boolean(t))).join(" ")}function g(t,e,o){let{width:n,photosCount:i}=e,{spacing:a,padding:s,containerWidth:l}=o;const c=a*(i-1)+2*s*i;return`calc((${t} - ${c}px) / ${r((l-c)/n,5)})`}function d(t,e){return"rows"!==e.layout?`calc(100% - ${2*e.padding}px)`:g("100%",t,e)}function u(t,e,o){var n,i;return g(null!=(i=null==(n=t.match(/^\s*calc\((.*)\)\s*$/))?void 0:n[1])?i:t,e,o)}function m(t,e,o){let n,i;const r=t.srcSet||t.images;return r&&r.length>0&&(n=r.concat(r.find((e=>{let{width:o}=e;return o===t.width}))?[]:[{src:t.src,width:t.width,height:t.height}]).sort(((t,e)=>t.width-e.width)).map((t=>`${t.src} ${t.width}w`)).join(", ")),o.sizes?i=(o.sizes.sizes||[]).map((t=>{let{viewport:n,size:i}=t;return`${n} ${u(i,e,o)}`})).concat(u(o.sizes.size,e,o)).join(", "):n&&(i=`${Math.ceil(e.width/o.containerWidth*100)}vw`),{srcSet:n,sizes:i}}function y(t){var e,o;const{photo:i,layout:r,layoutOptions:a,imageProps:{style:s,className:l,...c}={},renderPhoto:h}=t,{onClick:g}=a,u={display:"block",boxSizing:"content-box",width:d(r,a),height:"auto",aspectRatio:`${i.width} / ${i.height}`,...a.padding?{padding:`${a.padding}px`}:null,...("columns"===a.layout||"masonry"===a.layout)&&r.photoIndex<r.photosCount-1?{marginBottom:`${a.spacing}px`}:null,...g?{cursor:"pointer"}:null,...s},y=g?t=>{g({event:t,photo:i,index:r.index})}:void 0,w={src:i.src,alt:null!=(e=i.alt)?e:"",title:i.title,onClick:y,style:u,className:p("react-photo-album--photo",l),loading:"lazy",decoding:"async",...m(i,r,a),...c},f=t=>{const{src:e,alt:o,srcSet:i,sizes:r,style:a,...s}=w;return n.createElement("img",{alt:o,...i?{srcSet:i,sizes:r}:null,src:e,style:(null==t?void 0:t.wrapped)?{display:"block",width:"100%",height:"100%"}:a,...s})},v=(t=>{let{display:e,boxSizing:o,width:n,aspectRatio:i,padding:r,marginBottom:a,cursor:s}=t;return{display:e,boxSizing:o,width:n,aspectRatio:i,padding:r,marginBottom:a,cursor:s}})(u);return n.createElement(n.Fragment,null,null!=(o=null==h?void 0:h({photo:i,layout:r,layoutOptions:a,imageProps:w,renderDefaultPhoto:f,wrapperStyle:v}))?o:f())}function w(t){let{rowContainerProps:e,children:o}=t;return n.createElement("div",{...e},o)}function f(t){const{layoutOptions:e,rowIndex:o,rowsCount:i,renderRowContainer:r,rowContainerProps:{style:a,className:s,...l}={},children:c}=t,h={className:p("react-photo-album--row",s),style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"flex-start",justifyContent:"space-between",...o<i-1?{marginBottom:`${e.spacing}px`}:null,...a},...l};return n.createElement(n.Fragment,null,(null!=r?r:w)({layoutOptions:e,rowIndex:o,rowsCount:i,rowContainerProps:h,children:c}))}function v(t){const{photos:e,layoutOptions:o,renderPhoto:i,renderRowContainer:r,componentsProps:{imageProps:a,rowContainerProps:s}}=t,l=h({photos:e,layoutOptions:o});return l?n.createElement(n.Fragment,null,l.map(((t,e)=>n.createElement(f,{key:`row-${e}`,layoutOptions:o,rowIndex:e,rowsCount:l.length,renderRowContainer:r,rowContainerProps:s},t.map((t=>{let{photo:e,layout:r}=t;return n.createElement(y,{key:e.key||e.src,photo:e,layout:r,layoutOptions:o,renderPhoto:i,imageProps:a})})))))):null}function P(t,e,o,n){return function(t,e,o){const n=[o];for(let i=o,r=e;r>0;r-=1)i=t.get(i)[r].node,n.push(i);return n.reverse()}(function(t,e,o,n){const i=new Map,r=new Set;r.add(o);for(let a=0;a<e;a+=1){const o=[...r.keys()];r.clear(),o.forEach((o=>{const s=a>0?i.get(o)[a].weight:0;t(o).forEach((t=>{let{neighbor:l,weight:c}=t,h=i.get(l);h||(h=[],i.set(l,h));const p=s+c,g=h[a+1];(!g||g.weight>p&&(g.weight/p>1.0001||o<g.node))&&(h[a+1]={node:o,weight:p}),a<e-1&&l!==n&&r.add(l)}))}))}return i}(t,e,o,n),e,n)}function C(t){let{path:e,photos:o,containerWidth:n,columnsGaps:r,columnsRatios:a,spacing:s,padding:l}=t;const c=[],h=a.reduce(((t,e)=>t+e),0);for(let p=0;p<e.length-1;p+=1){const t=o.map(((t,e)=>({photo:t,index:e}))).slice(e[p],e[p+1]),g=a.reduce(((t,e,o)=>t+(r[p]-r[o])*e),0),d=(n-(e.length-2)*s-2*(e.length-1)*l-g)*a[p]/h;c.push(t.map(((e,o)=>{let{photo:n,index:r}=e;return{photo:n,layout:{width:d,height:d/i(n),index:r,photoIndex:o,photosCount:t.length}}})))}return c}function x(t){let{photos:e,layoutOptions:o,targetColumnWidth:n}=t;const{columns:r,spacing:a,padding:s,containerWidth:l}=o,c=[],h=[];if(e.length<=r){const t=e.length>0?e.reduce(((t,e)=>t+i(e)),0)/e.length:1;for(let o=0;o<r;o+=1)c[o]=2*s,h[o]=o<e.length?i(e[o]):t;return{columnsGaps:c,columnsRatios:h,columnsModel:C({path:Array.from({length:r+1}).map(((t,o)=>Math.min(o,e.length))),photos:e,columnsRatios:h,columnsGaps:c,containerWidth:l,spacing:a,padding:s})}}const p=(e.reduce(((t,e)=>t+n/i(e)),0)+a*(e.length-r)+2*s*e.length)/r,g=function(t){let{photos:e,spacing:o,padding:n,targetColumnWidth:r,targetColumnHeight:a}=t;return t=>{const s=[],l=1.5*a;let c=r/i(e[t])+2*n;for(let h=t+1;h<e.length+1&&(s.push({neighbor:h,weight:(a-c)**2}),!(c>l||h===e.length));h+=1)c+=r/i(e[h])+o+2*n;return s}}({photos:e,targetColumnWidth:n,targetColumnHeight:p,spacing:a,padding:s}),d=P(g,r,0,e.length);for(let u=0;u<d.length-1;u+=1){const t=e.slice(d[u],d[u+1]);c[u]=a*(t.length-1)+2*s*t.length,h[u]=1/t.reduce(((t,e)=>t+1/i(e)),0)}return{columnsGaps:c,columnsRatios:h,columnsModel:C({path:d,photos:e,columnsRatios:h,columnsGaps:c,containerWidth:l,spacing:a,padding:s})}}function j(t){const{photos:e,layoutOptions:o}=t,{columns:n,spacing:i,padding:r,containerWidth:a}=o,s=(a-i*(n-1)-2*r*n)/n,{columnsGaps:l,columnsRatios:c,columnsModel:h}=x({photos:e,layoutOptions:o,targetColumnWidth:s});return h.findIndex((t=>t.findIndex((t=>{let{layout:{width:e,height:o}}=t;return e<0||o<0}))>=0))>=0?n>1?j({photos:e,layoutOptions:{...o,columns:n-1}}):void 0:{columnsModel:h,columnsGaps:l,columnsRatios:c}}function G(t){let{photos:e,layoutOptions:o}=t;return j({photos:e,layoutOptions:o})}function k(t){let{columnContainerProps:e,children:o}=t;return n.createElement("div",{...e},o)}function b(t){const{layoutOptions:e,columnIndex:o,columnsCount:n,columnsGaps:i,columnsRatios:a}=t,{layout:s,spacing:l,padding:c}=e;if("masonry"===s||!i||!a)return`calc((100% - ${l*(n-1)}px) / ${n})`;const h=a.reduce(((t,e)=>t+e),0);return`calc((100% - ${r((n-1)*l+2*n*c+a.reduce(((t,e,n)=>t+(i[o]-i[n])*e),0),3)}px) * ${r(a[o]/h,5)} + ${2*c}px)`}function W(t){const{layoutOptions:e,renderColumnContainer:o,children:i,columnContainerProps:{style:r,className:a,...s}={},...l}=t,c={className:p("react-photo-album--column",a),style:{display:"flex",flexDirection:"column",flexWrap:"nowrap",alignItems:"flex-start",width:b(t),justifyContent:"columns"===e.layout?"space-between":"flex-start",...r},...s};return n.createElement(n.Fragment,null,(null!=o?o:k)({layoutOptions:e,columnContainerProps:c,children:i,...l}))}function J(t){const{photos:e,layoutOptions:o,renderPhoto:i,renderColumnContainer:r,componentsProps:{imageProps:a,columnContainerProps:s}}=t,l=G({photos:e,layoutOptions:o});if(!l)return null;const{columnsModel:c,columnsRatios:h,columnsGaps:p}=l;return n.createElement(n.Fragment,null,c.map(((t,e)=>n.createElement(W,{key:`column-${e}`,layoutOptions:o,columnIndex:e,columnsCount:c.length,columnsGaps:p,columnsRatios:h,renderColumnContainer:r,columnContainerProps:s},t.map((t=>{let{photo:e,layout:r}=t;return n.createElement(y,{key:e.key||e.src,photo:e,layout:r,layoutOptions:o,renderPhoto:i,imageProps:a})}))))))}function R(t){const{photos:e,layoutOptions:o}=t,{columns:n,spacing:r,padding:a,containerWidth:s}=o,l=(s-r*(n-1)-2*a*n)/n;if(l<=0)return n>1?R({...t,layoutOptions:{...o,columns:n-1}}):void 0;const c=[];for(let i=0;i<n;i+=1)c[i]=0;return e.reduce(((t,e,o)=>{const n=c.reduce(((t,e,o)=>e<c[t]-1?o:t),0);return c[n]=c[n]+l/i(e)+r+2*a,t[n].push({photo:e,index:o}),t}),Array.from({length:n}).map((()=>[]))).map((t=>t.map(((e,o)=>{let{photo:n,index:r}=e;return{photo:n,layout:{width:l,height:l/i(n),index:r,photoIndex:o,photosCount:t.length}}}))))}function O(t){const{photos:e,layoutOptions:o,renderPhoto:i,renderColumnContainer:r,componentsProps:{imageProps:a,columnContainerProps:s}}=t,l=R({photos:e,layoutOptions:o});return l?n.createElement(n.Fragment,null,l.map(((t,e)=>n.createElement(W,{key:`masonry-column-${e}`,layoutOptions:o,columnsCount:l.length,columnIndex:e,renderColumnContainer:r,columnContainerProps:s},t.map((t=>{let{photo:e,layout:r}=t;return n.createElement(y,{key:e.key||e.src,photo:e,layout:r,layoutOptions:o,renderPhoto:i,imageProps:a})})))))):null}function M(t){let{containerProps:e,children:o,containerRef:i}=t;return n.createElement("div",{ref:i,...e},o)}function E(t){const{layout:e,renderContainer:o,children:i,containerRef:r,containerProps:{style:a,className:s,...l}={}}=t,c={className:p("react-photo-album",`react-photo-album--${e}`,s),style:{display:"flex",flexWrap:"nowrap",justifyContent:"space-between",flexDirection:"rows"===e?"column":"row",...a},...l};return n.createElement(n.Fragment,null,(null!=o?o:M)({containerProps:c,containerRef:r,layout:e,children:i}))}function z(t,e){let{newContainerWidth:o,newScrollbarWidth:n}=e;const{containerWidth:i,scrollbarWidth:r}=t;return void 0!==i&&void 0!==r&&void 0!==o&&void 0!==n&&o>i&&o-i<=20&&n<r?{containerWidth:i,scrollbarWidth:n}:i!==o||r!==n?{containerWidth:o,scrollbarWidth:n}:t}function $(t,e){let o=null==t?void 0:t.clientWidth;if(void 0!==o&&e&&e.length>0){const t=[...e.filter((t=>t>0))].sort(((t,e)=>e-t));t.push(Math.floor(t[t.length-1]/2));const n=o;o=t.find(((e,o)=>e<=n||o===t.length-1))}return o}const S=Object.freeze([1200,600,300,0]);function N(t,e){return"function"===typeof t?t(e):t}function I(t,e){return"undefined"!==typeof t?N(t,e):void 0}function H(t,e){const o=S.findIndex((t=>t<=e));return N(t[o>=0?o:0],e)}function A(t,e,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const i=I(t,e);return Math.round(Math.max(void 0===i?H(o,e):i,n))}function F(t){const{photos:e,layout:o,renderContainer:i,defaultContainerWidth:r,breakpoints:a}=t,{containerRef:s,containerWidth:l}=function(t,e){const[{containerWidth:o},i]=n.useReducer(z,{containerWidth:e}),r=n.useRef(null),a=n.useRef();return{containerRef:n.useCallback((e=>{var o;null==(o=a.current)||o.disconnect(),a.current=void 0,r.current=e;const n=()=>i({newContainerWidth:$(r.current,t),newScrollbarWidth:window.innerWidth-document.documentElement.clientWidth});n(),e&&"undefined"!==typeof ResizeObserver&&(a.current=new ResizeObserver(n),a.current.observe(e))}),[t]),containerWidth:o}}(function(t){const e=n.useRef(t);return t&&e.current&&t.join()===e.current.join()||(e.current=t),e.current}(a),r);if(!o||!["rows","columns","masonry"].includes(o)||!Array.isArray(e))return null;const c=l?function(t){let{layout:e,onClick:o,containerWidth:n,targetRowHeight:i,rowConstraints:r,columns:a,spacing:s,padding:l,sizes:c}=t;return{layout:e,onClick:o,containerWidth:n,columns:A(a,n,[5,4,3,2],1),spacing:A(s,n,[20,15,10,5]),padding:A(l,n,[0,0,0,0,0]),targetRowHeight:A(i,n,[t=>t/5,t=>t/4,t=>t/3,t=>t/2]),rowConstraints:I(r,n),sizes:c}}({containerWidth:l,...t}):void 0,h=function(t,e,o){const{photos:n,componentsProps:i}=t,r=N(i,e)||{};if(o){const{layout:t,spacing:e,padding:i,rowConstraints:a}=o;if("rows"===t){const{singleRowMaxHeight:t}=a||{};if(t){const o=Math.floor(n.reduce(((e,o)=>{let{width:n,height:r}=o;return e+n/r*t-2*i}),i*n.length*2+e*(n.length-1)));o>0&&(r.containerProps=r.containerProps||{},r.containerProps.style={maxWidth:o,...r.containerProps.style})}}}return r}(t,l,c);return n.createElement(E,{layout:o,containerRef:s,renderContainer:i,containerProps:h.containerProps},c&&function(t,e,o){const{photos:i,layout:r,renderPhoto:a,renderRowContainer:s,renderColumnContainer:l}=t,c={photos:i,renderPhoto:a,componentsProps:e};return"rows"===r?n.createElement(v,{layoutOptions:o,renderRowContainer:s,...c}):"columns"===r?n.createElement(J,{layoutOptions:o,renderColumnContainer:l,...c}):n.createElement(O,{layoutOptions:o,renderColumnContainer:l,...c})}(t,h,c))}const B=[{src:"/images/travel/temple6.jpg",width:2048,height:1365,category:"places"},{src:"/images/travel/tokyo5.jpeg",width:2048,height:1365,category:"places"},{src:"/images/travel/bamboo.jpg",width:1365,height:2048,category:"places"},{src:"/images/travel/fuji.jpg",width:2048,height:1365,category:"places"},{src:"/images/pals/deer.jpg",width:2048,height:1365,category:"pals"},{src:"/images/travel/fuji4.jpg",width:2048,height:1365,category:"places"},{src:"/images/travel/kyoto.jpg",width:2048,height:1365,category:"places"},{src:"/images/travel/kyoto2.jpg",width:1365,height:2048,category:"places"},{src:"/images/pals/monkey.jpg",width:2048,height:1365,category:"pals"},{src:"/images/travel/bamboo2.jpg",width:2048,height:1365,category:"places"},{src:"/images/pals/monkey1.jpg",width:2048,height:1365,category:"pals"},{src:"/images/pals/monkey2.jpg",width:2048,height:1365,category:"pals"},{src:"/images/travel/osaka.jpg",width:2048,height:1365,category:"places"},{src:"/images/travel/parkhyatt.jpg",width:1365,height:2048,category:"places"},{src:"/images/travel/temple.JPG",width:2048,height:1365,category:"places"},{src:"/images/travel/fuji2.jpg",width:2048,height:1365,category:"places"},{src:"/images/travel/temple2.jpg",width:1365,height:2048,category:"places"},{src:"/images/people/temple3.jpg",width:2048,height:1365,category:"people"},{src:"/images/people/temple4.jpg",width:2048,height:1365,category:"people"},{src:"/images/people/temple5.jpg",width:1365,height:2048,category:"people"},{src:"/images/travel/tokyo.jpg",width:2048,height:1365,category:"places"},{src:"/images/people/tokyo2.jpg",width:1365,height:2048,category:"people"},{src:"/images/pals/tokyo3.jpg",width:2048,height:1365,category:"pals"},{src:"/images/travel/tokyo4.jpg",width:1365,height:2048,category:"places"},{src:"/images/people/tokyo6.jpg",width:1365,height:2048,category:"people"},{src:"/images/travel/tokyo7.jpg",width:2048,height:1365,category:"places"},{src:"/images/travel/tokyo8.jpeg",width:2048,height:1365,category:"places"},{src:"/images/travel/tokyo9.jpeg",width:1365,height:2048,category:"places"},{src:"/images/travel/copenhagen.JPG",width:2048,height:1365,category:"places"},{src:"/images/travel/fuji3.jpg",width:2048,height:1365,category:"places"},{src:"/images/travel/copenhagen2.JPG",width:2048,height:1365,category:"places"},{src:"/images/travel/copenhagen3.JPG",width:2048,height:1365,category:"places"},{src:"/images/travel/copenhagen4.JPG",width:2048,height:1365,category:"places"},{src:"/images/travel/copenhagen5.JPG",width:1365,height:2048,category:"places"},{src:"/images/travel/copenhagen6.JPG",width:1365,height:2048,category:"places"},{src:"/images/travel/copenhagen7.JPG",width:2048,height:1365,category:"places"},{src:"/images/travel/copenhagen8.JPG",width:1365,height:2048,category:"places"},{src:"/images/travel/vienna1.JPG",width:1365,height:2048,category:"places"},{src:"/images/travel/vienna2.JPG",width:1365,height:2048,category:"places"},{src:"/images/travel/vienna3.JPG",width:1365,height:2048,category:"places"},{src:"/images/travel/vienna4.JPG",width:2048,height:1365,category:"places"},{src:"/images/travel/vienna5.JPG",width:2048,height:1365,category:"places"},{src:"/images/travel/london1.JPG",width:2048,height:1365,category:"places"},{src:"/images/travel/london2.JPG",width:2048,height:1365,category:"places"},{src:"/images/travel/london3.JPG",width:2048,height:1365,category:"places"},{src:"/images/travel/london4.JPG",width:2048,height:1365,category:"places"},{src:"/images/travel/london5.JPG",width:2048,height:1365,category:"places"},{src:"/images/travel/london6.JPG",width:2048,height:1365,category:"places"},{src:"/images/travel/london7.JPG",width:1365,height:2048,category:"places"},{src:"/images/travel/london8.JPG",width:2048,height:1365,category:"places"},{src:"/images/travel/london9.JPG",width:2048,height:1365,category:"places"},{src:"/images/people/copenhagen.JPG",width:2048,height:1365,category:"people"},{src:"/images/people/portrait.JPG",width:1365,height:2048,category:"people"},{src:"/images/pals/dog3.JPG",width:2048,height:1365,category:"pals"},{src:"/images/pals/dog4.JPG",width:2048,height:1365,category:"pals"},{src:"/images/pals/swan.JPG",width:2048,height:1365,category:"pals"},{src:"/images/pals/dog.JPG",width:1365,height:2048,category:"pals"},{src:"/images/pals/dog2.JPG",width:1365,height:2048,category:"pals"},{src:"/images/pals/dog5.JPG",width:1365,height:2048,category:"pals"},{src:"/images/pals/dog6.jpg",width:1440,height:1796,category:"pals"},{src:"/images/pals/dog7.jpg",width:1365,height:2048,category:"pals"},{src:"/images/pals/cat.JPG",width:2048,height:1365,category:"pals"},{src:"/images/people/people1.JPG",width:1365,height:2048,category:"people"},{src:"/images/people/people2.JPG",width:1365,height:2048,category:"people"},{src:"/images/people/people3.JPG",width:2048,height:1365,category:"people"},{src:"/images/people/people4.JPG",width:1365,height:2048,category:"people"},{src:"/images/people/people5.JPG",width:2048,height:1365,category:"people"},{src:"/images/people/people6.JPG",width:2048,height:1365,category:"people"},{src:"/images/people/people7.JPG",width:1365,height:2048,category:"people"},{src:"/images/people/people8.JPG",width:2048,height:1365,category:"people"}];var D=o(184);const L=()=>{const[t,e]=(0,n.useState)("places"),[o,i]=(0,n.useState)(!1),[r,a]=(0,n.useState)(null),{peopleGallery:s,placesGallery:l,palsGallery:c}=(0,n.useMemo)((()=>({peopleGallery:B.filter((t=>"people"===t.category)).map((t=>({...t,loading:"lazy",srcSet:[{src:t.src,width:320,height:Math.round(t.height*(320/t.width))},{src:t.src,width:640,height:Math.round(t.height*(640/t.width))},{src:t.src,width:1200,height:Math.round(t.height*(1200/t.width))}]}))),placesGallery:B.filter((t=>"places"===t.category)).map((t=>({...t,loading:"lazy",srcSet:[{src:t.src,width:320,height:Math.round(t.height*(320/t.width))},{src:t.src,width:640,height:Math.round(t.height*(640/t.width))},{src:t.src,width:1200,height:Math.round(t.height*(1200/t.width))}]}))),palsGallery:B.filter((t=>"pals"===t.category)).map((t=>({...t,loading:"lazy",srcSet:[{src:t.src,width:320,height:Math.round(t.height*(320/t.width))},{src:t.src,width:640,height:Math.round(t.height*(640/t.width))},{src:t.src,width:1200,height:Math.round(t.height*(1200/t.width))}]})))})),[]),h=(0,n.useMemo)((()=>{switch(t){case"people":default:return s;case"places":return l;case"pals":return c}}),[t,s,l,c]);console.log(r);const p=()=>{i(!1),a(null)};return(0,D.jsxs)("div",{children:[(0,D.jsxs)("div",{className:"gallery-selector",children:[(0,D.jsx)("button",{className:"places"===t?"active":"",onClick:()=>e("places"),children:"Places"}),(0,D.jsx)("button",{className:"people"===t?"active":"",onClick:()=>e("people"),children:"People"}),(0,D.jsx)("button",{className:"pals"===t?"active":"",onClick:()=>e("pals"),children:"Pals"})]}),(0,D.jsx)(F,{layout:"masonry",photos:h,onClick:t=>{var e;null!==(e=t)&&void 0!==e&&e.photo&&(console.log(e.photo.src),a(e.photo.src),i(!0))},columns:t=>t<600?2:t<900?3:4,spacing:20}),o&&r&&(0,D.jsx)("div",{className:"modal",onClick:p,children:(0,D.jsxs)("div",{className:"modal-content",onClick:t=>t.stopPropagation(),children:[(0,D.jsx)("span",{className:"close",onClick:p,children:"\xd7"}),(0,D.jsx)("img",{src:r,alt:r.alt||"",style:{width:"100%"}})]})}),(0,D.jsx)("style",{jsx:!0,children:"\n            .modal {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                position: fixed;\n                top: 2rem;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                background-color: rgba(0, 0, 0, 0.8);\n                z-index: 1000;\n            }\n            .modal-content {\n                position: relative;\n                width: 80%;\n                max-width: 800px;\n            }\n            .close {\n                position: absolute;\n                top: 10px;\n                right: 20px;\n                color: white;\n                font-size: 24px;\n                font-weight: bold;\n                cursor: pointer;\n            }\n            /* Adjust image styling to fit within the modal view */\n            .modal-content img {\n                width: 100%;\n                max-height: 90vh; /* Ensures the image doesn\u2019t take up more than 90% of viewport height */\n                object-fit: contain; /* Scales the image to fit within max height/width without distortion */\n            }\n        "})]})};var T=o(66);const U=()=>(0,D.jsx)(T.Z,{title:"Photography",description:"Nikhar Arora photography",fullPage:!0,children:(0,D.jsx)(L,{})})}}]);
//# sourceMappingURL=582.6ff96ae7.chunk.js.map