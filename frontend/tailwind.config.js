module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#3b82f6",
          600: "#2563eb",
        },
        green: {
          500: "#10b981",
          600: "#059669",
        },
        // Agrega más colores según sea necesario
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
