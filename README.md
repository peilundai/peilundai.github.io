# peilundai.com

Personal website and blog for Peilun Dai, built with Jekyll and hosted on GitHub Pages.

## Features

- Modern responsive design with top navigation
- Dark/light mode (auto-detects OS preference and local time)
- Blog with markdown support
- LaTeX math rendering via MathJax 3 (`math: true` in front matter)
- Mermaid diagram support (`mermaid: true` in front matter)
- GitHub-style syntax highlighting for both themes
- RSS feed via jekyll-feed

## Deployment

The site deploys automatically to GitHub Pages via GitHub Actions on push to `master`. The workflow is in `.github/workflows/jekyll.yml`.

**Important:** In your GitHub repo settings, set Pages source to **GitHub Actions** (not "Deploy from a branch").

## Local Development

Requires Ruby 3.3+:

```bash
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000` to preview.

## Writing Blog Posts

Add markdown files to `_posts/` with the naming convention `YYYY-MM-DD-title.md`:

```yaml
---
layout: post
title: "Post Title"
date: 2026-03-15
tags: [tag1, tag2]
math: true      # optional: enables LaTeX math
mermaid: true   # optional: enables Mermaid diagrams
---
```

## Structure

```
_config.yml        # Site configuration
_includes/         # Reusable HTML partials (nav, footer, mathjax, mermaid)
_layouts/          # Page templates (default, home, post)
_posts/            # Blog posts
_sass/             # Modular SCSS stylesheets
assets/            # CSS, JS, images, fonts
blog/              # Blog listing page
index.md           # Homepage
```
