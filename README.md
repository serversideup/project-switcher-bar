# @serversideup/project-switcher-bar

ServerSideUp branded toolbar with product navigation for documentation sites. Displays the ServerSideUp logo, a "Browse Products" dropdown with Premium/Books/Open Source sections, navigation links, and social icons.

## Installation

This package is installed directly from GitHub (no registry needed):

```bash
# Always use the latest from main
yarn add https://github.com/serversideup/project-switcher-bar

# Or pin to a specific version tag
yarn add https://github.com/serversideup/project-switcher-bar#v0.0.1
```

To update to the latest version later:

```bash
yarn upgrade @serversideup/project-switcher-bar
```

### Tailwind v4 Source Detection

Since the component lives in `node_modules`, Tailwind v4 needs to be told to scan it for utility classes. Add a `@source` directive to your main CSS file:

```css
@import "tailwindcss";
@source "../node_modules/@serversideup/project-switcher-bar/src";
```

## Usage

```vue
<script setup>
import { ProjectSwitcherBar } from '@serversideup/project-switcher-bar'
</script>

<template>
  <ProjectSwitcherBar />
</template>
```

The component ships as a raw `.vue` SFC — your Nuxt/Vite build compiles it natively.

## How It Works

- Product and open source data is baked into `src/data.json` (auto-updated by CI from the main serversideup.net content)
- Logos are embedded as base64 data URIs — no external assets needed
- Navigation links and social icons are hardcoded in the component
- Uses `<a>` tags (not `<NuxtLink>`) so it works in any Vue project

## Data Updates

The `src/data.json` file is automatically updated by CI when products or open source projects change on serversideup.net. A GitHub Action automatically bumps the version and creates a new tag whenever `src/` changes.

## Development

```bash
yarn install
yarn dev
```

Opens a Vite dev server with a preview page rendering the component.

## License

MIT
