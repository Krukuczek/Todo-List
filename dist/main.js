(()=>{"use strict";function t(t,s,e,n,i){this.title=t,this.description=s,this.time=e,this.priority=n,this.done=Boolean(i)}let s=new t("cleaning","I need clean my room","today","important","0");console.log(s);let e=new t("program","I need clean my room","today","important","0");console.log(e);const n=document.getElementById("navbar");document.getElementById("navbarButton").addEventListener("click",(function(){n.classList.contains("active")?n.classList.remove("active"):n.classList.add("active")}));const i=document.getElementById("circle");i.addEventListener("click",(function(){const t=document.getElementById("heading"),s=document.getElementById("mainContainer");"moon"==i.classList?(i.classList.remove("moon"),i.classList.add("sun"),t.classList.remove("night"),t.classList.add("day"),s.classList.remove("night"),s.classList.add("day")):(i.classList.remove("sun"),i.classList.add("moon"),t.classList.remove("day"),t.classList.add("night"),s.classList.remove("day"),s.classList.add("night"))}))})();