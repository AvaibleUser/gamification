const path = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.component.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["acid"],
  },
};
