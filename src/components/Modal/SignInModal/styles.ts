import { styled } from '@stitches/react'

import * as Dialog from '@radix-ui/react-dialog'

export const DialogOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.5)',
})

export const DialogContent = styled(Dialog.Content, {
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',

  backgroundColor: '$gray700',
  borderRadius: '$lg',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '3.5rem 4.5rem',
  gap: '$10',

  width: '100%',
  maxWidth: '450px',
})

export const DialogClose = styled(Dialog.Close, {
  position: 'absolute',
  right: '1rem',
  top: '1rem',

  cursor: 'pointer',
  transition: 'all 0.3s',

  svg: {
    color: '$gray400',
  },

  '&:hover': {
    opacity: 0.7,
    transform: 'scale(1.25)',

    svg: {
      color: '$purple100',
    },
  },
})

export const Title = styled('h4', {
  color: '$gray200',
  lineHeight: '$short',
  fontSize: '$md',
  fontWeight: '$regular',
})

export const ButtonActions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  width: '100%',
})

export const ButtonAction = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
  padding: '$5 $6',

  backgroundColor: '$gray600',
  color: '$gray200',

  borderRadius: '$md',
  border: '1px solid $colors$gray600',

  fontSize: '$md',
  fontWeight: '$bold',
  cursor: 'pointer',

  transition: 'all 0.3s',

  '&:hover': {
    backgroundColor: '$gray500',
  },

  '&:active': {
    backgroundColor: '$gray800',
  },

  '&:focus': {
    borderColor: '$purple100',
  },
})
