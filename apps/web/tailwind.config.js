/** @type {import('tailwindcss').Config} */
export default {
  // TODO: Improve support for monorepo
  content: ["./index.html", "./src/**/*.tsx", "../../packages/ui/src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        "10xl": "16em",
      },
      lineHeight: {
        "negative-1": "0.9",
        "negative-2": "0.8",
      },
    },
  },
  plugins: [],
};
