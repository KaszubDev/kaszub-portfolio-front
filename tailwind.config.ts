import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      padding: '20px'
    },
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif']
      },
      height: {
        '0.7': '0.175rem',
        '0.8': '0.2rem',
        '0.9': '0.225rem'
      },
    },
  },
  plugins: [
    
  ],
}
export default config
