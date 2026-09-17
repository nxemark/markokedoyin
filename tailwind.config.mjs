/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'monospace'],
      },
      colors: {
        background: {
          light: '#fdfdfd',
          dark: '#0e1013',
        },
        surface: {
          light: '#f4f4f6',
          dark: '#16191f',
        },
        border: {
          light: '#e2e4e8',
          dark: '#262930',
        },
        primary: {
          light: '#111827',
          dark: '#f9fafb',
        },
        muted: {
          light: '#6b7280',
          dark: '#9ca3af',
        }
      }
    },
  },
  plugins: [],
}
