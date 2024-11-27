/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Bao gồm tất cả file trong thư mục src
    "./public/index.html",        // Bao gồm file index.html nếu cần
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
