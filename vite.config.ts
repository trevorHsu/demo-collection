import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({ // 自动按需引入
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve('./src') },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "./src/styles/prefix.scss"; @import "./src/styles/variables.scss";` },
    },
  },
})
