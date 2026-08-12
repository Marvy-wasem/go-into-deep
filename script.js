document.addEventListener("DOMContentLoaded",function(){
const list=document.getElementById("meetings-list"),count=document.getElementById("meeting-count");
document.getElementById("year").textContent=new Date().getFullYear();
if(!Array.isArray(meetings)||!meetings.length){list.innerHTML='<div class="empty">لسه هنضيف اللقاءات هنا 🎧</div>';return}
count.textContent=meetings.length+(meetings.length===1?" لقاء":" لقاءات");
list.innerHTML=meetings.map((m,i)=>`<article class="meeting"><div><div class="num">MEETING ${m.number||String(i+1).padStart(2,"0")}</div><h3>${safe(m.title)}</h3><div class="meta">${safe(m.speaker)} • ${safe(m.date)}</div></div><a class="listen" href="${safe(m.link)}" target="_blank" rel="noopener">🎧 الاستماع للتسجيل</a></article>`).join("");
});
function safe(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
