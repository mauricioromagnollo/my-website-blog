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
          dark: '#878B92',
          light: '#D5DCE8'
        },
        success: '#45DE45',
        warning: '#F7C948',
        danger: '#F03E3E',
        white: '#FAFAFA',
        black: '#000000'
      }
    }
  },
  plugins: [],
}
export default config
