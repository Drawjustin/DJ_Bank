import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 상대 경로로 빌드해야 S3 하위 경로·미리보기 어디서든 동작
  base: './',
  plugins: [react()],
});
