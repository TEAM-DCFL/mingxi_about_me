// Edit this object first to replace the demo content with your own profile.
const profileConfig = {
  name: {
    zh: "明曦",
    en: "mingxi",
  },
  title: {
    zh: "AI出海创业者 · 技术极客",
    en: "AI Global Builder · Tech Geek",
  },
  description: {
    zh: "技术出身，主做全栈独立开发与 AI 应用落地，也持续关注产品设计以及营销增长与商业化验证。",
    en: "With a technical background, I mainly focus on full-stack development and AI application delivery, while continuing to work on product design, growth, and commercialization validation.",
  },
  summary: {
    zh: "我的产品价值，是从解决实际问题出发，把AI技术转化为用户愿意使用、愿意传播、愿意付费的体验。我既能独立完成从产品设计、前端开发到上线迭代的完整闭环，也擅长用工程化与 AI 工作流提升效率，把产品更快推向全球市场。",
    en: "My product value starts from solving real problems and turning AI technology into experiences users want to use, share, and pay for. I can independently complete the full loop from product design and frontend development to launch and iteration, and I use engineering discipline and AI workflows to move products to global markets faster.",
  },
  location: {
    zh: "中国 / 上海",
    en: "China / Shanghai",
  },
  githubUrl: "https://team-dcfl.github.io/mingxi_about_me/",
  tags: ["Full Stack", "Algorithm", "Hardware", "Product Design", "Marketing"],
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
    focusValue: "独立开发、AI出海、产品设计、营销",
    locationLabel: "所在地",
    statusLabel: "状态",
    statusValue: "寻找投资人，开放合作中",
    aboutKicker: "关于我",
    aboutTitle: "技术、产品与出海实践",
    summaryTitle: "产品价值",
    stackTitle: "能力矩阵",
    feature1: "全栈开发",
    feature2: "AI 应用落地",
    feature3: "产品设计",
    feature4: "营销增长与商业化验证",
    projectsKicker: "代表网站",
    projectsTitle: "代表作品模块展示",
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
    focusValue: "Indie Development, AI Global, Product Design, Marketing",
    locationLabel: "Base",
    statusLabel: "Status",
    statusValue: "Seeking investors and open to collaboration",
    aboutKicker: "About",
    aboutTitle: "Technical, Product, and Global Build",
    summaryTitle: "Product Value",
    stackTitle: "Capability Matrix",
    feature1: "Full-stack development",
    feature2: "AI application delivery",
    feature3: "Product design",
    feature4: "Marketing growth and commercial validation",
    projectsKicker: "Featured Sites",
    projectsTitle: "Representative website modules",
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
  profileLocation.textContent = profileConfig.location[state.language];
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
