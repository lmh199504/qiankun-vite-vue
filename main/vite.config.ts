import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
		alias: {
			'@/': '/src/',
			'@pages/': '/src/pages/',
		},
	},
  server: {
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
