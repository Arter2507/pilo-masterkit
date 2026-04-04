#!/usr/bin/env node

const {
  intro,
  outro,
  select,
  multiselect,
  text,
  spinner,
  cancel,
  isCancel,
  note,
} = require("@clack/prompts");
const pc = require("picocolors");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const installer = require("../lib/installer");

/**
 * Translations (Bilingual i18n)
 */
const i18n = {
  vi: {
    intro: " THIẾT LẬP HỒ SƠ VẬN HÀNH ",
    langQuestion: "Giao thức ngôn ngữ chính?",
    modeQuestion: "Phạm vi cài đặt:",
    modeAll: "Elite / Đầy đủ",
    modeAllHint: "Triển khai TẤT CẢ các module .agent & AI host",
    modeSelective: "Surgical / Tùy chọn",
    modeSelectiveHint: "Tối ưu hóa theo Stack & IDE mục tiêu",
    stackQuestion: "Stack kỹ thuật mục tiêu (Dùng Space để chọn nhiều):",
    aiQuestion: "Trình điều phối AI mục tiêu:",
    scopeQuestion: "Quy mô dự án?",
    scopePersonal: "Cá nhân",
    scopeSmall: "Nhóm nhỏ (SME)",
    scopeMedium: "Doanh nghiệp vừa",
    scopeEnterprise: "Tập đoàn/Hệ thống lớn",
    typeQuestion: "Loại sản phẩm?",
    typeLanding: "Landing Page / Trang tĩnh",
    typeLandingHint: "Trang giới thiệu, portfolio, chỉ Frontend",
    typeWebapp: "Webapp Tiêu chuẩn (Fullstack)",
    typeWebappHint: "Dashboard, SaaS, CMS, Ecommerce",
    typeCross: "Hệ sinh thái Đa nền tảng",
    typeCrossHint: "Web + Mobile + Desktop dùng chung dữ liệu",
    typeDesktop: "Ứng dụng Desktop (Windows/macOS)",
    typeDesktopHint: "Electron, Tauri, ứng dụng cài đặt",
    typeMobile: "Ứng dụng Di động (Native/Hybrid)",
    typeMobileHint: "Flutter, React Native, SwiftUI",
    typeApi: "API & Backend Hub",
    typeApiHint: "Microservices, Serverless, REST/GraphQL",
    typeLib: "Công cụ & Thư viện (SDK/CLI)",
    typeLibHint: "Package dùng chung, DevTools, CLI",
    typeResearch: "Nghiên cứu & Phân tích dữ liệu",
    typeResearchHint: "Data Science, Machine Learning, Reports",
    deployQuestion: "Nền tảng triển khai mục tiêu?",
    deployVercel: "Vercel",
    deployVercelHint: "Chuẩn cho Next.js, React, Static sites",
    deployGhPages: "GitHub Pages",
    deployGhPagesHint: "Hosting miễn phí cho các trang tĩnh",
    deployDocker: "Docker / Container",
    deployDockerHint: "Đóng gói cho Cloud/VPS/Kubernetes",
    deployCustom: "Tùy chọn (Tự thiết lập)",
    deployCustomHint: "Agent sẽ hỗ trợ hướng dẫn tổng quát",
    nameQuestion: "Đặt tên cho AI Agent của bạn? (Mặc định: Pilo)",
    namePlaceholder: "Pilo",
    installing: "Đang mapping kiến trúc dự án...",
    calibrating: "Đang hiệu chuẩn các gói AI Host...",
    optimizing: "Đang tối ưu hóa quy trình vận hành...",
    generatingWiki: "Đang khởi tạo Wiki lệnh tùy chỉnh...",
    ready: "Giao thức vận hành đã được khởi tạo. Lực lượng đặc nhiệm AI của bạn đã trực tuyến.",
    activateAgent: (name) => `Kích hoạt Agent bằng cách gọi: '${pc.bold(pc.cyan(`Chào ${name}`))}' hoặc '${pc.bold(pc.cyan(`Wakeup ${name}`))}' để bắt đầu phiên làm việc.`,
    wikiReady: "Xem PILO_WIKI.md để tra cứu toàn bộ Slash Commands dành riêng cho dự án của bạn.",
    done: "Hoàn tất!",
    summaryTitle: "TỔNG KẾT TRIỂN KHAI",
    systemReady: "HỆ THỐNG SẴN SÀNG",
    shutdown: "Hệ thống dừng.",
    outro: "⚡ ĐIỀU PHỐI TƯƠNG LAI VỚI KỶ LUẬT VÀ TÂM HỒN ⚡"
  },
  en: {
    intro: " SELECT YOUR OPERATIONAL PROFILE ",
    langQuestion: "Primary Language Protocol?",
    modeQuestion: "Installation Spectrum:",
    modeAll: "Elite / Full",
    modeAllHint: "Deploy ALL .agent modules & ALL AI hosts",
    modeSelective: "Surgical / Selective",
    modeSelectiveHint: "Optimize by Stack & Target IDE",
    stackQuestion: "Target Technical Stack (Use Space to select multiple):",
    aiQuestion: "Target AI Orchestrator:",
    scopeQuestion: "Project Scope?",
    scopePersonal: "Personal",
    scopeSmall: "Small Team",
    scopeMedium: "Medium Enterprise",
    scopeEnterprise: "Large Enterprise/System",
    typeQuestion: "Product Type?",
    typeLanding: "Landing Page / Static Site",
    typeLandingHint: "Portfolio, showcase, frontend-only",
    typeWebapp: "Standard Webapp (Fullstack)",
    typeWebappHint: "Dashboard, SaaS, CMS, Ecommerce",
    typeCross: "Cross-Platform Suite",
    typeCrossHint: "Web + Mobile + Desktop sharing data",
    typeDesktop: "Desktop Application (Windows/macOS)",
    typeDesktopHint: "Electron, Tauri, installable apps",
    typeMobile: "Mobile Application (Native/Hybrid)",
    typeMobileHint: "Flutter, React Native, SwiftUI",
    typeApi: "API & Backend Hub",
    typeApiHint: "Microservices, Serverless, REST/GraphQL",
    typeLib: "Library & Tools (SDK/CLI)",
    typeLibHint: "Shared packages, DevTools, CLI",
    typeResearch: "Research & Data Analysis",
    typeResearchHint: "Data Science, Machine Learning, Reports",
    deployQuestion: "Target Deployment Platform?",
    deployVercel: "Vercel",
    deployVercelHint: "Best for Next.js, React, Static sites",
    deployGhPages: "GitHub Pages",
    deployGhPagesHint: "Free hosting for static sites",
    deployDocker: "Docker / Container",
    deployDockerHint: "Package for Cloud/VPS/Kubernetes",
    deployCustom: "Custom (Self-managed)",
    deployCustomHint: "Agent will provide general guidance",
    nameQuestion: "Name your AI Agent? (Default: Pilo)",
    namePlaceholder: "Pilo",
    installing: "Mapping project architecture...",
    calibrating: "Calibrating AI Host bundles...",
    optimizing: "Optimizing operational workflows...",
    generatingWiki: "Generating custom command wiki...",
    ready: "Operational protocol initialized. Your AI Task Force is now online.",
    activateAgent: (name) => `Activate your Agent by calling: '${pc.bold(pc.cyan(`Hey ${name}`))}' or '${pc.bold(pc.cyan(`Wakeup ${name}`))}' to start the session.`,
    wikiReady: "Check PILO_WIKI.md for a full list of Slash Commands tailored to your project.",
    done: "Done!",
    summaryTitle: "DEPLOYMENT SUMMARY",
    systemReady: "SYSTEM READY",
    shutdown: "System shutdown.",
    outro: "⚡ ORCHESTRATING THE FUTURE WITH DISCIPLINE AND SOUL ⚡"
  }
};

/**
 * Print a premium stylized banner
 */
function printBanner() {
  console.log("\n" + pc.magenta("   ██████╗ ██╗██╗      ██████╗     ███╗   ███╗ █████╗ ███████╗████████╗███████╗██████╗ "))
  console.log(pc.magenta("   ██╔══██╗██║██║     ██╔═══██╗    ████╗ ████║██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗"))
  console.log(pc.magenta("   ██████╔╝██║██║     ██║   ██║    ██╔████╔██║███████║███████╗   ██║   █████╗  ██████╔╝"))
  console.log(pc.magenta("   ██╔═══╝ ██║██║     ██║   ██║    ██║╚██╔╝██║██╔══██║╚════██║   ██║   ██╔══╝  ██╔══██╗"))
  console.log(pc.magenta("   ██║     ██║███████╗╚██████╔╝    ██║ ╚═╝ ██║██║  ██║███████║   ██║   ███████╗██║  ██║"))
  console.log(pc.magenta("   ╚═╝     ╚═╝╚══════╝ ╚═════╝     ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝"))
  console.log(pc.bold(pc.cyan("\n                       SYSTEM INITIALIZER v2.2\n")));
}

/**
 * Basic argument parser
 */
function parseArgs(args) {
  const options = {
    command: 'init',
    targetDir: '.',
    profile: null,
    template: null,
    aiHost: null,
    stack: null,
    locale: 'vi'
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === 'init') {
      options.command = 'init';
    } else if (arg.startsWith('--profile=')) {
      options.profile = arg.split('=')[1];
    } else if (arg === '--profile' && args[i+1]) {
      options.profile = args[++i];
    } else if (arg.startsWith('--template:')) {
      options.template = arg.replace('--template:', '');
    } else if (arg.startsWith('--ai=')) {
      options.aiHost = arg.split('=')[1];
    } else if (arg.startsWith('--stack=')) {
      const stacks = arg.split('=')[1].split(',');
      options.stack = stacks;
    } else if (arg.startsWith('--locale=')) {
      options.locale = arg.split('=')[1];
    } else if (!arg.startsWith('-')) {
      options.targetDir = arg;
    }
  }
  return options;
}

/**
 * Run external scaffold
 */
function runScaffold(options, t) {
  const [templateName] = options.template.split(' ');
  
  const s = spinner();
  s.start(pc.cyan(`⚡ Scaffolding upstream project: ${pc.bold(templateName)}...`));
  
  let command = '';
  let args = [];

  if (templateName.startsWith('react')) {
    command = 'npm';
    args = ['create', 'vite@latest', options.targetDir, '--', '--template', 'react-ts'];
  } else if (templateName.startsWith('next')) {
    command = 'npx';
    args = ['create-next-app@latest', options.targetDir, '--typescript', '--tailwind', '--eslint', '--app', '--src-dir', '--import-alias', '"@/*"'];
  } else {
    command = 'npm';
    args = ['create', `${templateName}@latest`, options.targetDir];
  }

  s.stop(pc.green("✓ Upstream command detected."));
  
  const result = spawnSync(command, args, { stdio: 'inherit', shell: true });
  if (result.status !== 0) {
    console.error(pc.red('\n✖ Scaffolding failed. Check command outputs above.'));
    process.exit(1);
  }
}

/**
 * Interactive Wizard
 */
async function runWizard(options) {
  printBanner();
  
  const locale = await select({
    message: "Primary Language Protocol?",
    options: [
      { value: "vi", label: "Vietnamese (Tiếng Việt)", hint: "Support localized documentation" },
      { value: "en", label: "English", hint: "Global standard" },
    ],
  });
  if (isCancel(locale)) return cancel("System shutdown.");

  const t = i18n[locale];

  intro(pc.bgMagenta(pc.white(t.intro)));

  const mode = await select({
    message: t.modeQuestion,
    options: [
      { value: "all", label: t.modeAll, hint: t.modeAllHint },
      { value: "selective", label: t.modeSelective, hint: t.modeSelectiveHint },
    ],
  });
  if (isCancel(mode)) return cancel(t.shutdown);

  if (mode === 'all') {
    // Even in 'all' mode, ask for agent name for personalized outro
    const agentName = await text({
      message: t.nameQuestion,
      placeholder: t.namePlaceholder,
      defaultValue: t.namePlaceholder
    });
    if (isCancel(agentName)) return cancel(t.shutdown);
    return { mode: 'all', locale, agentName };
  }

  const stack = await multiselect({
    message: t.stackQuestion,
    options: [
      { value: "typescript", label: "TypeScript Standard", hint: "React, Next.js, Node.js (Fullstack)" },
      { value: "python", label: "Python Intelligence", hint: "FastAPI, PyTorch, LangChain" },
      { value: "ai_agentic", label: "Agentic Engineering", hint: "MCP, Claude SDK, Autonomy" },
      { value: "rust", label: "Rust/C++ Engineering", hint: "High-performance systems" },
      { value: "laravel", label: "PHP Modern (Laravel)", hint: "Web backend, APIs" },
      { value: "mobile", label: "Mobile Multi-platform", hint: "Flutter, React Native, SwiftUI" },
      { value: "java", label: "Java/Kotlin Enterprise", hint: "Spring Boot, Ktor, Microservices" },
      { value: "go", label: "Go Cloud Services", hint: "Microservices, Cloud-native" },
      { value: "marketing_research", label: "Deep Research & Content", hint: "Analysis, SEO, Market Intel" },
    ],
    required: true,
  });
  if (isCancel(stack)) return cancel(t.shutdown);

  const aiHost = await select({
    message: t.aiQuestion,
    options: [
      { value: "claude", label: "Claude Code / CLI", hint: "Best for agentic tasks" },
      { value: "cursor", label: "Cursor IDE", hint: ".mdc rules integration" },
      { value: "gemini", label: "Google Gemini", hint: "Massive context support" },
      { value: "github", label: "GitHub Copilot", hint: "Integrated experience" },
      { value: "codex", label: "Codex / Custom", hint: "General AGENTS.md" },
      { value: "none", label: "None / Rules Only", hint: "Pure .agent directory" },
    ],
  });
  if (isCancel(aiHost)) return cancel(t.shutdown);

  const scope = await select({
    message: t.scopeQuestion,
    options: [
      { value: "personal", label: t.scopePersonal },
      { value: "small", label: t.scopeSmall },
      { value: "medium", label: t.scopeMedium },
      { value: "enterprise", label: t.scopeEnterprise },
    ]
  });
  if (isCancel(scope)) return cancel(t.shutdown);

  const type = await select({
    message: t.typeQuestion,
    options: [
      { value: "landing", label: t.typeLanding, hint: t.typeLandingHint },
      { value: "webapp", label: t.typeWebapp, hint: t.typeWebappHint },
      { value: "cross_platform", label: t.typeCross, hint: t.typeCrossHint },
      { value: "desktop", label: t.typeDesktop, hint: t.typeDesktopHint },
      { value: "mobile", label: t.typeMobile, hint: t.typeMobileHint },
      { value: "api", label: t.typeApi, hint: t.typeApiHint },
      { value: "library", label: t.typeLib, hint: t.typeLibHint },
      { value: "research", label: t.typeResearch, hint: t.typeResearchHint },
    ]
  });
  if (isCancel(type)) return cancel(t.shutdown);

  const deploy = await select({
    message: t.deployQuestion,
    options: [
      { value: "vercel", label: t.deployVercel, hint: t.deployVercelHint },
      { value: "gh_pages", label: t.deployGhPages, hint: t.deployGhPagesHint },
      { value: "docker", label: t.deployDocker, hint: t.deployDockerHint },
      { value: "custom", label: t.deployCustom, hint: t.deployCustomHint },
    ]
  });
  if (isCancel(deploy)) return cancel(t.shutdown);

  const agentName = await text({
    message: t.nameQuestion,
    placeholder: t.namePlaceholder,
    defaultValue: t.namePlaceholder
  });
  if (isCancel(agentName)) return cancel(t.shutdown);

  return { mode: 'selective', locale, stack, aiHost, scope, type, deploy, agentName };
}

/**
 * Print Summary Table
 */
function printSummary(config, targetDir, t) {
  const mode = config.mode === 'all' ? pc.magenta(t.modeAll) : pc.cyan(t.modeSelective);
  const stackContent = Array.isArray(config.stack) ? config.stack.join(', ').toUpperCase() : (config.stack ? config.stack.toUpperCase() : "ALL");
  const stack = pc.yellow(stackContent);
  const ai = config.aiHost ? pc.green(config.aiHost.toUpperCase()) : pc.dim("ALL");
  
  console.log("\n" + pc.dim("┌──────────────────────────────────────────────────────────┐"));
  console.log(`${pc.dim("│")}  ${pc.bold(t.summaryTitle)}                                 ${pc.dim("│")}`);
  console.log(pc.dim("├──────────────────────────────────────────────────────────┤"));
  console.log(`${pc.dim("│")}  Mode    : ${mode.padEnd(50)} ${pc.dim("│")}`);
  console.log(`${pc.dim("│")}  Stack   : ${stack.padEnd(60)} ${pc.dim("│")}`);
  console.log(`${pc.dim("│")}  AI Host : ${ai.padEnd(50)} ${pc.dim("│")}`);
  if (config.agentName) {
    console.log(`${pc.dim("│")}  Agent   : ${pc.white(config.agentName).padEnd(50)} ${pc.dim("│")}`);
  }
  if (config.deploy) {
    console.log(`${pc.dim("│")}  Deploy  : ${pc.blue(config.deploy.toUpperCase()).padEnd(50)} ${pc.dim("│")}`);
  }
  console.log(`${pc.dim("│")}  Target  : ${pc.dim(targetDir).padEnd(50)} ${pc.dim("│")}`);
  console.log(pc.dim("└──────────────────────────────────────────────────────────┘\n"));
}

async function main() {
  const args = process.argv.slice(2);
  const options = parseArgs(args);
  const targetDir = path.resolve(process.cwd(), options.targetDir);

  const t = i18n[options.locale] || i18n.vi;

  if (options.template) {
    runScaffold(options, t);
  }

  let config;
  if (options.profile === 'all') {
    printBanner();
    config = { mode: 'all', locale: options.locale, agentName: 'Pilo' };
  } else if (options.stack && options.aiHost) {
    config = { mode: 'selective', stack: options.stack, aiHost: options.aiHost, locale: options.locale, agentName: 'Pilo' };
  } else if (!options.template && options.profile !== 'all') {
    const result = await runWizard(options);
    if (!result) return;
    config = result;
  } else {
    config = { mode: 'selective', stack: options.stack || ['typescript'], aiHost: options.aiHost || 'claude', locale: options.locale, agentName: 'Pilo' };
  }

  const activeT = i18n[config.locale] || i18n.vi;
  const agentName = config.agentName || 'Pilo';
  const s = spinner();
  
  const steps = [
    { msg: activeT.installing, action: async () => {
      if (config.mode === 'all') {
        await installer.installProfileAll(targetDir, config);
      } else {
        await installer.installSelective({ ...config, targetDir });
      }
    }},
    { msg: activeT.calibrating, action: async () => {} },
    { msg: activeT.optimizing, action: async () => {} },
    { msg: activeT.generatingWiki, action: async () => {
      await installer.generateWiki(targetDir, config);
    }}
  ];

  for (const step of steps) {
    s.start(pc.magenta(step.msg));
    await step.action();
    await new Promise(r => setTimeout(r, 600));
    s.stop(pc.green(`✓ ${step.msg}`));
  }

  printSummary(config, targetDir, activeT);
  
  note(
    pc.white(activeT.ready + "\n") + 
    pc.bold(pc.yellow(activeT.activateAgent(agentName))) + "\n" +
    pc.dim(activeT.wikiReady),
    activeT.systemReady
  );

  outro(pc.magenta(pc.bold(activeT.outro)));
}

main().catch(console.error);
