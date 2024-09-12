export default [
    {
      ignores: [
        "node_modules",           // Ignore the node_modules directory
        "scripts/*",              // Ignore everything in the scripts folder
        "config/*",               // Ignore everything in the config folder
        "pnpm-lock.yaml",         // Ignore pnpm lock file
        "pnpm-workspace.yaml",    // Ignore pnpm workspace file
        ".DS_Store",              // Ignore .DS_Store (macOS)
        "package.json",           // Ignore package.json
        "tsconfig.json",          // Ignore tsconfig.json
        "**/*.md",                // Ignore all markdown files
        "build",                  // Ignore the build directory
        ".eslintrc.cjs",          // Ignore .eslintrc.cjs
        "eslint.config.js",       // Ignore eslint.config.js
        "**/.*"                   // Ignore all dotfiles (like .gitignore)
      ],
    },
    // Other ESLint configurations like languageOptions, rules, etc.
  ];