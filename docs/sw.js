if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,o,s)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(o.map(r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}})).then(e=>{const r=s(...e);return i.default||(i.default=r),i})}))}}define("./sw.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"0a27a4163254fc8fce870c8cc3a3f94f"},{url:"app-icon.png",revision:"fca3752d63e1860b6c3361fbebec68c3"},{url:"apple-touch-icon-152x152.png",revision:"5e22bf1f2c8125aedf7e19f1408b8cba"},{url:"favicon-16x16.png",revision:"1cef063946db205fbb102189a58e3af5"},{url:"favicon-32x32.png",revision:"750936edcfd61f11280a5ef2291a9efd"},{url:"index.html",revision:"d5036d9dd52b3986940fa322406633c4"},{url:"logo-192x192.png",revision:"5e22bf1f2c8125aedf7e19f1408b8cba"},{url:"logo-512x512.png",revision:"cf54247cd6d201b3b5f90d337ffeba0e"},{url:"pega-mashup-light-webcomponent.js",revision:"581d36d8be1b06a6524bf53caf449ac8"},{url:"pega-mashup-light-webcomponentv2.js",revision:"e6c76dcd57d3d590f2b87e622aa6943b"},{url:"pega-mashup-webcomponent-all.js",revision:"6dcb5912df567858747c2835d1708c17"},{url:"pega-mashup-webcomponent-light-all.js",revision:"9287310e241824b36f65bed767941faf"},{url:"style.css",revision:"318ea8df21ea5fde1748f245a8a39701"},{url:"u+-logo.svg",revision:"ead930e6e850492b8527d14ad46f26d1"}],{})}));
//# sourceMappingURL=sw.js.map