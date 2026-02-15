// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // 伺服器設定
  server: {
    port: 3001,           // 開發伺服器 port
    open: true,           // 自動打開瀏覽器
    host: true,           // 允許外部存取（手機測試用）
  },
  
  // 建置設定
  build: {
    outDir: 'dist',       // 輸出資料夾
    minify: 'terser',     // 壓縮 JS
    sourcemap: false,     // 不產生 source map
  },
  
  // 基礎路徑（如果部署在子目錄需要設定）
  base: './',
});
