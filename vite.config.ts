import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [
        ["@quickbaseoss/babel-plugin-styled-components-css-namespace", {"cssNamespace": "#c2vm-tle"}],
        ["babel-plugin-styled-components", {"namespace": "c2vm-tle"}]
      ]
    }
  })],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  }
})
