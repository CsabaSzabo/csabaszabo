# CLAUDE.md - AI Assistant Guide

This document provides comprehensive guidance for AI assistants working with this codebase.

## Project Overview

**Type:** Personal portfolio and blog website
**Owner:** Csaba Szabo - Frontend Developer, SEO and Analytics expert based in Budapest
**Framework:** Nuxt.js 2.x (Vue.js-based SPA/SSR framework)
**Deployment:** Firebase Hosting (project: csabaszabo-dev)

## Technology Stack

| Category | Technology |
|----------|------------|
| Framework | Nuxt.js 2.x (SPA mode) |
| UI Library | Vue.js 2.x |
| Component Library | Vuetify 1.x (Material Design) |
| Server | Express.js with Nuxt middleware |
| Database | Firebase Firestore |
| Styling | SCSS/Sass, Normalize.css |
| Content | Markdown with YAML frontmatter |
| Analytics | Google Tag Manager, Google Analytics |

## Quick Commands

```bash
# Install dependencies
npm install

# Development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Generate static site
npm run generate

# Deploy to Firebase
npm run deploy  # runs generate + firebase deploy
```

## Directory Structure

```
├── pages/                   # Nuxt auto-routed pages
│   ├── index.vue            # Home page
│   ├── projects.vue         # Projects listing
│   ├── project-*.vue        # Project detail pages
│   └── blog/
│       ├── index.vue        # Blog listing
│       └── _slug.vue        # Dynamic blog post route
├── components/              # Reusable Vue components
│   ├── ProjectCard.vue      # Project card component
│   ├── ProjectGrid.vue      # Projects grid layout
│   ├── ProjectPage.vue      # Project detail template
│   ├── CsabaImage.vue       # Profile image with hover
│   ├── Breadcrumbs.vue      # Breadcrumb navigation
│   └── blog/                # Blog-related components
│       ├── BlogCard.vue
│       ├── Image.vue
│       └── Markdown/
├── layouts/                 # Page layout wrappers
│   ├── default.vue          # Main layout with header/footer
│   └── error.vue            # Error page layout
├── plugins/                 # Nuxt plugins
│   ├── firebase.client.js   # Firebase configuration
│   ├── lazyload.js          # Vue-lazyload setup
│   ├── globalComponents.js  # Global component registration
│   └── LightGallery.js      # Image gallery plugin
├── store/                   # Vuex store
│   └── index.js             # Store with nuxtClientInit/ServerInit
├── server/                  # Custom Express server
│   └── index.js             # Express app entry point
├── assets/                  # Compiled assets
│   ├── css/
│   │   ├── main.scss        # Main stylesheet
│   │   ├── base/            # Base styles (_fonts, _general, _links)
│   │   └── utilities/       # Variables and keyframes
│   └── images/              # Blog/project images
├── contents/                # Blog content
│   └── en/
│       ├── blogsEn.js       # Blog post slug list
│       └── blog/*.md        # Markdown blog posts
├── static/                  # Static files (served at /)
│   ├── favicon/
│   ├── img/
│   └── sw.js                # Service worker
├── nuxt.config.js           # Nuxt configuration
├── firebase.json            # Firebase hosting config
└── package.json             # Dependencies & scripts
```

## Coding Conventions

### Vue Components

- **File naming:** PascalCase for components (e.g., `ProjectCard.vue`)
- **Structure:** Template → Script → Style sections
- **Props:** Use object syntax with types and required flags
- **Styles:** Prefer `<style scoped>` or scoped SCSS

```vue
<template>
  <v-card>
    <!-- Template content -->
  </v-card>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    description: { type: String, default: '' }
  },
  data: () => ({
    localState: null
  }),
  computed: {
    computedValue() { /* ... */ }
  },
  methods: {
    handleClick() { /* ... */ }
  }
}
</script>

<style scoped lang="scss">
// Scoped styles
</style>
```

### Vuetify Usage

- **Layout:** `<v-container>`, `<v-row>`, `<v-col>` with breakpoints
- **Grid breakpoints:** `cols`, `sm`, `md`, `lg`, `xl`
- **Cards:** `<v-card>`, `<v-card-title>`, `<v-card-text>`, `<v-card-actions>`
- **Navigation:** `<v-btn :to="path">` for internal links
- **Icons:** Material Design Icons (e.g., `mdi-github`, `mdi-linkedin`)
- **Theme:** Access via `this.$vuetify.theme.dark`

### SCSS Conventions

- **Variables:** Defined in `assets/css/utilities/_variables.scss`
- **Naming:** BEM-like pattern (`.component`, `.component__element`, `.component--modifier`)
- **Breakpoints:** `$screen-sm: 600px`, `$screen-md: 960px`, `$screen-lg: 1264px`
- **Colors:** Use defined variables (`$color-primary`, `$color-secondary`)

### File Naming

| Type | Convention | Example |
|------|------------|---------|
| Pages | kebab-case | `projects.vue`, `project-portfolio.vue` |
| Components | PascalCase | `ProjectCard.vue`, `BlogCard.vue` |
| SCSS partials | _prefix | `_variables.scss`, `_fonts.scss` |
| Blog posts | kebab-case | `dark-mode-for-website-with-nuxtjs-and-vuetify.md` |

## Key Patterns

### Dynamic Blog Routes

Blog posts use dynamic routing with `_slug.vue`:

```javascript
// Loading blog content dynamically
const fileContent = await import(`~/contents/en/blog/${slug}.md`)
```

Blog slugs are registered in `contents/en/blogsEn.js` for static generation.

### Form Validation (Vuelidate)

```javascript
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  validations: {
    email: { required, email }
  }
}
```

### Firebase Integration

```javascript
import { fireDb } from '~/plugins/firebase.client.js'

// Add to Firestore
await fireDb.collection("contacts").doc(uuidv4()).set({
  name: this.name,
  email: this.email,
  submittedDate: new Date()
})
```

### Dark Mode Toggle

```javascript
// Detect system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

// Toggle theme
this.$vuetify.theme.dark = !this.$vuetify.theme.dark
```

### Responsive Images

Uses `responsive-loader` with Sharp for automatic image optimization:

```vue
<img :src="require('~/assets/images/photo.jpg?size=800').src" />
```

### Lazy Loading

Images use `vue-lazyload`:

```vue
<img v-lazy="imageSrc" />
```

## Configuration Files

### nuxt.config.js

Key configurations:
- **mode:** 'spa' (Single Page Application)
- **head:** SEO meta tags, Open Graph, favicons
- **css:** Global stylesheets
- **plugins:** Firebase, lazyload, global components, light gallery
- **modules:** Vuetify, GTM, PWA, Axios
- **build:** Webpack loaders for markdown, responsive images

### firebase.json

```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
  }
}
```

## Development Workflow

1. **Start development:** `npm run dev`
   - Express server with Nuxt builder
   - Hot reload enabled
   - Available at http://localhost:3000

2. **Add new blog post:**
   - Create `.md` file in `contents/en/blog/`
   - Add slug to `contents/en/blogsEn.js`
   - Include YAML frontmatter (title, description, date, image)

3. **Add new project:**
   - Create `project-{name}.vue` in `pages/`
   - Add to navigation/projects listing

4. **Deploy:**
   - `npm run deploy` (generates static + deploys to Firebase)

## Important Notes

- **No test framework:** Testing is not configured in this project
- **Formatter:** Prettier is available (`prettier` in devDependencies)
- **Node version:** Not locked (consider adding `.nvmrc`)
- **Package manager:** npm (uses `package-lock.json`)

## Common Tasks

### Adding a New Component

1. Create `.vue` file in `components/`
2. Use PascalCase naming
3. Import where needed or register globally in `plugins/globalComponents.js`

### Adding a New Page

1. Create `.vue` file in `pages/`
2. Use kebab-case naming
3. Nuxt auto-routes based on file name

### Modifying Styles

1. Global styles: Edit files in `assets/css/`
2. Component styles: Use `<style scoped>` in component
3. Vuetify theme: Modify `assets/variables.scss`

### Working with Blog Posts

Blog post frontmatter format:

```yaml
---
title: Post Title
description: Brief description for SEO
image: /img/blog/cover-image.jpg
date: 2024-01-15
tags: [nuxt, vue, javascript]
---
```

## Architecture Decisions

- **SPA mode:** Chosen for simpler hosting (Firebase static)
- **Vuetify:** Material Design for consistent UI with dark mode support
- **Markdown content:** Enables easy blog post creation without CMS
- **Firebase:** Serverless backend for contact form submissions
- **GTM integration:** Centralized analytics and tracking management
