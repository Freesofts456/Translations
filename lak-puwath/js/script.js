document.addEventListener("DOMContentLoaded",()=>{
const t=document.getElementById("today");
if(t)t.textContent=new Date().toLocaleDateString("si-LK",{year:"numeric",month:"long",day:"numeric",weekday:"long"});
const i=document.getElementById("searchInput"),b=document.getElementById("searchButton"),g=document.getElementById("newsGrid"),n=document.getElementById("noResults");
if(!i||!g)return;
const run=()=>{const q=i.value.trim().toLowerCase();let c=0;
g.querySelectorAll(".news-card").forEach(a=>{const m=a.textContent.toLowerCase().includes(q);a.hidden=!m;if(m)c++});
n.hidden=c>0};
i.addEventListener("input",run);b.addEventListener("click",run);
});
