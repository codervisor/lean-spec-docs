import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  guideSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['guide/index', 'guide/getting-started', 'comparison', 'guide/migration'],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorials/writing-first-spec-with-ai',
        'tutorials/ai-assisted-feature-development',
        'tutorials/managing-multiple-specs-with-ai',
        'tutorials/team-collaboration-ai-agents',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'guide/what-is-leanspec',
        'guide/understanding-specs',
        {
          type: 'category',
          label: 'Terminology',
          items: [
            'guide/terminology/index',
            'guide/terminology/spec',
            'guide/terminology/status',
            'guide/terminology/sdd-workflow',
            'guide/terminology/sub-specs',
            'guide/terminology/dependencies',
            'guide/terminology/tags-priority',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Usage',
      items: [
        {
          type: 'category',
          label: 'Essential Usage',
          items: [
            'guide/usage/essential-usage/creating-managing',
            'guide/usage/essential-usage/finding-specs',
            'guide/usage/essential-usage/spec-structure',
          ],
        },
        'guide/visual-mode',
        {
          type: 'category',
          label: 'Project Management',
          items: [
            'guide/usage/project-management/board-stats',
            'guide/usage/project-management/dependencies',
            'guide/usage/project-management/validation',
          ],
        },
        {
          type: 'category',
          label: 'Advanced Features',
          items: [
            'guide/usage/advanced-features/templates',
            'guide/usage/advanced-features/custom-fields',
            'guide/usage/advanced-features/variables',
            'guide/usage/advanced-features/frontmatter',
          ],
        },
        {
          type: 'category',
          label: 'AI-Assisted Workflows',
          items: [
            'guide/usage/ai-assisted/writing-specs-with-ai',
            'guide/usage/ai-assisted/ai-executable-patterns',
            'guide/usage/ai-assisted/agent-configuration',
            'guide/usage/ai-assisted/mcp-integration',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Advanced Topics',
      items: [
        'advanced/first-principles',
        'advanced/context-engineering',
        'advanced/ai-agent-memory',
        'advanced/philosophy',
        'advanced/limits-and-tradeoffs',
      ],
    },
    'roadmap',
    'faq',
  ],
  examplesSidebar: [
    {
      type: 'category',
      label: 'Real-World Examples',
      items: [
        'examples/index',
        'examples/simple-feature-token-validation',
        'examples/complex-feature-web-sync',
        'examples/refactoring-monorepo-core',
        'examples/cross-team-official-launch',
      ],
    },
  ],
  referenceSidebar: [
    'reference/cli',
    'reference/config',
    'reference/frontmatter',
    'reference/mcp-server',
    'reference/ui-package',
  ],
};

export default sidebars;
