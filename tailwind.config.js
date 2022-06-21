module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'cursive'],
        'Inter': ['Inter', 'cursive'],
      },
      boxShadow: {
        'forSearch': '0px 4px 50px rgba(111, 111, 111, 0.1)',
        'forHackathon': '0px 4px 43px rgba(0, 0, 0, 0.08)',
      },
      colors: {
        statusColor: 'rgba(242, 201, 76, 0.25)',
        statusColorActive: 'rgba(68, 146, 76, 0.24)',
        statusColorPast: 'rgba(255, 60, 0, 0.170148)',
      }
    },
  },
  plugins: [],
}
