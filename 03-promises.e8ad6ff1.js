var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("eWCmQ");const i=document.querySelector(".form");i.addEventListener("submit",(function(e){e.preventDefault();let t=Number(l.delay);const n=Number(l.step);let r=Number(l.amount);for(let e=1;e<=r;e+=1)u(e,t).then((e=>{o.Notify.success(e)})).catch((e=>{o.Notify.failure(e)})),t+=n})),i.addEventListener("input",(function(e){l[e.target.name]=e.target.value}));let l={};function u(e,t){return new Promise(((n,r)=>{const o=Math.random()>.3;setTimeout((()=>{o&&n(`✅ Fulfilled promise ${e} in ${t}ms`),r(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}
//# sourceMappingURL=03-promises.e8ad6ff1.js.map
