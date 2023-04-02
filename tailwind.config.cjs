/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        reg1: "url('/images/reg1.jpg')",
        home: "url('/images/home.jpg')",
        unilorin: "url('/images/unilorin.png')",
        contactBg: "url('/images/repeat2.jpg')",
        reg2: "url('/images/registerbg.jpg')",
        aboutbg: "url('/images/about.jpg')",
        bus: "url('/images/bus.jpg')",
      },
    },
  },
  plugins: [],
};
