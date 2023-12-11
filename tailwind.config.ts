import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      maxWidth: {
        container: '920px',
      },

      fontFamily: {
        sans: 'var(--font-inter)',
        mono: 'var(--font-m-plus-rounded)'
      },
      colors: {
        background: {
          dark: '#171923',
          light: '#E2E8F0'
        },
        accent: {
          dark: '#4F0227',
          default: '#78023B',
          light: '#C50360'
        },
        primary: {
          dark: '#2C4C61',
          default: '#607F94',
          light: '#BBE1FA'
        },
        gray: {
          dark: '#4A5568',
          default: '#718096',
          light: '#E2E8F0'
        }
      }
    }
  },
  plugins: [],
}
export default config
