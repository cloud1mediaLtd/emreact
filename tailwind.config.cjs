/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1.2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {},
  },
  plugins: [require("flowbite/plugin")],

  darkMode: "class",
};
