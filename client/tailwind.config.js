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
  resolve: {
    fallback: {
      // "buffer": require.resolve("buffer/"),
      "crypto": require.resolve("crypto-browserify")
    }
    
  }
  
 
}

