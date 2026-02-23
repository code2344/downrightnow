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
  details: "Please check back shortly."
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

const selector = document.getElementById("themeSelector");
THEMES.forEach((theme) => {
  const option = document.createElement("option");
  option.value = theme.id;
  option.textContent = theme.label;
  option.selected = theme.id === activeTheme;
  selector.appendChild(option);
});

selector.addEventListener("change", (event) => {
  const nextTheme = event.target.value;
  const nextParams = new URLSearchParams(window.location.search);
  nextParams.set("theme", nextTheme);
  window.location.search = nextParams.toString();
});

document.getElementById("year").textContent = new Date().getFullYear();
