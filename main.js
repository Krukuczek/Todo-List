(()=>{"use strict";function e(e,t,n,s,d){this.title=e,this.description=t,this.time=n,this.priority=s,this.done=Boolean(d)}let t=new e("cleaning","I need clean my room","today","important","0");console.log(t);let n=new e("program","I need clean my room","today","important","0");console.log(n),document.getElementById("navbarButton").addEventListener("click",(function(){const e=document.getElementById("navbar");e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")})),document.getElementById("circle").addEventListener("click",(function(){const e=document.getElementById("heading"),t=document.getElementById("mainContainer");"moon"==circle.classList?(circle.classList.remove("moon"),circle.classList.add("sun"),e.classList.remove("night"),e.classList.add("day"),t.classList.remove("night"),t.classList.add("day")):(circle.classList.remove("sun"),circle.classList.add("moon"),e.classList.remove("day"),e.classList.add("night"),t.classList.remove("day"),t.classList.add("night"))})),document.getElementById("newTaskButton").addEventListener("click",(function(){let e=document.createElement("div");e.id="taskWindow";let t=document.createElement("div");t.id="taskContainer",t.classList.add(document.getElementById("heading").classList.value),e.appendChild(t),document.getElementById("mainContainer").appendChild(e)})),document.getElementById("newTaskButton").addEventListener("mouseenter",(function(){let e=document.createElement("div");e.classList.add="popUp";let t=document.createElement("span");t.innerText="Create New Task";let n=document.createElement("span");n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path d="M24 12l-10-10v7h-14v6h14v7z"/></svg>',e.appendChild(t),e.appendChild(n),document.getElementById("content").appendChild(e)})),document.getElementById("newTaskButton").addEventListener("mouseleave",(function(){console.log("i'm not hovered")}))})();