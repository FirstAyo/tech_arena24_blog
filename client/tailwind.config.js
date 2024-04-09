const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1185px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}