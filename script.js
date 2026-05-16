// Edit this object first to replace the demo content with your own profile.
const profileConfig = {
  name: {
    zh: "明曦",
    en: "mingxi",
  },
  title: {
    zh: "前端产品与增长实践者",
    en: "Frontend Product and Growth Builder",
  },
  description: {
    zh: "把产品表达、页面体验与执行落地整合成一个清晰的个人主页入口。",
    en: "A clear personal homepage that brings together product storytelling, UX polish, and execution.",
  },
  summary: {
    zh: "这个主页名片用于快速展示你的方向、能力和代表作品，适合放在 GitHub 首页、作品集导航页或个人介绍链接中。",
    en: "This homepage card quickly presents your direction, strengths, and flagship work for GitHub, portfolio navigation, or intro links.",
  },
  location: "Remote / Global",
  githubUrl: "https://team-dcfl.github.io/mingxi_about_me/",
  tags: ["Frontend", "Product", "Growth", "AI Workflow"],
};

const projects = [
  {
    id: "coverx",
    badge: {
      zh: "AI 创意工具",
      en: "AI Creative Tool",
    },
    title: "CoverX",
    url: "https://www.coverx.dev/",
    description: {
      zh: "AI 封面生成产品，聚焦爆款视频封面创作，支持多种输出比例与视觉风格。",
      en: "An AI cover generation product focused on viral video thumbnails with multiple output ratios and styles.",
    },
    tags: ["AI", "Creative", "Image Workflow"],
  },
  {
    id: "cylireacher",
    badge: {
      zh: "独立站检索平台",
      en: "Independent Site Search",
    },
    title: "CyliReacher",
    url: "https://www.cylireacher.com/",
    description: {
      zh: "独立站发现与检索平台，帮助用户寻找全球优质品牌、店铺与供应线索。",
      en: "A discovery platform for independent stores, helping users find quality brands, suppliers, and business leads globally.",
    },
    tags: ["Search", "DTC", "Data Product"],
  },
];

const messages = {
  zh: {
    brand: "个人主页名片",
    eyebrow: "GitHub 主页",
    githubCta: "访问 GitHub",
    workCta: "查看代表作品",
    focusLabel: "方向",
    focusValue: "产品、增长、AI",
    locationLabel: "所在地",
    statusLabel: "状态",
    statusValue: "开放合作中",
    aboutKicker: "关于我",
    aboutTitle: "带有产品表达的主页名片",
    summaryTitle: "主页简介",
    stackTitle: "当前页面支持",
    feature1: "支持中英双语切换",
    feature2: "支持明亮和黑暗模式切换",
    feature3: "支持代表网站模块嵌入",
    feature4: "支持桌面端和移动端响应式布局",
    projectsKicker: "代表网站",
    projectsTitle: "代表作品模块展示",
    projectsDesc: "每个模块都包含站点说明、标签与实时嵌入区域。",
    embedFallbackTitle: "如果目标站点禁止 iframe 嵌入，请点击下方按钮直接访问。",
    openSite: "打开网站",
    openSiteShort: "访问站点",
    themeToggleLight: "切换浅色",
    themeToggleDark: "切换深色",
    themeButton: "明亮 / 黑暗",
    langButton: "中文 / EN",
  },
  en: {
    brand: "Personal Card",
    eyebrow: "GitHub Homepage",
    githubCta: "Visit GitHub",
    workCta: "Featured Work",
    focusLabel: "Focus",
    focusValue: "Product, Growth, AI",
    locationLabel: "Base",
    statusLabel: "Status",
    statusValue: "Open to collaboration",
    aboutKicker: "About",
    aboutTitle: "A homepage card with product context",
    summaryTitle: "Profile Summary",
    stackTitle: "What this page supports",
    feature1: "Switch between Chinese and English",
    feature2: "Switch between light and dark mode",
    feature3: "Embed featured website modules",
    feature4: "Responsive layout for desktop and mobile",
    projectsKicker: "Featured Sites",
    projectsTitle: "Representative website modules",
    projectsDesc: "Each module includes project context, tags, and a live embed area.",
    embedFallbackTitle: "If the target site blocks iframe embedding, use the button below to open it directly.",
    openSite: "Open Site",
    openSiteShort: "Visit Site",
    themeToggleLight: "Switch to light mode",
    themeToggleDark: "Switch to dark mode",
    themeButton: "Light / Dark",
    langButton: "中文 / EN",
  },
};

const state = {
  language: getInitialLanguage(),
  theme: getInitialTheme(),
};

const htmlElement = document.documentElement;
const bodyElement = document.body;
const langToggle = document.getElementById("lang-toggle");
const themeToggle = document.getElementById("theme-toggle");
const profileName = document.getElementById("profile-name");
const profileTitle = document.getElementById("profile-title");
const profileDescription = document.getElementById("profile-description");
const profileLocation = document.getElementById("profile-location");
const profileSummary = document.getElementById("profile-summary");
const profileTags = document.getElementById("profile-tags");
const githubLink = document.getElementById("github-link");
const projectsGrid = document.getElementById("projects-grid");

function getInitialLanguage() {
  const stored = window.localStorage.getItem("homepage-language");
  if (stored === "zh" || stored === "en") {
    return stored;
  }

  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function getInitialTheme() {
  const stored = window.localStorage.getItem("homepage-theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyLanguage() {
  const copy = messages[state.language];

  htmlElement.lang = state.language === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[key]) {
      element.textContent = copy[key];
    }
  });

  langToggle.textContent = copy.langButton;
  themeToggle.textContent = copy.themeButton;

  profileName.textContent = profileConfig.name[state.language];
  profileTitle.textContent = profileConfig.title[state.language];
  profileDescription.textContent = profileConfig.description[state.language];
  profileLocation.textContent = profileConfig.location;
  profileSummary.textContent = profileConfig.summary[state.language];
  githubLink.href = profileConfig.githubUrl;

  renderTags();
  renderProjects();
}

function applyTheme() {
  bodyElement.dataset.theme = state.theme;
  themeToggle.setAttribute(
    "aria-label",
    state.theme === "dark"
      ? messages[state.language].themeToggleLight
      : messages[state.language].themeToggleDark
  );
}

function renderTags() {
  profileTags.innerHTML = "";
  profileConfig.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    profileTags.appendChild(span);
  });
}

function renderProjects() {
  const template = document.getElementById("project-template");
  const copy = messages[state.language];

  projectsGrid.innerHTML = "";

  projects.forEach((project) => {
    const fragment = template.content.cloneNode(true);

    fragment.querySelector(".project-badge").textContent = project.badge[state.language];
    fragment.querySelector(".project-title").textContent = project.title;
    fragment.querySelector(".project-description").textContent = project.description[state.language];

    const projectLink = fragment.querySelector(".project-link");
    projectLink.href = project.url;
    projectLink.textContent = copy.openSiteShort;

    const iframe = fragment.querySelector(".project-embed");
    iframe.src = project.url;
    iframe.title = `${project.title} preview`;

    const fallbackLink = fragment.querySelector(".embed-fallback-link");
    fallbackLink.href = project.url;

    const tagsRoot = fragment.querySelector(".project-tags");
    project.tags.forEach((tag) => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = tag;
      tagsRoot.appendChild(span);
    });

    projectsGrid.appendChild(fragment);
  });
}

function switchLanguage() {
  state.language = state.language === "zh" ? "en" : "zh";
  window.localStorage.setItem("homepage-language", state.language);
  applyLanguage();
  applyTheme();
}

function switchTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  window.localStorage.setItem("homepage-theme", state.theme);
  applyTheme();
}

langToggle.addEventListener("click", switchLanguage);
themeToggle.addEventListener("click", switchTheme);

applyLanguage();
applyTheme();
