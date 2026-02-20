<template>
  <div class="min-h-screen bg-gray-900">
    <ProjectSwitcherBar />
    <div class="max-w-4xl mx-auto p-8 text-gray-300">
      <h1 class="text-2xl font-bold mb-4">Project Switcher Bar Preview</h1>
      <p class="text-gray-400">
        This is a development preview of the ServerSideUp project switcher bar component.
        Click "Browse Products" to see the dropdown menu.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ProjectSwitcherBar } from '../src/index.js'
</script>
