import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F7F6F2",
        creme: "#ECEAE3",
        ink: "#14181A",
        laub: {
          50: "#F1F5EA",
          100: "#DEE8CF",
          200: "#BFD2A0",
          300: "#9AB873",
          400: "#739750",
          500: "#52763A",
          600: "#41602E",
          700: "#334B25",
          800: "#26391C",
          900: "#1A2713"
        },
        erde: {
          50: "#FCF4E6",
          100: "#F8E4C1",
          200: "#F0C988",
          300: "#E5A443",
          400: "#CB8529",
          500: "#A86A1E",
          600: "#8A5718",
          700: "#6A4314",
          800: "#4B300F",
          900: "#2F1E0A"
        },
        kies: {
          50: "#F4F4F2",
          100: "#E6E6E2",
          200: "#CDCEC7",
          300: "#B0B2A9",
          400: "#94968C",
          500: "#7C7F78",
          600: "#63665F",
          700: "#4C4E48",
          800: "#363832",
          900: "#23261F"
        }
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-geist)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"]
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      }
    }
  },
  plugins: []
};

export default config;
