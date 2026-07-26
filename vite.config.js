import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

// comment: This is a Vite configuration file that sets up a React project with Tailwind CSS. It imports the necessary plugins and exports the configuration using `defineConfig`. The `plugins` array includes the React plugin and the Tailwind CSS plugin, enabling their functionality in the Vite build process.