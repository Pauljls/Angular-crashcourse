/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light"], // Esto establece light como tema único
    // O si quieres tener múltiples temas pero light por defecto:
    // themes: true, // Esto habilita todos los temas
    // defaultTheme: "light", // Esto establece light como tema por defecto
  }
}
