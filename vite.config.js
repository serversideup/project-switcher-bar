import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    // Dev playground
    return {
      root: 'dev',
      plugins: [
        vue(),
        tailwindcss(),
      ],
    }
  }

  // Library build — pre-compiles the Vue SFC to plain JS
  return {
    plugins: [vue()],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.js'),
        formats: ['es'],
        fileName: () => 'index.mjs',
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: { vue: 'Vue' },
        },
      },
    },
  }
})
