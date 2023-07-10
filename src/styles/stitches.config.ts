// stitches.config.ts
import { createStitches } from '@stitches/react'

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      default: 'Nunito, sans-serif',
    },

    space: {
      px: '1px',
      1: '0.25rem', // 4
      2: '0.5rem', // 8
      3: '0.75rem', // 12
      4: '1rem', // 16
      5: '1.25rem', // 20
      6: '1.5rem', // 24
      7: '1.75rem', // 28
      8: '2rem', // 32
      9: '2.5rem', // 36
      10: '2.75rem', // 40
    },

    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
    },

    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },

    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },

    colors: {
      white: '#FFFFFF',
      black: '#000000',

      green100: '#50B2C0',
      green200: '#255D6A',
      green300: '#0A313C',

      purple100: '#8381D9',
      purple200: '#2A2879',

      gray100: '#F8F9FC',
      gray200: '#E6E8F2',
      gray300: '#D1D6E4',
      gray400: '#8D95AF',
      gray450: '#7C7C8A',
      gray500: '#303F73',
      gray600: '#252D4A',
      gray700: '#181C2A',
      gray800: '#0E1116',

      'gradient-vertical': `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)`,
      'gradient-horizontal': `linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)`,

      red500: '#F75A68',
    },

    radii: {
      xs: '2.5px',
      sm: '5px',
      md: '10px',
      lg: '20px',
      full: '99999px',
    },
  },
})
