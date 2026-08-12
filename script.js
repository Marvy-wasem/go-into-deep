document.addEventListener("DOMContentLoaded",()=>{
const d=siteData||{}, meetings=d.meetings||[], conferences=d.conferences||[], books=d.books||[];
document.getElementById("year").textContent=new Date().getFullYear();
const m=document.getElementById("meetings-list");
m.innerHTML=meetings.length?meetings.map((x,i)=>`<article class="card"><div><div class="top"><span class="num">MEETING ${e(x.number||String(i+1).padStart(2,"0"))}</span><span class="date">${e(x.date||"")}</span></div><h3>${e(x.title||"")}</h3><div class="meta">${e(x.speaker||"")}</div></div><a class="listen" href="${a(x.link)}" target="_blank" rel="noopener">🎧 الاستماع للتسجيل</a></article>`).join(""):'<div class="empty">لسه مفيش لقاءات مضافة 🎧</div>';
const c=document.getElementById("conferences-grid");
c.innerHTML=conferences.length?conferences.map(x=>`<article class="conference"><div class="photo">${x.image?`<img src="${a(x.image)}" alt="">`:"📸 صورة المؤتمر"}</div><div class="info"><h3>${e(x.title||"")}</h3><small>${e(x.date||"")}</small></div></article>`).join(""):'<div class="empty">📸 هنا هنضيف صور المؤتمرات الجماعية لاحقًا.</div>';
const b=document.getElementById("books-grid");
b.innerHTML=books.length?books.map(x=>`<article class="card"><div><div class="bookicon">PDF</div><h3>${e(x.title||"")}</h3><p>${e(x.description||"")}</p></div><a class="bookbtn" href="${a(x.link)}" target="_blank" rel="noopener">📖 فتح الكتاب</a></article>`).join(""):'<div class="empty">📚 هنا هنضيف الكتب المهمة وروابط الـPDF.</div>';
if(d.social?.instagram&&d.social.instagram!=="#")document.getElementById("instagram").href=d.social.instagram;
if(d.social?.youtube&&d.social.youtube!=="#")document.getElementById("youtube").href=d.social.youtube;
});
function e(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
function a(v){return e(v).replace(/`/g,"&#96;")}
