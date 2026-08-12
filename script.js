document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("meetings-list");
  const count = document.getElementById("meeting-count");

  if (!Array.isArray(meetings)) {
    list.innerHTML = '<div class="empty">تعذر تحميل اللقاءات.</div>';
    return;
  }

  count.textContent = `${meetings.length} لقاء`;
  list.innerHTML = meetings.map((m, i) => `
    <article class="meeting">
      <div class="meeting-info">
        <p class="eyebrow">لقاء ${m.number || String(i + 1).padStart(2, "0")}</p>
        <h3>${escapeHtml(m.title)}</h3>
        <div class="meta">${escapeHtml(m.speaker)} • ${escapeHtml(m.date)}</div>
      </div>
      <a class="listen" href="${m.link}" target="_blank" rel="noopener">🎧 الاستماع للتسجيل</a>
    </article>
  `).join("");
});

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[char]));
}
