/**
 * Project Stack Manifest for Pilo Masterkit
 * Defines which .agent files to include based on user's project stack.
 * V2: Using Ultimate Core Skill Pack - dynamic routing based on references.
 */

const CORE_FILES = [
  'skills/**',
  'references/**',
  'contexts/**', // Core contexts like identity, soul, etc.
];

// In V2, all logic is handled dynamically via PROJECT_MAP.md
// Stack-specific static files are no longer needed as they are combined into Progressive References.
const STACKS = {
  typescript: [],
  python: [],
  cpp: [],
  java: [],
  kotlin: [],
  go: [],
  rust: [],
  laravel: [],
  mobile: [],
  ai_agentic: [],
  marketing_research: []
};

module.exports = {
  CORE_FILES,
  STACKS
};
