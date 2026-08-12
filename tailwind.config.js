/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  // Must list ts,tsx — omitting an extension makes those files invisible to
  // Tailwind, which silently tree-shakes their classes out with no build error.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./content/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1250px",
    },
    extend: {
      // Extended, not replaced — setting fontFamily at theme root wipes out
      // Tailwind's whole scale, leaving body copy with no font-sans to inherit.
      fontFamily: {
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrainsMono)", "ui-monospace", "monospace"],
      },
      colors: {
        // Near-black page with raised card surfaces, as in the reference.
        canvas: "#0d0d0e",
        surface: {
          DEFAULT: "#1c1c1e",
          raised: "#232326",
          sunken: "#161618",
        },
        hairline: {
          DEFAULT: "#2e2e32",
          strong: "#3a3a3f",
        },
        // Coral retained as the accent rather than the reference's gold.
        accent: {
          DEFAULT: "#f97c7c",
          hover: "#fe5757",
          muted: "#8a4b4b",
        },
        trinary: "#7be382",
      },
      boxShadow: {
        card: "0 16px 40px -24px rgba(0, 0, 0, 0.9)",
        raised: "0 20px 50px -28px rgba(0, 0, 0, 0.95)",
      },
      borderRadius: {
        shell: "24px",
        card: "16px",
        tile: "12px",
      },
      keyframes: {
        "panel-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "panel-in": "panel-in 340ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar")({
      preferredStrategy: "pseudoelements",
      nocompatible: true,
    }),
  ],
};
