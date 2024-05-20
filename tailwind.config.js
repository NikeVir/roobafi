/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'plex-sans': ['IBM Plex Sans', 'sans-serif'],
      },
      animation: {
        slide: 'slide1 6s infinite',
        slide2: 'slide2 6s infinite',
      },
      keyframes: {
        slide1:  {
          '0%': { right: '-10%' },
          "50%": { right: "-20%" },
          '100%': { right: '-10%' },
        },
        slide2: {
          '0%': { right: '0%' },
          "50%": { right: "10%" },
          '100%': { right: '0%' },
        }
      },
      screens: {
        '3xl': '1980px',
        '4xl': '2550px',
        '5xl': '3000px',
         
      },
    },
  },
  plugins: [],
};
