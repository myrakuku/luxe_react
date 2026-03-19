/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-bg': '#E3E3E3',
        'text-primary': '#666666',
      },
      fontFamily: {
        // 定義 playfair 字體別名，優先使用 Playfair Display
        playfair: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'], // 保留無襯線字體用於正文
      },
    },
  },
  plugins: [],
}