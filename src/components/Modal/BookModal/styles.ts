import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '@stitches/react'

// MODAL - BOOK //
export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
})

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  left: '45%',
  height: '100%',

  backgroundColor: '$gray800',

  display: 'flex',
  flexDirection: 'column',
  padding: '1.5rem 3rem',
  gap: '$10',
})

export const CloseButton = styled(Dialog.Close, {
  marginLeft: 'auto',
  color: '$gray400',
  cursor: 'pointer',

  transition: 'all 0.3s',

  '&:hover': {
    opacity: 0.7,
  },
})

export const BookDetails = styled('div', {
  backgroundColor: '$gray700',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '1.5rem 2rem 1rem',
  gap: '2.5rem',
})

export const BookAbout = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '1.5rem 0',
  gap: '3.5rem',

  borderTop: '1px solid $colors$gray600',
})

export const AboutItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  svg: {
    color: '$green100',
  },

  '& > div': {
    display: 'flex',
    flexDirection: 'column',

    span: {
      color: '$gray300',
      fontSize: '$sm',
    },

    strong: {
      color: '$gray200',
    },
  },
})

// AVALIAÇÕES //
export const Ratings = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  '& > header': {
    display: 'flex',
    justifyContent: 'space-between',

    span: {
      color: '$gray200',
      fontSize: '$sm',
    },

    button: {
      color: '$purple100',
      fontWeight: '$bold',
      fontSize: '$sm',
      cursor: 'pointer',
      transition: 'all 0.3s',

      '&:hover': {
        opacity: 0.7,
      },
    },
  },

  // LISTA DAS AVALIAÇÕES //
  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
})
