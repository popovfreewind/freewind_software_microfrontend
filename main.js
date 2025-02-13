(()=>{"use strict";var n={843:(n,r,e)=>{e.d(r,{A:()=>d});var o=e(601),a=e.n(o),t=e(314),i=e.n(t)()(a());i.push([n.id,'/* MVP.css v1.17.1 - https://github.com/andybrewer/mvp */\n\n:root {\n  --active-brightness: 0.85;\n  --border-radius: 5px;\n  --box-shadow: 2px 2px 10px;\n  --color-accent: #118bee15;\n  --color-bg: #fff;\n  --color-bg-secondary: #e9e9e9;\n  --color-link: #118bee;\n  --color-secondary: #920de9;\n  --color-secondary-accent: #920de90b;\n  --color-shadow: #f4f4f4;\n  --color-table: #118bee;\n  --color-text: #000;\n  --color-text-secondary: #999;\n  --color-scrollbar: #cacae8;\n  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;\n  --hover-brightness: 1.2;\n  --justify-important: center;\n  --justify-normal: left;\n  --line-height: 1.5;\n  --width-card: 285px;\n  --width-card-medium: 460px;\n  --width-card-wide: 800px;\n  --width-content: 1080px;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root[color-mode="user"] {\n    --color-accent: #0097fc4f;\n    --color-bg: #333;\n    --color-bg-secondary: #555;\n    --color-link: #0097fc;\n    --color-secondary: #e20de9;\n    --color-secondary-accent: #e20de94f;\n    --color-shadow: #bbbbbb20;\n    --color-table: #0097fc;\n    --color-text: #f7f7f7;\n    --color-text-secondary: #aaa;\n  }\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  html {\n    scroll-behavior: auto;\n  }\n}\n\n/* Layout */\narticle aside {\n  background: var(--color-secondary-accent);\n  border-left: 4px solid var(--color-secondary);\n  padding: 0.01rem 0.8rem;\n}\n\nbody {\n  background: var(--color-bg);\n  color: var(--color-text);\n  font-family: var(--font-family);\n  line-height: var(--line-height);\n  margin: 0;\n  overflow-x: hidden;\n  padding: 0;\n}\n\nfooter,\nheader,\nmain {\n  margin: 0 auto;\n  max-width: var(--width-content);\n  padding: 3rem 1rem;\n}\n\nhr {\n  background-color: var(--color-bg-secondary);\n  border: none;\n  height: 1px;\n  margin: 4rem 0;\n  width: 100%;\n}\n\nsection {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: var(--justify-important);\n}\n\nsection img,\narticle img {\n  max-width: 100%;\n}\n\nsection pre {\n  overflow: auto;\n}\n\nsection aside {\n  border: 1px solid var(--color-bg-secondary);\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow) var(--color-shadow);\n  margin: 1rem;\n  padding: 1.25rem;\n  width: var(--width-card);\n}\n\nsection aside:hover {\n  box-shadow: var(--box-shadow) var(--color-bg-secondary);\n}\n\n[hidden] {\n  display: none;\n}\n\n/* Headers */\narticle header,\ndiv header,\nmain header {\n  padding-top: 0;\n}\n\nheader {\n  text-align: var(--justify-important);\n}\n\nheader a b,\nheader a em,\nheader a i,\nheader a strong {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\nheader nav img {\n  margin: 1rem 0;\n}\n\nsection header {\n  padding-top: 0;\n  width: 100%;\n}\n\n/* Nav */\nnav {\n  align-items: center;\n  display: flex;\n  font-weight: bold;\n  justify-content: space-between;\n  margin-bottom: 7rem;\n}\n\nnav ul {\n  list-style: none;\n  padding: 0;\n}\n\nnav ul li {\n  display: inline-block;\n  margin: 0 0.5rem;\n  position: relative;\n  text-align: left;\n}\n\n/* Nav Dropdown */\nnav ul li:hover ul {\n  display: block;\n}\n\nnav ul li ul {\n  background: var(--color-bg);\n  border: 1px solid var(--color-bg-secondary);\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow) var(--color-shadow);\n  display: none;\n  height: auto;\n  left: -2px;\n  padding: 0.5rem 1rem;\n  position: absolute;\n  top: 1.7rem;\n  white-space: nowrap;\n  width: auto;\n  z-index: 1;\n}\n\nnav ul li ul::before {\n  /* fill gap above to make mousing over them easier */\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: -0.5rem;\n  height: 0.5rem;\n}\n\nnav ul li ul li,\nnav ul li ul li a {\n  display: block;\n}\n\n/* Nav for Mobile */\n@media (max-width: 768px) {\n  nav {\n    flex-wrap: wrap;\n  }\n\n  nav ul li {\n    width: calc(100% - 1em);\n  }\n\n  nav ul li ul {\n    border: none;\n    box-shadow: none;\n    display: block;\n    position: static;\n  }\n}\n\n/* Typography */\ncode,\nsamp {\n  background-color: var(--color-accent);\n  border-radius: var(--border-radius);\n  color: var(--color-text);\n  display: inline-block;\n  margin: 0 0.1rem;\n  padding: 0 0.5rem;\n}\n\ndetails {\n  margin: 1.3rem 0;\n}\n\ndetails summary {\n  font-weight: bold;\n  cursor: pointer;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  line-height: var(--line-height);\n  text-wrap: balance;\n}\n\nmark {\n  padding: 0.1rem;\n}\n\nol li,\nul li {\n  padding: 0.2rem 0;\n}\n\np {\n  margin: 0.75rem 0;\n  padding: 0;\n  width: 100%;\n}\n\npre {\n  margin: 1rem 0;\n  max-width: var(--width-card-wide);\n  padding: 1rem 0;\n}\n\npre code,\npre samp {\n  display: block;\n  max-width: var(--width-card-wide);\n  padding: 0.5rem 2rem;\n  white-space: pre-wrap;\n}\n\nsmall {\n  color: var(--color-text-secondary);\n}\n\nsup {\n  background-color: var(--color-secondary);\n  border-radius: var(--border-radius);\n  color: var(--color-bg);\n  font-size: xx-small;\n  font-weight: bold;\n  margin: 0.2rem;\n  padding: 0.2rem 0.3rem;\n  position: relative;\n  top: -2px;\n}\n\n/* Links */\na {\n  color: var(--color-link);\n  display: inline-block;\n  font-weight: bold;\n  text-decoration: underline;\n}\n\na:hover {\n  filter: brightness(var(--hover-brightness));\n}\n\na:active {\n  filter: brightness(var(--active-brightness));\n}\n\na b,\na em,\na i,\na strong,\nbutton,\ninput[type="submit"] {\n  border-radius: var(--border-radius);\n  display: inline-block;\n  font-size: medium;\n  font-weight: bold;\n  line-height: var(--line-height);\n  margin: 0.5rem 0;\n  padding: 1rem 2rem;\n}\n\nbutton,\ninput[type="submit"] {\n  font-family: var(--font-family);\n}\n\nbutton:hover,\ninput[type="submit"]:hover {\n  cursor: pointer;\n  filter: brightness(var(--hover-brightness));\n}\n\nbutton:active,\ninput[type="submit"]:active {\n  filter: brightness(var(--active-brightness));\n}\n\na b,\na strong,\nbutton,\ninput[type="submit"] {\n  background-color: var(--color-link);\n  border: 2px solid var(--color-link);\n  color: var(--color-bg);\n}\n\na em,\na i {\n  border: 2px solid var(--color-link);\n  border-radius: var(--border-radius);\n  color: var(--color-link);\n  display: inline-block;\n  padding: 1rem 2rem;\n}\n\narticle aside a {\n  color: var(--color-secondary);\n}\n\n/* Images */\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nfigure img {\n  max-width: 100%;\n}\n\nfigure figcaption {\n  color: var(--color-text-secondary);\n}\n\n/* Forms */\nbutton:disabled,\ninput:disabled {\n  background: var(--color-bg-secondary);\n  border-color: var(--color-bg-secondary);\n  color: var(--color-text-secondary);\n  cursor: not-allowed;\n}\n\nbutton[disabled]:hover,\ninput[type="submit"][disabled]:hover {\n  filter: none;\n}\n\nform {\n  border: 1px solid var(--color-bg-secondary);\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow) var(--color-shadow);\n  display: block;\n  max-width: var(--width-card-wide);\n  min-width: var(--width-card);\n  padding: 1.5rem;\n  text-align: var(--justify-normal);\n}\n\nform header {\n  margin: 1.5rem 0;\n  padding: 1.5rem 0;\n}\n\ninput,\nlabel,\nselect,\ntextarea {\n  display: block;\n  font-size: inherit;\n  max-width: var(--width-card-wide);\n}\n\ninput[type="checkbox"],\ninput[type="radio"] {\n  display: inline-block;\n}\n\ninput[type="checkbox"] + label,\ninput[type="radio"] + label {\n  display: inline-block;\n  font-weight: normal;\n  position: relative;\n  top: 1px;\n}\n\ninput[type="range"] {\n  padding: 0.4rem 0;\n}\n\ninput,\nselect,\ntextarea {\n  border: 1px solid var(--color-bg-secondary);\n  border-radius: var(--border-radius);\n  margin-bottom: 1rem;\n  padding: 0.4rem 0.8rem;\n}\n\ninput[type="text"],\ninput[type="password"],\ninput[type="email"],\ntextarea {\n  width: calc(100% - 1.6rem);\n}\n\ninput[readonly],\ntextarea[readonly] {\n  background-color: var(--color-bg-secondary);\n}\n\nlabel {\n  font-weight: bold;\n  margin-bottom: 0.2rem;\n}\n\n/* Popups */\ndialog {\n  max-width: 90%;\n  max-height: 85dvh;\n  margin: auto;\n  padding: 0;\n  border: 1px solid var(--color-bg-secondary);\n  border-radius: 0.5rem;\n  overscroll-behavior: contain;\n  scroll-behavior: smooth;\n  scrollbar-width: none; /* Hide scrollbar for Firefox */\n  -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */\n  scrollbar-color: transparent transparent;\n  animation: bottom-to-top 0.25s ease-in-out forwards;\n}\n\ndialog::-webkit-scrollbar {\n  width: 0;\n  display: none;\n}\n\ndialog::-webkit-scrollbar-track {\n  background: transparent;\n}\n\ndialog::-webkit-scrollbar-thumb {\n  background-color: transparent;\n}\n\n@media (min-width: 650px) {\n  dialog {\n    max-width: 39rem;\n  }\n}\n\ndialog::backdrop {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n@keyframes bottom-to-top {\n  0% {\n    opacity: 0;\n    transform: translateY(10%);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/* Tables */\ntable {\n  border: 1px solid var(--color-bg-secondary);\n  border-radius: var(--border-radius);\n  border-spacing: 0;\n  display: inline-block;\n  max-width: 100%;\n  overflow-x: auto;\n  padding: 0;\n  white-space: nowrap;\n}\n\ntable td,\ntable th,\ntable tr {\n  padding: 0.4rem 0.8rem;\n  text-align: var(--justify-important);\n}\n\ntable thead {\n  background-color: var(--color-table);\n  border-collapse: collapse;\n  border-radius: var(--border-radius);\n  color: var(--color-bg);\n  margin: 0;\n  padding: 0;\n}\n\ntable thead tr:first-child th:first-child {\n  border-top-left-radius: var(--border-radius);\n}\n\ntable thead tr:first-child th:last-child {\n  border-top-right-radius: var(--border-radius);\n}\n\ntable thead th:first-child,\ntable tr td:first-child {\n  text-align: var(--justify-normal);\n}\n\ntable tr:nth-child(even) {\n  background-color: var(--color-accent);\n}\n\n/* Quotes */\nblockquote {\n  display: block;\n  font-size: x-large;\n  line-height: var(--line-height);\n  margin: 1rem auto;\n  max-width: var(--width-card-medium);\n  padding: 1.5rem 1rem;\n  text-align: var(--justify-important);\n}\n\nblockquote footer {\n  color: var(--color-text-secondary);\n  display: block;\n  font-size: small;\n  line-height: var(--line-height);\n  padding: 1.5rem 0;\n}\n\n/* Scrollbars */\n* {\n  scrollbar-width: thin;\n  scrollbar-color: var(--color-scrollbar) transparent;\n}\n\n*::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n\n*::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n*::-webkit-scrollbar-thumb {\n  background-color: var(--color-scrollbar);\n  border-radius: 10px;\n}\n',""]);const d=i},208:(n,r,e)=>{e.d(r,{A:()=>c});var o=e(601),a=e.n(o),t=e(314),i=e.n(t),d=e(843),l=i()(a());l.i(d.A),l.push([n.id,"",""]);const c=l},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",o=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),o&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),o&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,o,a,t){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(i[l]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);o&&i[s[0]]||(void 0!==t&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=t),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),r.push(s))}},r}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var r=[];function e(n){for(var e=-1,o=0;o<r.length;o++)if(r[o].identifier===n){e=o;break}return e}function o(n,o){for(var t={},i=[],d=0;d<n.length;d++){var l=n[d],c=o.base?l[0]+o.base:l[0],s=t[c]||0,p="".concat(c," ").concat(s);t[c]=s+1;var b=e(p),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==b)r[b].references++,r[b].updater(u);else{var h=a(u,o);o.byIndex=d,r.splice(d,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,a){var t=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<t.length;i++){var d=e(t[i]);r[d].references--}for(var l=o(n,a),c=0;c<t.length;c++){var s=e(t[c]);0===r[s].references&&(r[s].updater(),r.splice(s,1))}t=l}}},659:n=>{var r={};n.exports=function(n,e){var o=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,a&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var t=e.sourceMap;t&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")),r.styleTagTransform(o,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(o){var a=r[o];if(void 0!==a)return a.exports;var t=r[o]={id:o,exports:{}};return n[o](t,t.exports,e),t.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var o in r)e.o(r,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:r[o]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0;var o=e(72),a=e.n(o),t=e(825),i=e.n(t),d=e(659),l=e.n(d),c=e(56),s=e.n(c),p=e(540),b=e.n(p),u=e(113),h=e.n(u),m=e(208),v={};v.styleTagTransform=h(),v.setAttributes=s(),v.insert=l().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=b(),a()(m.A,v),m.A&&m.A.locals&&m.A.locals,document.body.appendChild(function(){const n=document.createElement("div");return n.innerHTML="Hello webpack!",n}())})();