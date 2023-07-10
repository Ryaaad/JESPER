/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{tsx,jsx,ts,js}',
  ],
  theme: {
    extend: {
      screens:{
        // sm: {'max' : '480px'},
        // smm: {'min' : '481px'},
        // md:{'max' : '770px'},
        // mdm:{'min' : '771px'},
        // lg: {'max' : '978px'},
        // lgm: {'min' : '979px'},
        // xl:'1440px',
      },
    },
  },
  plugins: [],
}
