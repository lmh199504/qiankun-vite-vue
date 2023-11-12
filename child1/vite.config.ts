import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
const useDevMode = true
// https://vitejs.dev/config/
export default ({mode}) => {
  const __DEV__ = mode === 'development'
  return defineConfig({
    plugins: [vue(), qiankun("child1", {
      useDevMode: true
    })],
    resolve: {
      alias: {
        '@/': '/src/',
      },
    },
    server: {
      port: 40001,
      host: '0.0.0.0',
      // 设置源是因为图片资源会找错位置所以通过这个让图片等资源不会找错
      origin: '//localhost:40001',
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    base: __DEV__ ? '/child1' : '//localhost:40001',
  })
} 
