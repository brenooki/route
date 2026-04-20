/* =====================================================
   BARBEARIA ROUTE 82 — V2 Scripts
   ===================================================== */

// === CONFIGURAÇÃO ===
const PIX_KEY = "56.451.223/0001-20"; // ⚠️ Troque pelo CNPJ real

// === ELEMENTOS ===
const pixBtn = document.getElementById("pixBtn");
const pixLabel = document.getElementById("pixLabel");
const toast = document.getElementById("toast");

// === TOAST ===
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2400);
}

// === COPIAR PIX ===
async function copyPix() {
  try {
    await navigator.clipboard.writeText(PIX_KEY);
  } catch {
    const tmp = document.createElement("textarea");
    tmp.value = PIX_KEY;
    tmp.style.cssText = "position:fixed;opacity:0";
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);
  }
  showToast("✓ Chave PIX copiada");
  pixLabel.textContent = "Copiado ✓";
  setTimeout(() => (pixLabel.textContent = "Toque para copiar"), 2800);
}

pixBtn?.addEventListener("click", copyPix);

// === HAPTIC FEEDBACK (se disponível) ===
document.querySelectorAll(".link-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (navigator.vibrate) navigator.vibrate(8);
  });
});

// === INTERSECTION OBSERVER para animar no scroll ===
const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -30px 0px" };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar cards de serviço
document.querySelectorAll(".service-item").forEach((el) => observer.observe(el));
