/* SIM - Security Incident Mapping : shared client logic
   Uses browser localStorage to simulate a backend/database for this mini prototype. */

const STORAGE_KEY = "sim_incidents";

const CATEGORY_COLORS = {
  "Theft / Stealing": "#F2A93B",
  "Assault / Stabbing": "#D62828",
  "Sexual Assault": "#D62828",
  "Kidnapping": "#D62828",
  "Cultism-related Violence": "#D62828",
  "Suspicious Activity": "#F2A93B",
  "Other": "#A9B2BC",
};

function seedIfEmpty() {
  const existing = localStorage.getItem(STORAGE_KEY);
  if (existing) return;
  const now = Date.now();
  const seed = [
    {
      id: "SIM-1001",
      category: "Theft / Stealing",
      description: "Laptop bag snatched from a student walking near the back gate around 8:40pm.",
      location: "Back Gate, near Faculty of Science",
      datetime: new Date(now - 1000 * 60 * 60 * 5).toISOString(),
      anonymous: false,
      status: "Verified",
      evidence: false,
    },
    {
      id: "SIM-1002",
      category: "Suspicious Activity",
      description: "Unknown persons loitering around the female hostel fence late at night for the past two days.",
      location: "Female Hostel Block C perimeter",
      datetime: new Date(now - 1000 * 60 * 60 * 20).toISOString(),
      anonymous: true,
      status: "Pending",
      evidence: false,
    },
    {
      id: "SIM-1003",
      category: "Assault / Stabbing",
      description: "Altercation between two groups escalated; one student sustained a knife injury.",
      location: "Off-campus lodge, Ale Street",
      datetime: new Date(now - 1000 * 60 * 60 * 46).toISOString(),
      anonymous: true,
      status: "Escalated",
      evidence: true,
    },
  ];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
}

function getIncidents() {
  seedIfEmpty();
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveIncident(incident) {
  const all = getIncidents();
  all.unshift(incident);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

function nextCaseId() {
  const all = getIncidents();
  const max = all.reduce((m, i) => {
    const n = parseInt((i.id || "SIM-1000").split("-")[1], 10);
    return isNaN(n) ? m : Math.max(m, n);
  }, 1000);
  return "SIM-" + (max + 1);
}

function fmtTime(iso) {
  const d = new Date(iso);
  return d.toLocaleString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

function badgeClass(status) {
  if (status === "Verified") return "badge-verified";
  if (status === "Escalated") return "badge-verified";
  return "badge-pending";
}

/* ---------------- Report form logic ---------------- */
function initReportForm() {
  const form = document.getElementById("report-form");
  if (!form) return;

  const chips = document.querySelectorAll(".chip");
  const categoryInput = document.getElementById("category-value");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("selected"));
      chip.classList.add("selected");
      categoryInput.value = chip.dataset.category;
    });
  });

  const anonCheck = document.getElementById("anonymous-check");
  const nameField = document.getElementById("reporter-name");
  anonCheck.addEventListener("change", () => {
    nameField.disabled = anonCheck.checked;
    if (anonCheck.checked) nameField.value = "";
  });

  const dt = document.getElementById("incident-datetime");
  if (dt && !dt.value) {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    dt.value = now.toISOString().slice(0, 16);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const category = categoryInput.value;
    const description = document.getElementById("description").value.trim();
    const location = document.getElementById("location").value.trim();
    const datetime = dt.value;
    const anonymous = anonCheck.checked;
    const evidenceFile = document.getElementById("evidence").files.length > 0;

    if (!category || !description || !location) {
      showMsg("Please select a category and fill in the description and location.", false);
      return;
    }

    const incident = {
      id: nextCaseId(),
      category,
      description,
      location,
      datetime: new Date(datetime).toISOString(),
      anonymous,
      status: "Pending",
      evidence: evidenceFile,
    };
    saveIncident(incident);

    showMsg(`Report ${incident.id} submitted. Campus Security has been notified and will review it shortly.`, true);
    form.reset();
    chips.forEach((c) => c.classList.remove("selected"));
    categoryInput.value = "";
  });
}

function showMsg(text, ok) {
  const msg = document.getElementById("form-msg");
  msg.textContent = text;
  msg.className = "form-msg " + (ok ? "ok" : "");
  msg.style.display = "block";
  msg.style.color = ok ? "" : "#D62828";
}

/* ---------------- Feed logic ---------------- */
function initFeed() {
  const list = document.getElementById("incident-list");
  if (!list) return;

  const catFilter = document.getElementById("filter-category");
  const statusFilter = document.getElementById("filter-status");

  function render() {
    const all = getIncidents().sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
    const cat = catFilter.value;
    const status = statusFilter.value;
    const filtered = all.filter(
      (i) => (cat === "all" || i.category === cat) && (status === "all" || i.status === status)
    );

    if (filtered.length === 0) {
      list.innerHTML = `<div class="empty-state">No incidents match this filter yet. Nothing reported here — that's a good sign, but stay alert.</div>`;
      return;
    }

    list.innerHTML = filtered
      .map((i) => {
        const color = CATEGORY_COLORS[i.category] || "#A9B2BC";
        return `
        <div class="incident" style="border-left-color:${color}">
          <div class="incident-head">
            <span class="incident-id">${i.id}</span>
            <span class="incident-cat" style="color:${color}">${i.category}</span>
            <span class="incident-time">${fmtTime(i.datetime)}</span>
          </div>
          <p class="desc">${escapeHtml(i.description)}</p>
          <div class="incident-meta">
            <span>📍 ${escapeHtml(i.location)}</span>
            <span class="badge ${badgeClass(i.status)}">${i.status}</span>
            ${i.anonymous ? '<span class="badge badge-anon">Anonymous report</span>' : ""}
            ${i.evidence ? "<span>📎 Evidence attached</span>" : ""}
          </div>
        </div>`;
      })
      .join("");
  }

  catFilter.addEventListener("change", render);
  statusFilter.addEventListener("change", render);
  render();
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------------- Home stats ---------------- */
function initHomeStats() {
  const el = document.getElementById("stat-total");
  if (!el) return;
  const all = getIncidents();
  el.textContent = all.length;
  document.getElementById("stat-verified").textContent = all.filter((i) => i.status === "Verified" || i.status === "Escalated").length;
  document.getElementById("stat-anon").textContent = all.filter((i) => i.anonymous).length;
}

document.addEventListener("DOMContentLoaded", () => {
  initHomeStats();
  initReportForm();
  initFeed();
});
