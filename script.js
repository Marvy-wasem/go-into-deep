document.addEventListener("DOMContentLoaded", () => {
  const d = siteData || {};
  const meetings = d.meetings || [];
  const conferences = d.conferences || [];
  const books = d.books || [];

  document.getElementById("year").textContent = new Date().getFullYear();

  // اللقاءات الصوتية
  const meetingsList = document.getElementById("meetings-list");

  meetingsList.innerHTML = meetings.length
    ? meetings.map((x, i) => `
      <article class="card">
        <div>
          <div class="top">
            <span class="num">
              MEETING ${escapeHTML(x.number || String(i + 1).padStart(2, "0"))}
            </span>
            <span class="date">${escapeHTML(x.date || "")}</span>
          </div>

          <h3>${escapeHTML(x.title || "")}</h3>

          <div class="meta">
            ${escapeHTML(x.speaker || "")}
          </div>
        </div>

        <a
          class="listen"
          href="${escapeAttr(x.link)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          🎧 الاستماع للتسجيل
        </a>
      </article>
    `).join("")
    : '<div class="empty">لسه مفيش لقاءات مضافة 🎧</div>';


  // المؤتمرات
  const conferencesGrid = document.getElementById("conferences-grid");

  conferencesGrid.innerHTML = conferences.length
    ? conferences.map(x => `
      <article class="conference">

        <div class="photo">
          ${
            x.image
              ? <img src="${escapeAttr(x.image)}" alt="${escapeAttr(x.title || "")}">
              : "📸 صورة المؤتمر"
          }
        </div>

        <div class="info">
          <h3>${escapeHTML(x.title || "")}</h3>
          <small>${escapeHTML(x.date || "")}</small>
        </div>

      </article>
    `).join("")
    : '<div class="empty">📸 هنا هنضيف صور المؤتمرات الجماعية لاحقًا.</div>';


  // الكتب
  const booksGrid = document.getElementById("books-grid");

  booksGrid.innerHTML = books.length
    ? books.map(x => `
      <article class="card book-card">

        <div>

          ${
            x.cover
              ? `
                <div class="book-cover">
                  <img
                    src="${escapeAttr(x.cover)}"
                    alt="${escapeAttr(x.title || "")}"
                  >
                </div>
              `
              : `
                <div class="bookicon">PDF</div>
              `
          }

          <h3>${escapeHTML(x.title || "")}</h3>

          <p>
            ${escapeHTML(x.description || "")}
          </p>

        </div>

        <a
          class="bookbtn"
          href="${escapeAttr(x.link)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          📖 قراءة الكتاب
        </a>

      </article>
    `).join("")
    : '<div class="empty">📚 هنا هنضيف الكتب المهمة وروابط الـPDF.</div>';


  // السوشيال
  if (d.social?.instagram && d.social.instagram !== "#") {
    document.getElementById("instagram").href = d.social.instagram;
  }

  if (d.social?.youtube && d.social.youtube !== "#") {
    document.getElementById("youtube").href = d.social.youtube;
  }
});


// حماية بسيطة للنصوص
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function escapeAttr(value) {
  return escapeHTML(value).replace(/`/g, "&#96;");
}
