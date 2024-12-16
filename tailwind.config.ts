import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundPrimary: "#020617",
        backgroundPrimaryRgba: "rgba(255,255,240,0.2)",
        buttonColor: "#5eead4",
        hoverButtonColor: "#2dd4bf",
        textColor: "#bfdbfe",
      },
    },
  },
  plugins: [],
} satisfies Config;
