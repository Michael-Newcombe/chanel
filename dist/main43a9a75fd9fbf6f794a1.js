(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!t;)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e=>document.querySelector(e),n=e=>document.querySelectorAll(e),r=(e,t)=>e.classList.toggle(t),o=t("nav"),c=t(".hamburger-icon"),i=t(".diamond-menu"),p=t(".expanded"),s=()=>{r(c,"open"),r(o,"expand"),r(i,"hide"),r(p,"show-options")},a={threshold:.1};t("#introduction-link").classList.add("current-section");const l=n("section"),d=e=>{e.forEach((e=>{const n=e.target.getAttribute("data-link-id"),r=t(`#${n}`);e.isIntersecting?r&&r.classList.add("current-section"):r&&r.classList.remove("current-section")}))},h={threshold:.2},u=n(".opacity-animation"),g=n(".scale-animation"),v=n(".slide-in-animation"),b=e=>{e.forEach((e=>{e.isIntersecting&&(e=>{const t=e.getAttribute("data-animation");e.classList.add(t)})(e.target)}))},w=t("video"),m={threshold:.2},f=e=>{e.forEach((e=>{e.isIntersecting&&e.target.play()}))};e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,(()=>{c.addEventListener("click",s,!1);const e=new IntersectionObserver(d,a);l.forEach((t=>{e.observe(t)}))})(),(()=>{const e=new IntersectionObserver(b,h);u.forEach((t=>{e.observe(t)}));const t=new IntersectionObserver(b,h);g.forEach((e=>{t.observe(e)}));const n=new IntersectionObserver(b,h);v.forEach((e=>{n.observe(e)}))})(),(()=>{new IntersectionObserver(f,m).observe(w),w.addEventListener("click",(()=>{w.play()}));const e=document.querySelector("video").play();void 0!==e&&e.then((e=>{})).catch((e=>{console.log(e)}))})(),t(".cta-container").addEventListener("click",(()=>{window.open("https://www.chanel.com/us/high-jewelry/n5-collection/","_blank")}))})();
//# sourceMappingURL=main43a9a75fd9fbf6f794a1.js.map