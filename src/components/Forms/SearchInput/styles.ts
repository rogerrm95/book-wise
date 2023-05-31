import { styled } from '@stitches/react'

export const SearchInputContainer = styled('div', {
  width: '100%',
  padding: '0.875rem 1.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$2',

  border: '1px solid $colors$gray500',
  borderRadius: '$sm',

  transition: 'all 0.3s',

  svg: {
    color: '$gray500',
  },

  '&:has(input:focus)': {
    borderColor: '$green100',

    input: {
      caretColor: '$green100',
    },

    svg: {
      color: '$green100',
    },
  },

  variants: {
    size: {
      sm: {
        maxWidth: '220px',
      },
      md: {
        maxWidth: '440px',
      },
      full: {
        maxWidth: '100%',
      },
    },
  },
})

export const Input = styled('input', {
  all: 'unset',
  width: '100%',

  backgroundColor: 'transparent',
  caretColor: '$gray500',
  fontSize: '$sm',

  '&::placeholder': {
    color: '$gray400',
  },

  '&::selection': {
    backgroundColor: '$gray500',
  },
})
