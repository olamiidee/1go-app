/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // home: "url('/images/wall3.jpeg')",
        reg1: "url('/images/reg1.jpg')",
        home: "url('/images/home.jpg')",
      },
    },
  },
  plugins: [],
};
