/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
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
        // Proje özel renkleri
        brand: {
          yellow: '#ffcd00',
          dark: '#333333',
          cream: '#f8f4da',
          lightGray: '#aaaaaa',
          gray: {
            light: '#777777',
            medium: '#999999',
            dark: '#444444',
          }
        }
      },
             fontSize: {
         // Proje özel font boyutları
         'xs-custom': '0.625rem',    // 10px
         'sm-custom': '0.6875rem',   // 11px
         'base-custom': '0.8125rem', // 13px
         'md-custom': '0.875rem',    // 14px
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
