/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      /* === Font Families === */
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        display: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      
      /* === Colors === */
      colors: {
        // Rivalry Theme
        rivalry: {
          red: 'hsl(var(--rivalry-red) / <alpha-value>)',
          'red-glow': 'hsl(var(--rivalry-red-glow) / <alpha-value>)',
          blue: 'hsl(var(--rivalry-blue) / <alpha-value>)',
          'blue-glow': 'hsl(var(--rivalry-blue-glow) / <alpha-value>)',
        },
        
        // Surface Colors
        surface: {
          base: 'hsl(var(--surface-base) / <alpha-value>)',
          primary: 'hsl(var(--surface-primary) / <alpha-value>)',
          elevated: 'hsl(var(--surface-elevated) / <alpha-value>)',
          overlay: 'hsl(var(--surface-overlay) / <alpha-value>)',
        },
        
        // Text Colors
        text: {
          primary: 'hsl(var(--text-primary) / <alpha-value>)',
          secondary: 'hsl(var(--text-secondary) / <alpha-value>)',
          tertiary: 'hsl(var(--text-tertiary) / <alpha-value>)',
          disabled: 'hsl(var(--text-disabled) / <alpha-value>)',
        },
        
        // Accent Colors
        accent: {
          gold: 'hsl(var(--accent-gold) / <alpha-value>)',
          purple: 'hsl(var(--accent-purple) / <alpha-value>)',
          cyan: 'hsl(var(--accent-cyan) / <alpha-value>)',
        },
        
        // Shadcn compatibility
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
      },
      
      /* === Border Radius === */
      borderRadius: {
        lg: 'var(--radius-lg)',
        md: 'var(--radius-md)',
        sm: 'var(--radius-sm)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      
      /* === Spacing === */
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      /* === Typography === */
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
        '10xl': ['10rem', { lineHeight: '1' }],
        '11xl': ['12rem', { lineHeight: '1' }],
      },
      
      /* === Animation === */
      transitionTimingFunction: {
        'out-expo': 'var(--ease-out-expo)',
        'out-quart': 'var(--ease-out-quart)',
        'in-out-expo': 'var(--ease-in-out-expo)',
        'spring': 'var(--ease-spring)',
        'bounce': 'var(--ease-bounce)',
      },
      
      transitionDuration: {
        'fast': 'var(--duration-fast)',
        'normal': 'var(--duration-normal)',
        'slow': 'var(--duration-slow)',
        'slower': 'var(--duration-slower)',
      },
      
      /* === Keyframes === */
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 hsl(var(--rivalry-red) / 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 10px hsl(var(--rivalry-red) / 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 hsl(var(--rivalry-red) / 0)' },
        },
      },
      
      animation: {
        'fade-up': 'fade-up 0.6s var(--ease-out-expo) forwards',
        'fade-down': 'fade-down 0.6s var(--ease-out-expo) forwards',
        'fade-in': 'fade-in 0.4s var(--ease-out-expo) forwards',
        'scale-in': 'scale-in 0.5s var(--ease-out-expo) forwards',
        'slide-in-left': 'slide-in-left 0.8s var(--ease-out-expo) forwards',
        'slide-in-right': 'slide-in-right 0.8s var(--ease-out-expo) forwards',
        'pulse-ring': 'pulse-ring 2s ease infinite',
      },
      
      /* === Backdrop Blur === */
      backdropBlur: {
        xs: '2px',
      },
      
      /* === Z-Index === */
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
