(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1111:function(e,t){},1128:function(e,t){},1129:function(e,t){},1130:function(e,t){},1131:function(e,t){},1132:function(e,t){},1186:function(e,t,n){"use strict";n.r(t);n(12),n(14),n(4),n(15),n(6),n(7),n(9),n(16),n(10),n(13),n(8),n(17);var r=n(1),o=n.n(r),i=n(2),a=n(5),c=n(633),u=n(1124),l=n.n(u),s=n(11),f=n(0);function d(e){var t=e.setZoom;return Object(f.jsxs)(c.a,{children:[Object(f.jsx)(l.a,{bsStyle:"info",bsSize:"large",onClick:function(){return t("fit-width")},children:Object(f.jsx)(s.a,{type:"arrows-h"})}),Object(f.jsx)(l.a,{bsStyle:"info",bsSize:"large",onClick:function(){return t("fit-height")},children:Object(f.jsx)(s.a,{type:"arrows-v"})}),Object(f.jsx)(l.a,{bsStyle:"info",bsSize:"large",onClick:function(){return t("zoom-in")},children:Object(f.jsx)(s.a,{type:"search-plus"})}),Object(f.jsx)(l.a,{bsStyle:"info",bsSize:"large",onClick:function(){return t("zoom-out")},children:Object(f.jsx)(s.a,{type:"search-minus"})})]})}d.propTypes={setZoom:o.a.func.isRequired};var v=Object(i.memo)(d),y=n(38),b=n(142),p=n(1099);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){var n=t.getPageView(e.page-1),r=n.viewport,o=r.viewBox[3],i=r.convertToViewportRectangle([e.h,o-(e.v+e.height)+10,e.h+e.width,o-e.v+10]),a=h(p.Util.normalizeRect(i),4),c=a[0],u=a[1],l=a[2],s=a[3],f=document.createElement("div");return f.style.left=Math.floor(c)+"px",f.style.top=Math.floor(u)+"px",f.style.width=Math.ceil(l-c)+"px",f.style.height=Math.ceil(s-u)+"px",f.style.backgroundColor="rgba(255,255,0)",f.style.position="absolute",f.style.display="inline-block",f.style.scrollMargin="72px",f.style.pointerEvents="none",f.style.opacity="0",f.style.transition="opacity 0.5s",n.div.appendChild(f),window.setTimeout((function(){f.style.opacity="0.3",window.setTimeout((function(){f.style.opacity="0"}),1e3)}),0),f}n(25),n(1133),n(95),n(71),n(81);var g=n(1134),j=n(1135),O=n.n(j),k=(n(1136),n(21)),S=n(32);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}"undefined"!=typeof window&&"Worker"in window&&(p.GlobalWorkerOptions.workerPort=new O.a),Promise.allSettled;var T="true"===new URLSearchParams(window.location.search).get("disable-font-face"),E=Object(k.a)("ol-pdfCMapsPath"),A=Object(k.a)("ol-pdfImageResourcesPath"),C=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t;var n=new g.EventBus,r=new g.PDFLinkService({eventBus:n,externalLinkTarget:2,externalLinkRel:"noopener"}),o=new g.PDFViewer({container:t,eventBus:n,imageResourcesPath:A,linkService:r,enableScripting:!1,enableXfa:!1,renderInteractiveForms:!1});r.setViewer(o),this.eventBus=n,this.linkService=r,this.viewer=o}var t,n,r;return t=e,(n=[{key:"loadDocument",value:function(e){var t=this;return this.loadDocumentTask&&(this.loadDocumentTask.destroy(),this.loadDocumentTask=void 0),new Promise((function(n,r){t.loadDocumentTask=p.getDocument({url:e,cMapUrl:E,cMapPacked:!0,disableFontFace:T,rangeChunkSize:131072,disableAutoFetch:!0,disableStream:!0,textLayerMode:2}),t.loadDocumentTask.promise.then((function(e){if(t.loadDocumentTask){var r=t.viewer.pdfDocument;t.viewer.setDocument(e),t.linkService.setDocument(e),n(e),r&&(r.cleanup().catch(console.error),r.destroy())}})).catch((function(e){t.loadDocumentTask&&(e&&"MissingPDFException"===e.name||Object(S.b)("pdf preview error ".concat(e)),r(e))})).finally((function(){t.loadDocumentTask=void 0}))}))}},{key:"updateOnResize",value:function(){if(this.isVisible()){var e=this.viewer.currentScaleValue;"auto"!==e&&"page-fit"!==e&&"page-width"!==e||(this.viewer.currentScaleValue=e),this.viewer.update()}}},{key:"clickPosition",value:function(e,t,n){var r=this.viewer.getPageView(n.pageNumber-1).viewport,o=t.querySelector("canvas").getBoundingClientRect(),i=e.clientX-o.left,a=e.clientY-o.top,c=x(r.convertToPdfPoint(i,a),2),u=c[0],l=c[1];return{page:n.pageNumber-1,offset:{left:u,top:r.viewBox[3]-l}}}},{key:"currentPosition",get:function(){var e=this.viewer.currentPageNumber-1,t=this.viewer.getPageView(e),n=t.div.getBoundingClientRect(),r=this.container.getBoundingClientRect(),o=r.top-n.top,i=r.left-n.left,a=x(t.viewport.convertToPdfPoint(i,o),2),c=a[0],u=a[1],l=x(t.viewport.viewBox,4),s=l[2];return{page:e,offset:{top:u,left:c},pageSize:{height:l[3],width:s}}}},{key:"scrollToPosition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[null,{name:"XYZ"},e.offset.left,e.offset.top,t];this.viewer.scrollPageIntoView({pageNumber:e.page+1,destArray:n}),this.viewer.container.scrollBy({top:-9})}},{key:"isVisible",value:function(){return null!==this.viewer.container.offsetParent}},{key:"abortDocumentLoading",value:function(){this.loadDocumentTask=void 0}},{key:"destroy",value:function(){this.loadDocumentTask&&(this.loadDocumentTask.destroy(),this.loadDocumentTask=void 0),this.viewer.destroy()}}])&&D(t.prototype,n),r&&D(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),z=n(115),R=n(365),V=n(72);function I(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=L(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(e,t)||L(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function F(e){var t=e.url,n=Object(y.c)()._id,r=Object(V.b)(),o=r.setError,c=r.firstRenderDone,u=r.highlights,l=r.position,s=r.setPosition,d=B(Object(i.useState)(),2),p=d[0],h=d[1],w=B(Object(b.a)("pdf-viewer-scale:".concat(n),"page-width"),2),g=w[0],j=w[1],O=B(Object(i.useState)(),2),S=O[0],x=O[1],P=B(Object(i.useState)(!1),2),D=P[0],T=P[1],E=Object(i.useCallback)((function(e){if(e){var t=new C(e.firstChild);return x(t),function(){return t.destroy()}}}),[]);Object(i.useEffect)((function(){if(S){var e=function(){if(T(!0),Object(k.a)("ol-trackPdfDownload")&&c)if(!document.hidden){var e=performance.now();c({timePDFFetched:p,timePDFRendered:e})}else c({timePDFFetched:p})};return S.eventBus.on("pagesinit",e),function(){return S.eventBus.off("pagesinit",e)}}}),[S,c,p]),Object(i.useEffect)((function(){if(S&&t)return h(performance.now()),T(!1),o(void 0),S.loadDocument(t).catch((function(e){console.error(e),o("rendering-error")})),function(){return S.abortDocumentLoading()}}),[S,t,o]),Object(i.useEffect)((function(){var e;if(D&&S){if(!S.isVisible())return;var t=Object(a.debounce)((function(e){try{s(e.currentPosition)}catch(e){}}),500);e=window.setTimeout((function(){t(S)}),100);var n=function(){t(S)};return S.container.addEventListener("scroll",n),function(){S.container.removeEventListener("scroll",n),e&&window.clearTimeout(e),t.cancel()}}}),[s,S,D]),Object(i.useEffect)((function(){if(S){var e=function(e){var t=e.source.textLayerDiv.closest(".page");t.addEventListener("dblclick",(function(n){window.dispatchEvent(new CustomEvent("synctex:sync-to-position",{detail:S.clickPosition(n,t,e)}))}))};return S.eventBus.on("textlayerrendered",e),function(){return S.eventBus.off("textlayerrendered",e)}}}),[S]);var A=Object(i.useRef)(l);Object(i.useEffect)((function(){A.current=l}),[l]);var z=Object(i.useRef)(g);Object(i.useEffect)((function(){z.current=g}),[g]),Object(i.useEffect)((function(){if(D&&S){if(!S.isVisible())return;A.current?S.scrollToPosition(A.current,z.current):S.viewer.currentScaleValue=z.current}}),[D,S,z,A]),Object(i.useEffect)((function(){S&&(S.viewer.currentScaleValue=g)}),[g,S]),Object(i.useEffect)((function(){if(S&&null!=u&&u.length){var e,t,n=[],r=I(u);try{for(r.s();!(t=r.n()).done;){var o=t.value;try{var i=m(o,S.viewer);n.push(i)}catch(e){}}}catch(e){r.e(e)}finally{r.f()}return null===(e=n[0])||void 0===e||e.scrollIntoView({block:"nearest",inline:"start",behavior:"smooth"}),function(){var e,t=I(n);try{for(t.s();!(e=t.n()).done;){e.value.remove()}}catch(e){t.e(e)}finally{t.f()}}}}),[u,S]);var R=Object(i.useCallback)((function(e){switch(e){case"fit-width":j("page-width");break;case"fit-height":j("page-height");break;case"zoom-in":j(1.25*S.viewer.currentScale);break;case"zoom-out":j(.75*S.viewer.currentScale)}}),[S,j]);Object(i.useEffect)((function(){if(S&&"ResizeObserver"in window){var e=function(){S.updateOnResize()},t=new ResizeObserver(e);return t.observe(S.container),window.addEventListener("resize",e),function(){t.disconnect(),window.removeEventListener("resize",e)}}}),[S]);var L=Object(i.useCallback)((function(e){D&&((e.metaKey||e.ctrlKey)&&"="===e.key?(e.preventDefault(),R("zoom-in")):(e.metaKey||e.ctrlKey)&&"-"===e.key?(e.preventDefault(),R("zoom-out")):(e.metaKey||e.ctrlKey)&&"0"===e.key&&(e.preventDefault(),R("fit-width")))}),[D,R]);return Object(f.jsxs)("div",{className:"pdfjs-viewer pdfjs-viewer-outer",ref:E,children:[Object(f.jsx)("div",{className:"pdfjs-viewer-inner",role:"tabpanel",tabIndex:"0",onKeyDown:L,children:Object(f.jsx)("div",{className:"pdfViewer"})}),Object(f.jsx)("div",{className:"pdfjs-controls",children:Object(f.jsx)(v,{setZoom:R})})]})}F.propTypes={url:o.a.string.isRequired};t.default=Object(z.a)(Object(i.memo)(F),(function(){return Object(f.jsx)(R.a,{type:"pdf"})}))}}]);