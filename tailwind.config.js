module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'cursive']
      },
      boxShadow: {
        'forSearch': '0px 4px 50px rgba(111, 111, 111, 0.1)'
      }
    },
  },
  plugins: [],
}
