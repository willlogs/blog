/** @type {import('tailwindcss').Config} */

import * as colors from 'tailwindcss/colors';

module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {},
    colors: {
      primary: '#898C1C',
      secondary: "#F29E38",
      thirdary: "#A69677",
      fourthary: "#2C3540",
      ...colors
    }
  },
  plugins: [require("@tailwindcss/typography")],
}
