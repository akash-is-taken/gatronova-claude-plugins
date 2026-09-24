/**
 * Gatronova Tailwind preset (v3).
 * tailwind.config.js:  module.exports = { presets: [require('./tailwind.preset.js')], content: [...] }
 * Tailwind v4: paste the :root block from tokens.css into an @theme block instead.
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1D1C55',
          80: '#3D3C73',
          15: '#E4E4EE',
          deep: '#100F33',
        },
        sky: {
          DEFAULT: '#26A9E1',
          12: '#E3F3FB',
        },
        ink: '#1A1A1A',
        surface: '#F5F6F8',
        line: '#E5E7EB',
        muted: '#8A8A99',
      },
      fontFamily: {
        heading: ['Calibri', 'Carlito', '"Segoe UI"', 'system-ui', 'sans-serif'],
        body: ['Arial', 'Helvetica', '"Liberation Sans"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '4px',
        sm: '2px',
        md: '4px',
        lg: '8px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(29, 28, 85, 0.08)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.clip-flag': { clipPath: 'polygon(0 0, 100% 18%, 100% 100%, 0 100%)' },
      });
    },
  ],
};
