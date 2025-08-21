/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
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
        // Proje özel renkleri - CSS Variables ile
        brand: {
          yellow: "hsl(var(--brand-yellow))",           /* #ffcd00 - Ana marka rengi */
          yellowDark: "hsl(var(--brand-yellow-dark))",  /* #e6b800 - Hover durumu */
          dark: "hsl(var(--brand-dark))",               /* #333333 - Koyu metin rengi */
          cream: "hsl(var(--brand-cream))",             /* #f8f4da - Krem arka plan */
          lightGray: "hsl(var(--brand-light-gray))",    /* #aaaaaa - Açık gri */
          gray: {
            light: "hsl(var(--brand-gray-light))",      /* #777777 - Orta açık gri */
            medium: "hsl(var(--brand-gray-medium))",    /* #999999 - Orta gri */
            dark: "hsl(var(--brand-gray-dark))",        /* #444444 - Koyu gri */
          },
          text: {
            light: "hsl(var(--brand-text-light))",      /* #666666 - Açık metin rengi */
            gray: "hsl(var(--brand-text-gray))",        /* #999999 - Gri metin rengi */
          },
          border: "hsl(var(--brand-border))",           /* #f4f4f4 - Kenarlık rengi */
          borderLight: "#eeeeee",                       /* #eeeeee - Açık kenarlık rengi */
          bgOverlay: "hsl(var(--brand-bg-overlay))",    /* rgba(51, 51, 51, 0.8) - Overlay */
          formBg: "hsl(var(--brand-form-bg))",          /* rgba(51, 51, 51, 0.9) - Form arka plan */
        }
      },
             fontSize: {
         // Proje özel font boyutları
         'xs-custom': '0.625rem',    // 10px
         'sm-custom': '0.6875rem',   // 11px
         'base-custom': '0.8125rem', // 13px
         'md-custom': '0.875rem',    // 14px
         'lg-custom': '0.9375rem',   // 15px
       },
      spacing: {
        // Proje özel spacing değerleri
        '18': '4.5rem',    // 72px
        '88': '22rem',     // 352px
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
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
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1200px',
        },
      },
    },
  },
  plugins: [],
}
