/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // utilities will be `font-brittany`, `font-brittany-signature`, `font-gagalin`
        'brittany': ['Brittany', 'Brush Script MT', 'cursive'],
        'brittany-signature': ['Brittany Signature', 'Brittany', 'Brush Script MT', 'cursive'],
        'gagalin': ['MistV', 'Impact', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
