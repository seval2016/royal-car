// Tailwind CSS Configuration for Royal Car Design
tailwind.config = {
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
                brand: {
                    yellow: "hsl(var(--brand-yellow))",
                    yellowDark: "hsl(var(--brand-yellow-dark))",
                    dark: "hsl(var(--brand-dark))",
                    cream: "hsl(var(--brand-cream))",
                    lightGray: "hsl(var(--brand-light-gray))",
                    gray: {
                        light: "hsl(var(--brand-gray-light))",
                        medium: "hsl(var(--brand-gray-medium))",
                        dark: "hsl(var(--brand-gray-dark))",
                    },
                    text: {
                        light: "hsl(var(--brand-text-light))",
                        gray: "hsl(var(--brand-text-gray))",
                    },
                    border: "hsl(var(--brand-border))",
                    borderLight: "#eeeeee",
                    bgOverlay: "hsl(var(--brand-bg-overlay))",
                    formBg: "hsl(var(--brand-form-bg))",
                }
            },
            fontSize: {
                'xs-custom': '0.625rem',
                'sm-custom': '0.6875rem',
                'base-custom': '0.8125rem',
                'md-custom': '0.875rem',
                'lg-custom': '0.9375rem',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
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
                "fade-in": {
                    from: { opacity: 0, transform: "translateY(20px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                },
                "fade-in-delay": {
                    from: { opacity: 0, transform: "translateY(20px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                },
                "fade-in-delay-2": {
                    from: { opacity: 0, transform: "translateY(20px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                },
                "bounce-in": {
                    from: { opacity: 0, transform: "scale(0.8)" },
                    to: { opacity: 1, transform: "scale(1)" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in": "fade-in 0.8s ease-out",
                "fade-in-delay": "fade-in-delay 0.8s ease-out 0.2s both",
                "fade-in-delay-2": "fade-in-delay-2 0.8s ease-out 0.4s both",
                "bounce-in": "bounce-in 0.8s ease-out 0.6s both",
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
        }
    }
}
