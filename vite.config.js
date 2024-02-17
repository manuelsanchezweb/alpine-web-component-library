import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['src/components/**/*.test.{js,ts,jsx,tsx}'],
  },
})
