const meetingGrid = document.querySelector("#meeting-grid");
const conferenceGrid = document.querySelector("#conference-grid");
const galleryGrid = document.querySelector("#gallery-grid");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modal-content");

meetingGrid.innerHTML = meetings.map(m => `
  <article class="card">
    <div class="card-cover">
      <img src="${m.image}" alt="">
      <span class="badge">لقاء #${m.number}</span>
    </div>
    <div class="card-body">
      <h3>${m.title}</h3>
      <div class="meta">📅 ${m.date} &nbsp; • &nbsp; 🎤 ${m.speaker}</div>
      <p>${m.description}</p>
      <a class="watch" href="${m.link}" onclick="if(this.getAttribute('href')==='#'){event.preventDefault();openMeeting('${escapeHtml(m.title)}','${escapeHtml(m.description)}')}">▶ مشاهدة التسجيل</a>
    </div>
  </article>
`).join("");

conferenceGrid.innerHTML = conferences.map(c => `
  <article class="event">
    <span class="kicker">CONFERENCE</span>
    <h3>${c.title}</h3>
    <b>${c.date}</b>
    <p>${c.description}</p>
  </article>
`).join("");

galleryGrid.innerHTML = gallery.map(g => `
  <div class="gallery-item" onclick="openImage('${g.image}','${escapeHtml(g.caption)}')">
    <img src="${g.image}" alt="${escapeHtml(g.caption)}">
    <div class="caption">${g.caption}</div>
  </div>
`).join("");

function escapeHtml(s){
  return String(s).replace(/'/g,"&#39;").replace(/"/g,"&quot;");
}
function openMeeting(title, desc){
  modalContent.innerHTML = `<h2>${title}</h2><p>${desc}</p><p class="muted">ضع رابط YouTube أو Google Drive الحقيقي في ملف <b>content.js</b> بدل علامة #.</p>`;
  modal.classList.add("show"); modal.setAttribute("aria-hidden","false");
}
function openImage(src, caption){
  modalContent.innerHTML = `<img src="${src}" alt="" style="width:100%;border-radius:12px"><h2>${caption}</h2>`;
  modal.classList.add("show"); modal.setAttribute("aria-hidden","false");
}
document.querySelector("#modal-close").onclick=()=>{modal.classList.remove("show");modal.setAttribute("aria-hidden","true")};
modal.addEventListener("click",e=>{if(e.target===modal){modal.classList.remove("show")}});
document.querySelector(".menu-btn").onclick=()=>document.querySelector("#nav").classList.toggle("open");
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector("#nav").classList.remove("open")));
