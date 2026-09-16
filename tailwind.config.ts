import type { Config } from "tailwindcss";

// NOTE: theme.extend.colors is overwritten per-generated-project by
// projectWriter.ts using the Design System output. This file is the
// fallback shape only.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E50914",
        secondary: "#A80712",
      },
      borderRadius: {
        DEFAULT: "0.375rem",
      },
    },
  },
  plugins: [],
};

export default config;
