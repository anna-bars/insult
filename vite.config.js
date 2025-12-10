import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src', // Աշխատանքային թղթապանակ
  build: {
    outDir: '../dist', // Արդյունքը dist/ թղթապանակում
    rollupOptions: {
      input: {
        main: 'src/index.html', // Միայն մեկ գլխավոր էջ
        // Ավելացնել այլ էջեր հետո
      }
    }
  },
  server: {
    port: 3000,
    open: true // Ավտոմատ բացել բրաուզերը
  }
})