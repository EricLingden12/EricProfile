export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkThem: "#11001F",
      },
    },
  },
  darkMode: "selector",
  plugins: ["@tailwindcss/postcss"],
};
