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

  overflowY: 'auto',
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

// FORMULÁRIO DE AVALIAÇÃO - LIVRO //
export const ReviewBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  padding: '$6',

  backgroundColor: '$gray700',
  borderRadius: '$md',
})

export const ReviewHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  '& button:last-child': {
    marginLeft: 'auto',
  },
})

export const ReviewForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  marginTop: '$3',
  height: '176px',

  backgroundColor: '$gray800',
  borderRadius: '$sm',
  border: 'solid 1px $colors$gray800',

  '&:focus-within': {
    borderColor: '$colors$gray500',
  },

  textarea: {
    all: 'unset',
    height: '100%',
    overflowY: 'hidden',
    padding: '$3 $5',

    fontSize: '$sm',
    overflowWrap: 'break-word',
    textAlign: 'justify',

    color: '$gray400',
    caretColor: '$green100',

    '&::placeholder': {
      color: '$gray400',
    },
  },

  span: {
    color: '$gray450',
    padding: '$2',
    fontSize: '$sm',
    marginLeft: 'auto',
  },
})

export const ReviewActions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  alignSelf: 'flex-end',
})

const ActionButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$gray600',
  borderRadius: '$sm',
  padding: '$3',

  cursor: 'pointer',
  transition: 'all 0.3s',

  '&:hover': {
    backgroundColor: '$gray500',
  },
})

export const CancelButton = styled(ActionButton, {
  svg: {
    color: '$purple100',
  },
})

export const SaveButton = styled(ActionButton, {
  svg: {
    color: '$green100',
  },
})

// LISTA DE AVALIAÇÕES //
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
