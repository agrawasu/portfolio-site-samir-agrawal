/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  // Must include ts/tsx — the site is TypeScript now, and any extension missing
  // here is silently invisible to Tailwind, so its classes never get generated.
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
      // 15px everywhere left content jammed against the viewport edge on
      // anything wider than a phone.
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
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      // Extended, not replaced — setting fontFamily at theme root wipes out
      // Tailwind's whole scale, which is why body copy had no option but mono.
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrainsMono)", "ui-monospace", "monospace"],
      },
      colors: {
        primary: "#1e2124",
        secondary: "#282b30",
        trinary: "#7be382",
        accent: {
          DEFAULT: "#f97c7c",
          hover: "#fe5757",
          greyed: "#a29090",
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      rotate: {
        360: "360deg",
        520: "520deg",
        720: "720deg",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar")( { preferredStrategy: 'pseudoelements', nocompatible: true }),
  ],
};
