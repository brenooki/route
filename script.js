// ==========================================
// Barbearia Route 82 — Link na Bio
// ==========================================

// === CONFIGURAÇÕES ===
// Altere aqui se quiser mudar a chave PIX
const PIX_KEY = "CNPJ-DA-BARBEARIA"; // ⚠️ Troque pelo CNPJ real
const PIX_DISPLAY = "Toque para copiar";

// === COPIAR PIX ===
const pixBtn = document.getElementById("pixBtn");
const pixLabel = document.getElementById("pixLabel");
const toast = document.getElementById("toast");

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

async function copyPix() {
  try {
    await navigator.clipboard.writeText(PIX_KEY);
    showToast("✓ PIX copiado!");
    pixLabel.textContent = "Copiado ✓";
    setTimeout(() => (pixLabel.textContent = PIX_DISPLAY), 2500);
  } catch (err) {
    // fallback
    const tmp = document.createElement("textarea");
    tmp.value = PIX_KEY;
    document.body.appendChild(tmp);
    tmp.select();
    try {
      document.execCommand("copy");
      showToast("✓ PIX copiado!");
    } catch (e) {
      showToast("⚠ Não foi possível copiar");
    }
    document.body.removeChild(tmp);
  }
}

pixBtn?.addEventListener("click", copyPix);

// === EFEITO RIPPLE NOS CARDS ===
document.querySelectorAll(".link-card").forEach((card) => {
  card.addEventListener("click", function (e) {
    const rect = card.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255,255,255,0.35);
      pointer-events: none;
      transform: scale(0);
      animation: rippleAnim 0.6s ease-out;
      left: ${e.clientX - rect.left}px;
      top: ${e.clientY - rect.top}px;
      width: 20px;
      height: 20px;
      margin-left: -10px;
      margin-top: -10px;
    `;
    card.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// Injeta keyframe de ripple
const style = document.createElement("style");
style.textContent = `
  @keyframes rippleAnim {
    to {
      transform: scale(20);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// === LOG ===
console.log("%c✂ Route 82 Barbershop ✂", "background:#e63946;color:#fff;padding:8px 16px;font-size:16px;font-weight:bold;");
