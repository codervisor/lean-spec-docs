# AI Agent Instructions for LeanSpec Documentation Site

## Core Principles

When working with the LeanSpec documentation site:

1. **File paths MUST align with sidebar structure** - No exceptions
2. **Chinese translations MUST mirror English docs** - Complete parity required
3. **MDX formatting matters** - Bold with quotes/Chinese needs special handling
4. **Always validate builds** - Run `npm run build` before committing

## Critical Rules

### File Structure Alignment

Documentation folder structure must exactly match the sidebar hierarchy in `sidebars.ts`.

**Example:**
- Sidebar: `Usage → CLI Usage → Creating & Managing Specs`
- File: `./docs/guide/usage/cli/creating-managing.mdx` ✅

### Translation Completeness

Every English `.mdx` file needs a Chinese translation in `i18n/zh-Hans/docusaurus-plugin-content-docs/current/` with identical folder structure.

### MDX Formatting

**Chinese text with multiple bolds:**
```markdown
这与 **语法属性（Syntactic Properties）** 形成对比  ✅ (space before second **)
```

**Bold with quotes:**
```markdown
** "quoted text" **  ✅ (spaces inside bold markers)
```

### Build Validation

Before committing:
```bash
cd docs-site && npm run build
```

Must pass with no broken links, MDX errors, or missing translations.

### MDX Syntax Validation

Validate source MDX files for syntax issues that cause build failures:
```bash
cd docs-site && pnpm validate:mdx
```

This checks Chinese docs and blogs for:
- Unescaped special characters (`<` `>` `{` `}`)
- Bold formatting spacing issues
- Other MDX syntax problems

Run before committing Chinese content changes.

## Workflow

1. Update English docs
2. Update Chinese translations (mirror structure exactly)
3. Update config files (`sidebars.ts`, `docusaurus.config.ts`)
4. Run `npm run build` - must succeed
5. Verify pages in dev mode
6. Commit only if build passes

## Detailed Guidelines

For comprehensive documentation quality standards, see [agents/documentation-quality-standards.md](./agents/documentation-quality-standards.md).

---

**Formula**: Documentation Quality = Content × Structure × Translation Completeness
