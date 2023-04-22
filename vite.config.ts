import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components({
      // add components here to make them globally available
      dirs: ["src/components/"]
    }),
    vue(),
    // AutoImport({
    //   imports: [
    //     {
    //       'vue'
    //     }
    //   ]
    // })
  ],
})
