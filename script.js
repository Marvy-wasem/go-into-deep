document.addEventListener("DOMContentLoaded",function(){
 const list=document.getElementById("meetings-list");
 const count=document.getElementById("meeting-count");
 const featured=document.getElementById("featured-meeting");
 const year=document.getElementById("year");
 if(year) year.textContent=new Date().getFullYear();
 if(!Array.isArray(meetings)||!meetings.length){
   list.innerHTML='<div class="empty">لسه هنضيف اللقاءات هنا 🎧</div>'; return;
 }
 count.textContent=meetings.length;
 const first=meetings[0];
 featured.innerHTML=`<div class="featured-meeting">
   <div class="fm-number">${safe(first.number||"01")}</div>
   <div class="fm-copy"><small>LATEST MEETING • ${safe(first.date)}</small><h3>${safe(first.title)}</h3><p>${safe(first.speaker)}</p></div>
   <a class="fm-btn" href="${safe(first.link)}" target="_blank" rel="noopener">🎧 استمع الآن</a>
 </div>`;
 list.innerHTML=meetings.slice(1).map((m,i)=>`<article class="meeting">
   <div><div class="meeting-number">MEETING ${safe(m.number||String(i+2).padStart(2,"0"))}</div>
   <h3>${safe(m.title)}</h3><div class="meta">${safe(m.speaker)} • ${safe(m.date)}</div></div>
   <a class="listen" href="${safe(m.link)}" target="_blank" rel="noopener">🎧 الاستماع للتسجيل</a>
 </article>`).join("");
 if(!meetings.slice(1).length) list.innerHTML='<div class="empty">أول لقاء موجود فوق — واللقاءات الجديدة هتظهر هنا تلقائيًا ✦</div>';
});
function safe(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
