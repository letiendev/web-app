import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
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
        // Original colors
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Glamo Design System Colors
        glamo: {
          bg: {
            primary: "#3C3F44",
            secondary: "#4F5D66",
            dark: "#121212",
          },
          blue: {
            50: "#E8F2FF",
            100: "#C6DEFF",
            200: "#9BC4FF",
            300: "#6EA9FF",
            400: "#4A8FFF",
            500: "#5E6F83",
            600: "#607392",
            700: "#667CA3",
            800: "#5C6D81",
            900: "#424549",
          },
          gray: {
            100: "#D9D9D9",
            200: "#C5C5C5",
            300: "#9E9E9E",
            400: "#757575",
            500: "#616161",
            600: "#424242",
            700: "#303030",
            800: "#212121",
            900: "#121212",
          },
          red: {
            DEFAULT: "#F05D5E",
            500: "#F05D5E",
          },
          yellow: {
            DEFAULT: "#FFFF00",
            text: "#FFF8BD",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        'noto': ['Noto Sans JP', 'system-ui', 'sans-serif'],
      },
            backgroundImage: {
        'glamo-gradient': 'linear-gradient(90deg, #3C3F44 0.2%, #3C3F43 48.44%, #4F5D66 99.8%)',
        'header-gradient': 'linear-gradient(241deg, rgba(94, 111, 131, 0.85) 0%, rgba(99, 119, 153, 0.85) 48.44%, rgba(102, 124, 163, 0.85) 100%)',
        'button-gradient': 'linear-gradient(180deg, #5E6E81 0%, #607392 26.56%, #667CA3 61.46%)',
        'card-gradient': 'linear-gradient(241deg, #5E6F83 0%, #637799 48.44%, #667CA3 100%)',
      },
      spacing: {
        '15': '3.75rem',
        '18': '4.5rem',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
