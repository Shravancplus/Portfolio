import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBackground: "#212529",
        customLightText: '#f6f9fc',
        customBackgroundMinusOne:"#32325d",
        customCyan:"#26c6da",
      },
    },
  },
  plugins: [],
};
export default config;
