// script.js
const appListEl = document.getElementById("app-list");

/**
 * Build company header block
 */
function renderCompanyHeader(company) {
  const link = document.createElement("a");
  link.href = company.link || "#";
  link.className = "company-header-link";
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  const header = document.createElement("div");
  header.className = "company-header";

  const logo = document.createElement("img");
  logo.src = company.logo;
  logo.alt = company.name;
  logo.className = "company-logo";

  const text = document.createElement("div");

  const name = document.createElement("h2");
  name.className = "company-name";
  name.textContent = company.name;

  const desc = document.createElement("p");
  desc.className = "company-desc";
  desc.textContent = company.description;

  text.appendChild(name);
  text.appendChild(desc);

  header.appendChild(logo);
  header.appendChild(text);

  const shareBtn = renderShareButton(() => {
    const url = new URL(window.location.href);
    url.hash = `#${company.id}`;
    return url.toString();
  });

  header.appendChild(shareBtn);

  link.appendChild(header);

  return link;
}

/**
 * App header block (.app-head style)
 */
function renderAppHead(app, shareCallback) {
  const head = document.createElement("div");
  head.className = "app-head";

  const icon = document.createElement("img");
  icon.src = app.icon;
  icon.alt = `${app.name} icon`;
  icon.className = "app-icon";
  icon.loading = "lazy";

  const meta = document.createElement("div");
  meta.className = "app-meta";

  const title = document.createElement("h3");
  title.className = "app-title";
  title.textContent = app.name;

  const tagline = document.createElement("p");
  tagline.className = "tagline";
  tagline.textContent = app.tagline;

  meta.appendChild(title);
  meta.appendChild(tagline);

  const tagsContainer = document.createElement("div");
  app.tags?.forEach((tag) => {
    const pill = document.createElement("span");
    pill.className = "pill";
    pill.textContent = tag;
    tagsContainer.appendChild(pill);
  });

  meta.appendChild(tagsContainer);

  const actions = document.createElement("div");
  actions.className = "actions";

  if (app.links?.ios) {
    const btn = document.createElement("a");
    btn.href = app.links.ios;
    btn.target = "_blank";
    btn.className = "btn btn-primary";
    btn.textContent = "iOS";
    actions.appendChild(btn);
  }
  if (app.links?.android) {
    const btn = document.createElement("a");
    btn.href = app.links.android;
    btn.target = "_blank";
    btn.className = "btn btn-secondary";
    btn.textContent = "Android";
    actions.appendChild(btn);
  }

  const shareBtn = renderShareButton(() => {
    const url = new URL(window.location.href);
    url.hash = `#${company.id}`;
    return url.toString();
  });

  actions.appendChild(shareBtn);

  head.appendChild(icon);
  head.appendChild(meta);
  head.appendChild(actions);

  return head;
}

function renderShareButton(textCallback) {
  const shareBtn = document.createElement("button");
  shareBtn.className = "share-btn btn";
  shareBtn.title = "Copy link to this section";
  shareBtn.innerHTML = "🔗";
  shareBtn.ariaLabel = "Copy link";
  shareBtn.type = "button";
  shareBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const text = textCallback();
    copyAndNotify(text);
  });

  return shareBtn;
}

function copyAndNotify(text) {
  if (typeof text !== "string") {
    console.error("Invalid text:", text);
    return;
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(text)
      .then(() => console.log("Copied:", text))
      .catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";

  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  console.log("Copied (fallback):", text);
}

/**
 * App summary block
 */
function renderAppSummary(summary) {
  const p = document.createElement("p");
  p.className = "app-summary";
  p.textContent = summary;
  return p;
}

/**
 * Screenshot row block (.shot-row)
 */
/**
 * Unified media row block (screenshots + videos)
 * type: "phone" | "tablet"
 */
function renderMediaRow(items, type) {
  const row = document.createElement("div");
  row.className = "shot-row";

  const isPortrait = type === "phone";

  items.forEach((item) => {
    const shot = document.createElement("div");
    shot.className = `shot ${isPortrait ? "shot-portrait" : "shot-landscape"}`;

    if (typeof item === "string") {
      // Assume image
      const img = document.createElement("img");
      img.src = item;
      img.alt = "Screenshot";
      img.loading = "lazy";
      img.style.height = "100%";
      img.style.width = "100%";
      shot.appendChild(img);
    } else if (item.type === "video" && item.src) {
      // Video object
      const vid = document.createElement("video");
      vid.src = item.src;
      vid.controls = true;
      vid.playsInline = true;
      vid.muted = false;
      vid.autoplay = false;
      vid.style.height = "100%";
      vid.style.width = "100%";

      shot.appendChild(vid);
    }

    row.appendChild(shot);
  });

  const block = document.createElement("div");
  block.className = "shots-block";
  block.appendChild(row);

  return block;
}

/**
 * App card (.app-section) renderer
 */
function renderAppCard(app, companyId) {
  const section = document.createElement("article");
  section.className = "app-section";
  section.id = `${companyId}/${app.id}`;

  const head = renderAppHead(app, (e) => {
    e.preventDefault();
    e.stopPropagation();
    const url = new URL(window.location.href);
    url.hash = `#${app.companyId}/${app.id}`;
    copyAndNotify(url.toString());
  });
  section.appendChild(head);

  const main = document.createElement("div");
  main.className = "app-main";

  if (app.summary) {
    const summary = renderAppSummary(app.summary);
    main.appendChild(summary);
  }

  // Build video‑item (if any)
  const videoItems = (app.videos || []).map((src) => ({ type: "video", src }));

  // Decide first row (tablet first, then phone)
  let firstRowRendered = false;

  // Tablet row (if any)
  if (app.tablet_screenshots?.length) {
    const tabletItems = [...app.tablet_screenshots];

    // If this is the first row AND there are videos, prepend video
    if (!firstRowRendered && videoItems.length > 0) {
      tabletItems.unshift(...videoItems);
      firstRowRendered = true;
    }

    const tabletRow = renderMediaRow(tabletItems, "tablet");
    main.appendChild(tabletRow);
  }

  // Phone row (if any)
  if (app.phone_screenshots?.length) {
    const phoneItems = [...app.phone_screenshots];

    // If no row has been rendered yet AND there are videos, prepend video
    if (!firstRowRendered && videoItems.length > 0) {
      phoneItems.unshift(...videoItems);
      firstRowRendered = true;
    }

    const phoneRow = renderMediaRow(phoneItems, "phone");
    main.appendChild(phoneRow);
  }

  section.appendChild(main);

  return section;
}

/**
 * Company section renderer
 */
function renderCompanySection(company) {
  const div = document.createElement("section");
  div.className = "company-section";
  div.id = company.id;

  const header = renderCompanyHeader(company);
  div.appendChild(header);

  company.apps.forEach((app) => {
    const card = renderAppCard(app, company.id);
    div.appendChild(card);
  });

  return div;
}

/**
 * Render all companies
 */
function renderCompanies() {
  const list = document.getElementById("app-list");
  list.innerHTML = "";

  companiesData.forEach((company) => {
    const section = renderCompanySection(company);
    list.appendChild(section);
  });
}

/**
 * Deep‑link scroll with nested / support
 */
function scrollToHash() {
  const hash = window.location.hash.slice(1);
  if (!hash) return;

  const [companyId, appId] = hash.split("/");

  const companyEl = document.getElementById(companyId);
  if (companyEl) {
    companyEl.scrollIntoView({ behavior: "smooth" });
  }

  if (appId) {
    setTimeout(() => {
      const appEl = document.getElementById(`${companyId}/${appId}`);
      if (appEl) {
        appEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 300);
  }
}

// Render and wire up
window.addEventListener("load", () => {
  renderCompanies();
  window.addEventListener("hashchange", scrollToHash);
  scrollToHash();
});
