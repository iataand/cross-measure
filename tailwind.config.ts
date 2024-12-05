import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        black: "#000000",
        gamboge: {
          100: "#faeecb",
          200: "#f4dd93",
          300: "#efc65a",
          400: "#eab035",
          500: "#e49525",
          600: "#c96f16",
          700: "#a74f16",
          800: "#883d18",
          900: "#703317",
          950: "#401a08",
        },
        red: {
          100: "#ffe0e0",
          200: "#ffc6c6",
          300: "#ff9e9e",
          400: "#ff6666",
          500: "#fd2626",
          600: "#eb1717",
          700: "#c60f0f",
          800: "#a31111",
          900: "#871515",
          950: "#4a0505",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
