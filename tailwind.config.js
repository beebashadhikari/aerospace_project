module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#00AEEF", // electric-blue
        secondary: "#2ED9FF", // cool-cyan
        accent: "#5A5AFF", // deep-violet
        
        // Background Colors
        background: "#1A1A1A", // rich-black
        surface: "#2D2D2D", // charcoal-gray
        
        // Text Colors
        "text-primary": "#FFFFFF", // pure-white
        "text-secondary": "#C0C0C0", // metallic-silver
        
        // Status Colors
        success: "#00FF88", // mission-green
        warning: "#FF6F3C", // burnt-orange
        error: "#FF4757", // clear-red
        
        // Additional Shades for Flexibility
        "primary-50": "#E6F7FF", // light-electric-blue
        "primary-100": "#B3E5FF", // lighter-electric-blue
        "primary-500": "#00AEEF", // electric-blue
        "primary-700": "#0088CC", // darker-electric-blue
        "primary-900": "#005577", // darkest-electric-blue
        
        "surface-50": "#F5F5F5", // lightest-gray
        "surface-100": "#E0E0E0", // light-gray
        "surface-200": "#CCCCCC", // medium-light-gray
        "surface-300": "#B3B3B3", // medium-gray
        "surface-400": "#999999", // medium-dark-gray
        "surface-500": "#2D2D2D", // charcoal-gray
        "surface-600": "#262626", // darker-charcoal
        "surface-700": "#1F1F1F", // darkest-charcoal
        "surface-800": "#1A1A1A", // rich-black
        "surface-900": "#0D0D0D", // deepest-black
      },
      fontFamily: {
        headline: ['Orbitron', 'sans-serif'],
        body: ['IBM Plex Sans', 'sans-serif'],
        cta: ['Orbitron', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'elevation': '0 4px 20px rgba(0, 174, 239, 0.1)',
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 20px rgba(0, 174, 239, 0.3)',
        'glow-accent': '0 0 20px rgba(90, 90, 255, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 174, 239, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 174, 239, 0.5)' },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'precision': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'aerospace': '0.375rem',
      },
    },
  },
  plugins: [],
}