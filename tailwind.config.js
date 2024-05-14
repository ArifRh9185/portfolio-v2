/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*{html,js}"],
  theme: {
    fontFamily: {
      'sora': ['Sora', 'sans-serif'],
      'poppin': ['Poppins', 'sans-serif'],
      'pacifico': ['pacifico', 'cursive']
    },
    radialGradient: {
      'top-left': 'radial-gradient(at top left, var(--tw-gradient-stops))',
      'top-right': 'radial-gradient(at top right, var(--tw-gradient-stops))',
      'bottom-left': 'radial-gradient(at bottom left, var(--tw-gradient-stops))',
      'bottom-right': 'radial-gradient(at bottom right, var(--tw-gradient-stops))',
    },
    extend: {
      backgroundImage: theme => ({
        'gradient-to': {
          'to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
          'to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
          'to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
          'to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
          'to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
          'to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
          'to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
          'to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
          'radial': theme('radialGradient'),
        },
        'building': "url('src/image/building.jpg')",
        'building-night': "url('/src/image/building-night.jpg')",
        'indomaret': "url('/src/image/indomaret.png')",
        'ace': "url('/src/image/ace.png')",
      }),
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite',
        combine: 'spin-slow, pulse',
        bounceSlow : 'bounce 10s infinite'
      },
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}

