import { defineConfig } from 'vite';

// ❌ This will cause an error in reality
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
   // ❌ Again, this is fictional
  ],
})
