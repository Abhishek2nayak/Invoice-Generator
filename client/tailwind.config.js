/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts}"],
  theme: {
    extend: {},
   
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "fantasy"],
  },
 
}

