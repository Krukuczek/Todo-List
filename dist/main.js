(()=>{"use strict";function e(){if(!document.getElementById("popUp")){let e=document.createElement("div");e.id="popUp",e.innerText="New Task",document.getElementById("content").appendChild(e)}}function t(){if(document.getElementById("popUp")){const e=document.getElementById("popUp");e.classList="remove",setTimeout((()=>{e.remove()}),300)}}function n(e){const t=new Date;let n=String(t.getDate()).padStart(2,"0"),d=String(t.getMonth()+1).padStart(2,"0"),i=t.getFullYear();return"min"===e?`${i}-${d}-${n}`:"max"===e?`${i+1}-${d}-${n}`:void 0}const d=function(){document.getElementById("important").classList="",document.getElementById("normal").classList="",document.getElementById("low").classList="",document.getElementById(this.id).classList="active"},i=function(){document.getElementById("exitNewTask").removeEventListener("click",i),document.getElementById("important").removeEventListener("click",d),document.getElementById("normal").removeEventListener("click",d),document.getElementById("low").removeEventListener("click",d),document.getElementById("submitTask").removeEventListener("click",c);const e=document.getElementById("taskWindow");e?.remove()},c=function(){i()};document.getElementById("navbarButton").addEventListener("click",(function(){const e=document.getElementById("navbar");e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")})),document.getElementById("circle").addEventListener("click",(function(){const e=document.getElementById("heading"),t=document.getElementById("mainContainer");"moon"==circle.classList?(circle.classList.remove("moon"),circle.classList.add("sun"),e.classList.remove("night"),e.classList.add("day"),t.classList.remove("night"),t.classList.add("day")):(circle.classList.remove("sun"),circle.classList.add("moon"),e.classList.remove("day"),e.classList.add("night"),t.classList.remove("day"),t.classList.add("night"))})),document.getElementById("newTaskButton").addEventListener("click",(function(){let e=document.createElement("div");e.id="taskWindow";let t=document.createElement("div");t.id="taskContainer",t.classList.add(document.getElementById("heading").classList.value);let a=document.createElement("form");a.id="taskForm";let l=document.createElement("textarea");l.id="title",l.placeholder="Title",l.setAttribute("maxlength","20"),a.appendChild(l);let m=document.createElement("textarea");m.id="description",m.placeholder="Description",a.appendChild(m);let o=document.createElement("input");o.id="taskDate",o.type="date",o.setAttribute("min",n("min")),o.setAttribute("max",n("max")),a.appendChild(o);let s=document.createElement("div");s.id="priority";let r=document.createElement("div");r.id="important",r.innerText="Important",s.appendChild(r);let u=document.createElement("div");u.id="normal",u.classList="active",u.innerText="Normal",s.appendChild(u);let E=document.createElement("div");E.id="low",E.innerText="Low",s.appendChild(E),a.appendChild(s);let p=document.createElement("input");p.type="button",p.id="submitTask",p.value="Create Task",a.appendChild(p);let v=document.createElement("div");v.id="exitNewTask",v.innerText="X",v.onclick="delNewTaskContainer",t.appendChild(v),t.appendChild(a),e.appendChild(t),document.getElementById("mainContainer").appendChild(e),document.getElementById("exitNewTask").addEventListener("click",i),document.getElementById("important").addEventListener("click",d),document.getElementById("normal").addEventListener("click",d),document.getElementById("low").addEventListener("click",d),document.getElementById("submitTask").addEventListener("click",c)})),document.getElementById("newTaskButton").addEventListener("mouseenter",(function(){e()})),document.getElementById("newTaskButton").addEventListener("mouseleave",(function(){t()})),window.onload=function(){e(),setTimeout((()=>{t()}),5e3)}})();