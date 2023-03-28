/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        navLinkFont: ['Quicksand', 'sans-serif'],
        buttonFont: ['Maven Pro', 'sans-serif'],
        hIFont: ['Barlow', 'sans-serif'],
        paraFont: ['Work Sans', 'sans-serif'],
        pageTitleFont: ['Patua One', 'cursive']
      }
    },
  },
  plugins: [],
}