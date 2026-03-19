module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#F2EDE4',   // beige background
        accent: '#9D07A6',   // deepened purple for contrast (was #B809C3)
        dark: '#1A1714',   // primary text (ink)
        muted: '#544A42',   // darkened muted text (was #6B6057)
        subtle: '#7A6D63',   // darkened subtle text (was #9E9188)
      },
      backgroundImage: {
        // bg-site removed — using solid beige
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
