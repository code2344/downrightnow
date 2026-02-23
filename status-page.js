const defaultConfig = {
  badge: "Status",
  title: "Service Update",
  message: "We are currently working on an update.",
  details: "Please check back shortly.",
  businessName: ""
};

const config = { ...defaultConfig, ...(window.STATUS_PAGE_CONFIG || {}) };

const params = new URLSearchParams(window.location.search);
const businessFromQuery = (params.get("business") || "").trim();

document.body.classList.add("theme-midnight");

document.getElementById("statusBadge").textContent = config.badge;
document.getElementById("statusTitle").textContent = config.title;
document.getElementById("statusMessage").textContent = config.message;
document.getElementById("statusDetails").textContent = config.details;

const year = new Date().getFullYear();
const footer = document.getElementById("footerContent");

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const businessName = businessFromQuery || (config.businessName || "").trim();

if (businessName) {
  footer.innerHTML = `© ${year} ${escapeHtml(businessName)} | Site under development by <a href="https://scstudios.tech" target="_blank" rel="noopener">SuperCode Studios</a>`;
} else {
  footer.innerHTML = `© ${year} <a href="https://scstudios.tech" target="_blank" rel="noopener">scstudios.tech</a>`;
}
