/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        dark: {
          100: "#282C34",
          200: "#464B57",
          300: "#656C7A",
          400: "#878E9C",
          500: "#ABB2BF",
        },
        red: {
          100: "#E06C75",
          200: "#D85961",
          300: "#D1474C",
          400: "#C93539",
          500: "#C22526",
        },
        green: {
          100: "#98C379",
          200: "#80B166",
          300: "#6A9F55",
          400: "#558E46",
          500: "#417C38",
        },
        yellow: {
          100: "#E5C07B",
          200: "#E8BB68",
          300: "#EBB654",
          400: "#EEB140",
          500: "#F1AC2B",
        },
        blue: {
          100: "#61AFEF",
          200: "#4DA1E6",
          300: "#3B94DD",
          400: "#2A88D4",
          500: "#1A7CCB",
        },
        purple: {
          100: "#C678DD",
          200: "#B868D1",
          300: "#AB59C4",
          400: "#9E4BB8",
          500: "#913EAB",
        },
        cyan: {
          100: "#56B6C2",
          200: "#47B4C1",
          300: "#37B3C0",
          400: "#28B2BF",
          500: "#19B1BD",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "blink": "blink 1s step-end infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}