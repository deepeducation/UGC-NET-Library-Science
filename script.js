/* ═══════════════════════════════════════════════════════════
   UGC NET LIS Unit 1.4 — Information Science & Knowledge Society
   JavaScript — 3 Functions
   ═══════════════════════════════════════════════════════════ */

/* ── 1. Reading Progress Bar ────────────────────────────── */
window.addEventListener('scroll', () => {
  const d = document.documentElement;
  const pct = (d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100;
  document.getElementById('read-bar').style.width = pct + '%';
});

/* ── 2. FAQ Accordion Toggle ────────────────────────────── */
function toggleFaq(el) {
  el.parentElement.classList.toggle('open');
}

/* ── 3. Schema Code Copy to Clipboard ───────────────────── */
function copySchema() {
  const text = document.getElementById('schemaCode').innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.copy-btn');
    btn.textContent = '✅ Copied!';
    setTimeout(() => btn.textContent = '📋 Schema Code Copy करें', 2600);
  });
}
