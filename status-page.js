const THEMES = [
  { id: "midnight", label: "Midnight" },
  { id: "sunset", label: "Sunset" },
  { id: "forest", label: "Forest" },
  { id: "ocean", label: "Ocean" },
  { id: "lavender", label: "Lavender" },
  { id: "rose", label: "Rose" },
  { id: "slate", label: "Slate" },
  { id: "neon", label: "Neon" }
];

const defaultConfig = {
  badge: "Status",
  title: "Service Update",
  message: "We are currently working on an update.",
  details: "Please check back shortly.",
  businessName: ""
};

const config = { ...defaultConfig, ...(window.STATUS_PAGE_CONFIG || {}) };

const params = new URLSearchParams(window.location.search);
const themeFromQuery = params.get("theme");
const hasValidTheme = THEMES.some((theme) => theme.id === themeFromQuery);
const activeTheme = hasValidTheme ? themeFromQuery : "midnight";

document.body.classList.add(`theme-${activeTheme}`);

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

const businessName = (config.businessName || "").trim();

if (businessName) {
  footer.innerHTML = `© ${year} ${escapeHtml(businessName)} | Site under development by <a href="https://scstudios.tech" target="_blank" rel="noopener">SuperCode Studios</a>`;
} else {
  footer.innerHTML = `© ${year} <a href="https://scstudios.tech" target="_blank" rel="noopener">scstudios.tech</a>`;
}
