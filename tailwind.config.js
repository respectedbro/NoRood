/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // Укажите пути к вашим файлам
  ],
  theme: {
    extend: {
      colors: {
        brand: '#27AE60', // Пример пользовательского цвета
      },
    },
  },
  plugins: [],
}
