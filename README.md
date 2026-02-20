# @serversideup/project-switcher-bar

ServerSideUp branded toolbar with product navigation for documentation sites. Displays the ServerSideUp logo, a "Browse Products" dropdown with Premium/Books/Open Source sections, navigation links, and social icons.

## Installation

```bash
yarn add @serversideup/project-switcher-bar
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

The component ships as a raw `.vue` SFC — your Nuxt/Vite build compiles it natively. Tailwind v4's Vite plugin automatically picks up the utility classes from the module graph.

## How It Works

- Product and open source data is baked into `src/data.json` (auto-updated by CI from the main serversideup.net content)
- Logos are embedded as base64 data URIs — no external assets needed
- Navigation links and social icons are hardcoded in the component
- Uses `<a>` tags (not `<NuxtLink>`) so it works in any Vue project

## Development

```bash
yarn install
yarn dev
```

Opens a Vite dev server with a preview page rendering the component.

## Data Updates

The `src/data.json` file is automatically updated by CI when products or open source projects change on serversideup.net. A GitHub Action publishes a new patch version to NPM whenever `src/` changes.

## License

MIT
