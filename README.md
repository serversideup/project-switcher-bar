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

## Migrating from ServerSideUp.vue

If your project has a local `ServerSideUp.vue` component (the old hardcoded toolbar), follow these steps:

### 1. Install the package

```bash
yarn add https://github.com/serversideup/project-switcher-bar
```

### 2. Add the Tailwind `@source` directive

In your main CSS file (e.g. `app/assets/css/main.css`), add:

```css
@source "../node_modules/@serversideup/project-switcher-bar/src";
```

### 3. Update `app.vue`

Replace the old component with an explicit import:

```diff
  <script setup>
+ import { ProjectSwitcherBar } from '@serversideup/project-switcher-bar'
  </script>

  <template>
    <UApp>
      <NuxtLoadingIndicator />
-     <ServerSideUp />
+     <ProjectSwitcherBar />
      <AppHeader />
```

> **Note:** If your project uses the `Global/` directory convention (e.g. Spin docs), replace `<GlobalServerSideUp />` instead.

### 4. Delete the old component

Remove the old file from whichever location it lives in your project:

```bash
# docker-php, amplitudejs, etc.
rm app/components/ServerSideUp.vue

# spin (uses Global/ subdirectory)
rm app/components/Global/ServerSideUp.vue
```

### 5. Remove `@vueuse/nuxt` (optional)

The old `ServerSideUp.vue` used `onClickOutside` from VueUse. This package uses a native `document.addEventListener` instead, so if `onClickOutside` was the only reason you had `@vueuse/nuxt` installed, you can remove it:

```bash
yarn remove @vueuse/nuxt
```

Then remove `'@vueuse/nuxt'` from the `modules` array in `nuxt.config.ts`.

## How It Works

- Product and open source data is baked into `src/data.json` (auto-updated by CI from the main serversideup.net content)
- Logos are embedded as base64 data URIs — no external assets needed
- Navigation links and social icons are hardcoded in the component
- Uses `<a>` tags (not `<NuxtLink>`) so it works in any Vue project

## Data Updates

The `src/data.json` file is automatically updated by GitLab CI when products or open source projects change on serversideup.net. Since consuming sites install from `main`, they pick up the latest data on their next `yarn install`.

## Development

```bash
yarn install
yarn dev
```

Opens a Vite dev server with a preview page rendering the component.

## License

MIT
