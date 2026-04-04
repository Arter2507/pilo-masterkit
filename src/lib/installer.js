const fs = require('fs-extra');
const path = require('node:path');
const { CORE_FILES, STACKS } = require('./manifests/stacks');

/**
 * Filter files based on manifest
 */
async function copyFilteredAgent(sourceDir, targetDir, stackPaths) {
  const allPatterns = [...CORE_FILES, ...stackPaths];
  await fs.ensureDir(targetDir);
  
  const filterFunc = (src, dest) => {
    const relPath = path.relative(sourceDir, src).replace(/\\/g, '/');
    if (relPath === '') return true; // root
    
    return allPatterns.some(pattern => {
      if (pattern.endsWith('/**')) {
        const base = pattern.replace('/**', '');
        return relPath === base || relPath.startsWith(base + '/');
      }
      return relPath === pattern || relPath.startsWith(pattern + '/');
    });
  };

  await fs.copy(sourceDir, targetDir, { filter: filterFunc, overwrite: true });
}

/**
 * Common doc folder setup
 */
async function setupDocs(targetDir, locale) {
  const docsDir = path.join(targetDir, 'docs');
  const docFolders = ['lessons', 'reports', 'plans', 'status', 'tasks', 'logs', 'walkthroughs', 'products'];
  const isVi = (locale || 'vi') === 'vi';
  const desc = isVi ? 'Thư mục theo chuẩn Pilo Masterkit.' : 'Standard Pilo Masterkit directory.';

  for (const folder of docFolders) {
    const folderPath = path.join(docsDir, folder);
    if (await fs.pathExists(folderPath)) {
      await fs.emptyDir(folderPath);
    } else {
      await fs.ensureDir(folderPath);
    }
    
    await fs.writeFile(
      path.join(folderPath, 'README.md'),
      `# ${folder.toUpperCase()}\n\n${desc}\n`
    );
  }
}

/**
 * Inject AI Host templates with interpolation & localization
 */
async function injectAIHost(targetDir, aiHost, config = {}) {
  const templatesRoot = path.join(__dirname, '..', 'templates');
  
  const hostMap = {
    claude: { src: 'claude', files: ['CLAUDE.md'] },
    gemini: { src: 'gemini', files: ['GEMINI.md'] },
    cursor: { src: 'cursor', files: ['pilo-masterkit.mdc'], targetSubDir: '.cursor/rules' },
    github: { src: 'github', files: ['copilot-instructions.md'], targetSubDir: '.github' },
    codex: { src: 'codex', files: ['AGENTS.md'] }
  };

  const hostConfig = hostMap[aiHost];
  if (!hostConfig) return;

  // Prepare variables
  const name = config.agentName || "Pilo";
  const locale = config.locale || 'vi';
  const isVi = locale === 'vi';
  
  let trigger;
  if (isVi) {
    trigger = `Chào ${name}/Chào AI, Thức dậy đi ${name}/Thức dậy đi AI, Trỗi dậy đi ${name}/AI, Summon ${name}/AI`;
  } else {
    trigger = `Hey ${name}/Hey AI, Wakeup ${name}/Wakeup AI, Trỗi dậy đi ${name}/AI, Summon ${name}/AI`;
  }

  const vars = {
    agentName: name,
    productType: config.type || (isVi ? "Dự án chung" : "General Project"),
    scaleDisplay: config.scope || (isVi ? "Cá nhân" : "Personal Edition"),
    langDisplay: isVi ? 'TIẾNG VIỆT' : 'ENGLISH',
    triggerDisplay: trigger,
    moduleList: [
      "- rules/CORE_RULES.md",
      "- rules/SECURITY_ARMOR.md",
      "- rules/QUALITY_ASSURANCE.md",
      "- rules/COMMUNICATION.md"
    ].join('\n')
  };

  const sourceDir = path.join(templatesRoot, hostConfig.src);
  for (const destFileName of hostConfig.files) {
    let sourceFileName = destFileName;
    if (destFileName.endsWith('.md')) {
        const localizedSource = destFileName.replace('.md', '.' + locale + '.md');
        if (await fs.pathExists(path.join(sourceDir, localizedSource))) {
            sourceFileName = localizedSource;
        }
    }
    
    const srcFile = path.join(sourceDir, sourceFileName);
    const destDir = hostConfig.targetSubDir ? path.join(targetDir, hostConfig.targetSubDir) : targetDir;
    const destFile = path.join(destDir, destFileName);
    
    await fs.ensureDir(destDir);
    if (await fs.pathExists(srcFile)) {
      let content = await fs.readFile(srcFile, 'utf8');
      
      for (const [key, value] of Object.entries(vars)) {
        const regex = new RegExp(`\\$\\{${key}\\}`, 'g');
        content = content.replace(regex, value);
      }
      
      await fs.writeFile(destFile, content);
    }
  }
}

/**
 * Generate PILO_WIKI.md - Bilingual custom slash commands wiki
 */
async function generateWiki(targetDir, config = {}) {
  const locale = config.locale || 'vi';
  const isVi = locale === 'vi';
  const name = config.agentName || 'Pilo';
  const stacks = Array.isArray(config.stack) ? config.stack : (config.stack ? [config.stack] : []);
  const deploy = config.deploy || 'custom';

  // Core commands (always present)
  const coreCommands = {
    vi: [
      { cmd: '/plan', desc: 'Lập kế hoạch chi tiết, đánh giá rủi ro trước khi thực thi.' },
      { cmd: '/debug', desc: 'Sửa lỗi có hệ thống với bảng nguyên nhân gốc (Root Cause Analysis).' },
      { cmd: '/status', desc: 'Kiểm tra trạng thái Agent và tiến độ công việc.' },
      { cmd: '/clean-memory', desc: 'Dọn dẹp và nén ngữ cảnh làm việc, tránh "loãng" bộ nhớ.' },
      { cmd: '/tdd', desc: 'Phát triển hướng kiểm thử (Test-Driven Development).' },
      { cmd: '/code-review', desc: 'Đánh giá mã nguồn theo tiêu chuẩn chất lượng cao.' },
      { cmd: '/enhance', desc: 'Nâng cấp và mở rộng tính năng hiện có.' },
      { cmd: '/create', desc: 'Khởi tạo luồng ứng dụng mới từ đầu.' },
    ],
    en: [
      { cmd: '/plan', desc: 'Create detailed implementation plan with risk assessment.' },
      { cmd: '/debug', desc: 'Systematic debugging with Root Cause Analysis.' },
      { cmd: '/status', desc: 'Check Agent status and project progress.' },
      { cmd: '/clean-memory', desc: 'Clean and compress working context to avoid memory bloat.' },
      { cmd: '/tdd', desc: 'Test-Driven Development workflow.' },
      { cmd: '/code-review', desc: 'Code review against high-quality standards.' },
      { cmd: '/enhance', desc: 'Upgrade and extend existing features.' },
      { cmd: '/create', desc: 'Initialize a new application flow from scratch.' },
    ]
  };

  // Stack-specific commands mapping
  const stackCommands = {
    typescript: {
      vi: [
        { cmd: '/ui-ux-pro-max', desc: 'Thiết kế giao diện cao cấp với React/Next.js.' },
        { cmd: '/e2e', desc: 'Kiểm thử End-to-End với Playwright.' },
        { cmd: '/preview', desc: 'Khởi động server phát triển cục bộ.' },
      ],
      en: [
        { cmd: '/ui-ux-pro-max', desc: 'Premium UI/UX design with React/Next.js.' },
        { cmd: '/e2e', desc: 'End-to-End testing with Playwright.' },
        { cmd: '/preview', desc: 'Start local development server.' },
      ]
    },
    python: {
      vi: [
        { cmd: '/python-review', desc: 'Review code Python theo PEP 8 và best practices.' },
        { cmd: '/test', desc: 'Chạy test suite với pytest.' },
      ],
      en: [
        { cmd: '/python-review', desc: 'Review Python code for PEP 8 and best practices.' },
        { cmd: '/test', desc: 'Run test suite with pytest.' },
      ]
    },
    rust: {
      vi: [
        { cmd: '/rust-review', desc: 'Review Rust: ownership, lifetimes, unsafe.' },
        { cmd: '/rust-build', desc: 'Sửa lỗi build Rust và borrow checker.' },
        { cmd: '/rust-test', desc: 'TDD workflow cho Rust với cargo test.' },
      ],
      en: [
        { cmd: '/rust-review', desc: 'Review Rust: ownership, lifetimes, unsafe.' },
        { cmd: '/rust-build', desc: 'Fix Rust build errors and borrow checker issues.' },
        { cmd: '/rust-test', desc: 'TDD workflow for Rust with cargo test.' },
      ]
    },
    mobile: {
      vi: [
        { cmd: '/flutter-review', desc: 'Review Flutter/Dart code cho widget và state management.' },
        { cmd: '/flutter-build', desc: 'Sửa lỗi Dart analyzer và Flutter build.' },
      ],
      en: [
        { cmd: '/flutter-review', desc: 'Review Flutter/Dart code for widgets and state management.' },
        { cmd: '/flutter-build', desc: 'Fix Dart analyzer and Flutter build failures.' },
      ]
    },
    laravel: {
      vi: [
        { cmd: '/verify', desc: 'Vòng lặp kiểm tra toàn diện cho Laravel.' },
      ],
      en: [
        { cmd: '/verify', desc: 'Comprehensive verification loop for Laravel.' },
      ]
    },
    java: {
      vi: [
        { cmd: '/kotlin-review', desc: 'Review Kotlin/Java code theo chuẩn idiomatic.' },
        { cmd: '/gradle-build', desc: 'Sửa lỗi Gradle build cho Android/KMP.' },
      ],
      en: [
        { cmd: '/kotlin-review', desc: 'Review Kotlin/Java code for idiomatic patterns.' },
        { cmd: '/gradle-build', desc: 'Fix Gradle build errors for Android/KMP.' },
      ]
    },
    go: {
      vi: [
        { cmd: '/go-review', desc: 'Review Go code: concurrency, error handling.' },
        { cmd: '/go-build', desc: 'Sửa lỗi Go build và go vet.' },
        { cmd: '/go-test', desc: 'Chạy table-driven tests với go test.' },
      ],
      en: [
        { cmd: '/go-review', desc: 'Review Go code: concurrency, error handling.' },
        { cmd: '/go-build', desc: 'Fix Go build errors and go vet warnings.' },
        { cmd: '/go-test', desc: 'Run table-driven tests with go test.' },
      ]
    },
    ai_agentic: {
      vi: [
        { cmd: '/orchestrate', desc: 'Điều phối multi-agent workflows.' },
        { cmd: '/brainstorm', desc: 'Phiên Socratic cho ý tưởng và chiến lược mới.' },
      ],
      en: [
        { cmd: '/orchestrate', desc: 'Multi-agent workflow orchestration.' },
        { cmd: '/brainstorm', desc: 'Socratic session for new ideas and strategies.' },
      ]
    },
    marketing_research: {
      vi: [
        { cmd: '/brainstorm', desc: 'Brainstorming có cấu trúc cho chiến lược nội dung.' },
      ],
      en: [
        { cmd: '/brainstorm', desc: 'Structured brainstorming for content strategy.' },
      ]
    },
  };

  // Deploy-specific commands
  const deployCommands = {
    vercel: {
      vi: [{ cmd: '/deploy', desc: 'Triển khai lên Vercel (preview + production).' }],
      en: [{ cmd: '/deploy', desc: 'Deploy to Vercel (preview + production).' }]
    },
    gh_pages: {
      vi: [{ cmd: '/deploy', desc: 'Build và đẩy lên GitHub Pages.' }],
      en: [{ cmd: '/deploy', desc: 'Build and push to GitHub Pages.' }]
    },
    docker: {
      vi: [{ cmd: '/deploy', desc: 'Build Docker image và triển khai container.' }],
      en: [{ cmd: '/deploy', desc: 'Build Docker image and deploy container.' }]
    },
    custom: {
      vi: [{ cmd: '/deploy', desc: 'Hỗ trợ chuẩn bị trước quá trình phát hành.' }],
      en: [{ cmd: '/deploy', desc: 'Assist with pre-release deployment preparation.' }]
    }
  };

  // Build the wiki content
  const title = isVi
    ? `# 📖 ${name} Wiki - Hệ thống Slash Commands`
    : `# 📖 ${name} Wiki - Slash Commands Reference`;

  const introText = isVi
    ? `> Tài liệu này được tạo tự động bởi **Pilo Masterkit** dựa trên cấu hình dự án của bạn.\n> Gọi Agent bằng lệnh: \`Chào ${name}\` hoặc \`Wakeup ${name}\` để bắt đầu phiên làm việc.\n`
    : `> This document was auto-generated by **Pilo Masterkit** based on your project configuration.\n> Call your Agent with: \`Hey ${name}\` or \`Wakeup ${name}\` to start a session.\n`;

  const coreSectionTitle = isVi ? '## ⚙️ Lệnh Cốt lõi (Core Commands)' : '## ⚙️ Core Commands';
  const coreList = coreCommands[locale].map(c => `| \`${c.cmd}\` | ${c.desc} |`).join('\n');

  let stackSection = '';
  const collectedStackCmds = [];
  for (const s of stacks) {
    const cmds = stackCommands[s];
    if (cmds && cmds[locale]) {
      collectedStackCmds.push(...cmds[locale]);
    }
  }
  if (collectedStackCmds.length > 0) {
    const stackTitle = isVi
      ? `## 🎯 Lệnh theo Stack của bạn`
      : `## 🎯 Stack-Specific Commands`;
    const stackList = collectedStackCmds.map(c => `| \`${c.cmd}\` | ${c.desc} |`).join('\n');
    const stackColHeader = isVi ? 'Lệnh' : 'Command';
    stackSection = `\n${stackTitle}\n\n| ${stackColHeader} | ${isVi ? 'Mô tả' : 'Description'} |\n| :--- | :--- |\n${stackList}\n`;
  }

  let deploySection = '';
  const deployCmds = deployCommands[deploy];
  if (deployCmds && deployCmds[locale]) {
    const deployTitle = isVi
      ? `## 🚀 Lệnh Triển khai (Deploy)`
      : `## 🚀 Deployment Commands`;
    const deployList = deployCmds[locale].map(c => `| \`${c.cmd}\` | ${c.desc} |`).join('\n');
    const deployColHeader = isVi ? 'Lệnh' : 'Command';
    deploySection = `\n${deployTitle}\n\n| ${deployColHeader} | ${isVi ? 'Mô tả' : 'Description'} |\n| :--- | :--- |\n${deployList}\n`;
  }

  const footer = isVi
    ? `\n---\n\n*© 2026 Pilo Masterkit - Điều phối tương lai với kỷ luật và tâm hồn.*\n`
    : `\n---\n\n*© 2026 Pilo Masterkit - Orchestrating the future with discipline and soul.*\n`;

  const wikiContent = [
    title,
    '',
    introText,
    coreSectionTitle,
    '',
    `| ${isVi ? 'Lệnh' : 'Command'} | ${isVi ? 'Mô tả' : 'Description'} |`,
    '| :--- | :--- |',
    coreList,
    stackSection,
    deploySection,
    footer
  ].join('\n');

  await fs.writeFile(path.join(targetDir, 'PILO_WIKI.md'), wikiContent);
}

/**
 * Full install (Profile All)
 */
async function installProfileAll(targetDir, config = {}) {
  const sourceAgentDir = path.join(__dirname, '..', '..', '.agent');
  const targetAgentDir = path.join(targetDir, '.agent');
  
  if (await fs.pathExists(sourceAgentDir)) {
    await fs.copy(sourceAgentDir, targetAgentDir, { overwrite: true });
  }

  await setupDocs(targetDir, config.locale);

  const hosts = ['claude', 'gemini', 'cursor', 'github', 'codex'];
  for (const host of hosts) {
    await injectAIHost(targetDir, host, { 
      locale: config.locale || 'vi', 
      scope: 'Enterprise', 
      type: 'Full-Stack Agentic System', 
      agentName: config.agentName || 'Pilo'
    });
  }
}

/**
 * Selective install
 */
async function installSelective(config) {
  const { targetDir, stack, aiHost } = config;
  const sourceAgentDir = path.join(__dirname, '..', '..', '.agent');
  const targetAgentDir = path.join(targetDir, '.agent');

  const stacks = Array.isArray(stack) ? stack : [stack];
  const combinedStackPaths = new Set();
  
  for (const s of stacks) {
    const paths = STACKS[s] || [];
    paths.forEach(p => combinedStackPaths.add(p));
  }
  
  await copyFilteredAgent(sourceAgentDir, targetAgentDir, Array.from(combinedStackPaths));
  await setupDocs(targetDir, config.locale);

  if (aiHost && aiHost !== 'none') {
    await injectAIHost(targetDir, aiHost, config);
  }
}

module.exports = {
  installProfileAll,
  installSelective,
  generateWiki
};
