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
 * Common doc folder setup (Only 3 core folders)
 */
async function setupDocs(targetDir, locale) {
  const docsDir = path.join(targetDir, 'docs');
  const docFolders = [
    { name: 'plans', desc: locale === 'vi' ? 'Lưu trữ PRD, Spec, Kế hoạch triển khai.' : 'Store PRDs, Specs, Implementation Plans.' },
    { name: 'walkthroughs', desc: locale === 'vi' ? 'Lưu trữ Logs làm việc, Báo cáo, Nghiệm thu.' : 'Store Work Logs, Reports, Verifications.' },
    { name: 'system-designs', desc: locale === 'vi' ? 'Lưu trữ Kiến trúc hệ thống dự án và Tài liệu thiết kế tham khảo.' : 'Store System Architecture and Reference Designs.' }
  ];

  for (const folder of docFolders) {
    const folderPath = path.join(docsDir, folder.name);
    if (await fs.pathExists(folderPath)) {
      await fs.emptyDir(folderPath);
    } else {
      await fs.ensureDir(folderPath);
    }
    
    await fs.writeFile(
      path.join(folderPath, 'README.md'),
      `# ${folder.name.toUpperCase()}\n\n> ${folder.desc}\n`
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
    cursor: { src: 'cursor', files: ['cursor.mdc'], targetSubDir: '.cursor/rules' },
    github: { src: 'github', files: ['copilot-instructions.md'], targetSubDir: '.github' },
    codex: { src: 'codex', files: ['AGENTS.md'] }
  };

  const hostConfig = hostMap[aiHost];
  if (!hostConfig) return;

  // Prepare variables
  const name = config.agentName || "AI";
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
    triggerDisplay: trigger
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
 * Copy reference system designs from templates
 */
async function copyReferenceDesigns(targetDir, config = {}) {
  const referenceDesigns = config.referenceDesigns || [];
  if (referenceDesigns.length === 0) return;
  
  const sourceRoot = path.join(__dirname, '..', 'templates', 'reference-architectures');
  const destDir = path.join(targetDir, 'docs', 'system-designs', 'reference');
  
  await fs.ensureDir(destDir);
  
  for (const design of referenceDesigns) {
    const srcFile = path.join(sourceRoot, design, 'DESIGN.md');
    const destFile = path.join(destDir, `${design}.md`);
    
    if (await fs.pathExists(srcFile)) {
      await fs.copy(srcFile, destFile);
    }
  }
}

/**
 * Install advanced UI/UX Pro Max Skill
 */
async function installUiUxProMax(targetDir, config = {}) {
  if (!config.uiUxProMax) return;
  
  const sourceDir = path.join(__dirname, '..', 'templates', 'skills', 'ui-ux-pro-max');
  const destDir = path.join(targetDir, '.agent', 'skills', 'ui-ux-pro-max');
  
  if (await fs.pathExists(sourceDir)) {
    await fs.copy(sourceDir, destDir);
  }
}

/**
 * Generate PROJECT_MAP.md - Dynamic AI Context Map
 */
async function generateProjectMap(targetDir, config = {}) {
  const locale = config.locale || 'vi';
  const isVi = locale === 'vi';
  const name = config.agentName || 'AI';
  const stacks = Array.isArray(config.stack) ? config.stack : (config.stack ? [config.stack] : []);
  const deploy = config.deploy || 'custom';
  const scope = config.scope || 'personal';
  const type = config.type || 'webapp';

  const title = isVi
    ? `# 🗺️ PROJECT_MAP: Bản Đồ Chiến Dịch Của ${name}`
    : `# 🗺️ PROJECT_MAP: ${name}'s Operational Map`;

  const introText = isVi
    ? `> **Bảo mật & Ngữ cảnh**: Đây là tệp định tuyến chính của bạn. \n> \n> **Tên Agent:** ${name} \n> **Quy mô dự án:** ${scope} \n> **Loại sản phẩm:** ${type} \n> **Nền tảng:** ${deploy}`
    : `> **Security & Context**: This is your primary operational map. \n> \n> **Agent Name:** ${name} \n> **Scope:** ${scope} \n> **Product Type:** ${type} \n> **Platform:** ${deploy}`;

  const coreSkillsTitle = isVi ? '## ⚡ Vũ Khí Cốt Lõi (Ultimate Core Skills)' : '## ⚡ Ultimate Core Skills';
  const coreCommandsText = isVi
    ? `Hệ thống sử dụng chu trình PDCA và Socratic Gate. Hãy dùng các lệnh dưới đây để kích hoạt Core Skills (nằm trong thư mục \`.agent/skills/\`):
| Lệnh | File (Kỹ năng) | Giải thích |
|:---|:---|:---|
| \`/brainstorm\` | \`brainstorming.md\` | Phân tích yêu cầu, đặt câu hỏi (Socratic Gate). |
| \`/spec\` | \`spec-driven-development.md\` | Viết PRD/Spec trước khi code. |
| \`/plan\` | \`planning-and-task-breakdown.md\`| Phân rã task (vertical slices) và đặt checkpoint. |
| \`/build\` | \`incremental-implementation.md\` | Code từng bước, đảm bảo hệ thống luôn chạy được. |
| \`/test\` | \`test-driven-development.md\` | Viết kiểm thử (Red-Green-Refactor). |
| \`/doubt\` | \`doubt-driven-development.md\` | Phản biện giả thuyết, chạy lệnh kiểm tra rủi ro. |
| \`/debug\` | \`systematic-debugging.md\` | Sửa lỗi hệ thống 5 bước (Reproduce -> Guard). |
| \`/review\` | \`code-review-and-quality.md\` | Đánh giá mã nguồn (Logic, Architecture, Security). |
| \`/simplify\` | \`code-simplification.md\` | Tối ưu hóa độ phức tạp mã nguồn (Refactoring). |
| \`/ui\` | \`design-system-and-ui.md\` | Thiết kế UI/UX và văn bản Markdown cao cấp. |
| \`/commit\` | \`git-workflow-and-versioning.md\`| Commit atomic và Conventional commits. |
| \`/ship\` | \`shipping-and-launch.md\` | Kiểm tra trước khi deploy. |
| \`/clean\` | \`context-engineering.md\` | Dọn dẹp context tránh tràn bộ nhớ. |`
    : `The system operates on the PDCA cycle and Socratic Gate. Use these commands to trigger Core Skills (located in \`.agent/skills/\`):
| Command | Skill File | Explanation |
|:---|:---|:---|
| \`/brainstorm\` | \`brainstorming.md\` | Analyze requests, ask questions (Socratic Gate). |
| \`/spec\` | \`spec-driven-development.md\` | Write PRD/Spec before coding. |
| \`/plan\` | \`planning-and-task-breakdown.md\`| Break down tasks (vertical slices) and checkpoints. |
| \`/build\` | \`incremental-implementation.md\` | Code incrementally, keep system deployable. |
| \`/test\` | \`test-driven-development.md\` | TDD (Red-Green-Refactor). |
| \`/doubt\` | \`doubt-driven-development.md\` | Adversarial self-review, run verification commands. |
| \`/debug\` | \`systematic-debugging.md\` | 5-step triage (Reproduce -> Guard). |
| \`/review\` | \`code-review-and-quality.md\` | Review code (Logic, Architecture, Security). |
| \`/simplify\` | \`code-simplification.md\` | Reduce complexity (Refactoring). |
| \`/ui\` | \`design-system-and-ui.md\` | Premium UI/UX design and Markdown formatting. |
| \`/commit\` | \`git-workflow-and-versioning.md\`| Atomic & Conventional commits. |
| \`/ship\` | \`shipping-and-launch.md\` | Pre-flight deployment checks. |
| \`/clean\` | \`context-engineering.md\` | Clean context memory bloat. |`;

  let stackSection = '';
  if (stacks.length > 0) {
    const stackList = stacks.join(', ').toUpperCase();
    stackSection = isVi 
      ? `## 🎯 Chỉ Dẫn Stack (${stackList})\n> Hệ thống tự động nạp các tiêu chuẩn kiểm thử và lập trình cho ${stackList} thông qua \`references/testing-patterns.md\` và \`references/coding-standards.md\`. Hãy đảm bảo bạn luôn tuân thủ nguyên tắc đặc thù của ngôn ngữ này khi gọi lệnh \`/build\` và \`/test\`.`
      : `## 🎯 Stack Guidelines (${stackList})\n> The system automatically loads testing and coding standards for ${stackList} via \`references/testing-patterns.md\` and \`references/coding-standards.md\`. Ensure you adhere to language-specific idioms when executing \`/build\` and \`/test\`.`;
  }

  let referenceSection = '';
  if (config.referenceDesigns && config.referenceDesigns.length > 0) {
    const list = config.referenceDesigns.map(brand => `- ${brand} Style: \`docs/system-designs/reference/${brand}.md\``).join('\n');
    referenceSection = isVi
      ? `## 📐 Bản Thiết Kế Hệ Thống Tham Khảo\n> Khi thiết kế giao diện UI/UX hoặc cấu trúc API/hệ thống, bạn CẦN tham khảo phong cách thiết kế đẳng cấp quốc tế của các hãng sau đây để cải thiện chất lượng mã nguồn:\n${list}\n`
      : `## 📐 Reference System Designs\n> When designing UI/UX or API/system architecture, you MUST reference the world-class design styles of the following brands to improve code quality:\n${list}\n`;
  }
  
  let uiUxSection = '';
  if (config.uiUxProMax) {
    uiUxSection = isVi
      ? `## 🎨 Kỹ Năng UI/UX Pro Max\n> Dự án này đã kích hoạt bộ kỹ năng UI/UX Pro Max siêu cấp. Khi cần thiết kế giao diện, hãy nạp tệp \`.agent/skills/ui-ux-pro-max/SKILL.md\` để áp dụng các bộ quy tắc (67 styles, 96 color palettes, 57 font pairings) chuẩn xác nhất.\n`
      : `## 🎨 UI/UX Pro Max Skill\n> This project has activated the premium UI/UX Pro Max skill. When designing interfaces, load the file \`.agent/skills/ui-ux-pro-max/SKILL.md\` to apply the most accurate rule sets (67 styles, 96 color palettes, 57 font pairings).\n`;
  }
  
  const footer = isVi
    ? `\n---\n\n*© 2026 Pilo Masterkit - Điều phối tương lai với kỷ luật và tâm hồn.*\n`
    : `\n---\n\n*© 2026 Pilo Masterkit - Orchestrating the future with discipline and soul.*\n`;

  const wikiContent = [
    title, '', introText, '', coreSkillsTitle, coreCommandsText, '', stackSection, '', referenceSection, '', uiUxSection, '', footer
  ].filter(s => s !== undefined && s !== '').join('\n');

  await fs.writeFile(path.join(targetDir, 'PROJECT_MAP.md'), wikiContent);
}

/**
 * Full install (Profile All)
 */
async function installProfileAll(targetDir, config = {}) {
  const sourceAgentDir = path.join(__dirname, '..', '..', '.agent');
  const targetAgentDir = path.join(targetDir, '.agent');
  
  if (await fs.pathExists(sourceAgentDir)) {
    await copyFilteredAgent(sourceAgentDir, targetAgentDir, []);
  }

  await setupDocs(targetDir, config.locale);
  await copyReferenceDesigns(targetDir, config);
  await installUiUxProMax(targetDir, config);

  const hosts = ['claude', 'gemini', 'cursor', 'github', 'codex'];
  for (const host of hosts) {
    await injectAIHost(targetDir, host, { 
      locale: config.locale || 'vi', 
      scope: config.scope || 'Enterprise', 
      type: config.type || 'Full-Stack Agentic System', 
      agentName: config.agentName || 'AI',
      uiUxProMax: config.uiUxProMax,
      referenceDesigns: config.referenceDesigns
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
  await copyReferenceDesigns(targetDir, config);
  await installUiUxProMax(targetDir, config);

  if (aiHost && aiHost !== 'none') {
    await injectAIHost(targetDir, aiHost, config);
  }
}

module.exports = {
  installProfileAll,
  installSelective,
  generateProjectMap
};
