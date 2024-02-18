import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@config': '/config',
      '@components': '/src/components',
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['src/components/**/*.test.{js,ts,jsx,tsx}'],
  },
})
