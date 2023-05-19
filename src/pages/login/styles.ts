import { styled } from '@stitches/react'
import Image from 'next/image'

export const Container = styled('div', {
  maxWidth: 1440,
  margin: '0 auto',
  padding: '$5',

  display: 'grid',
  gridTemplateColumns: '598px 1fr',
})

export const HeroImage = styled(Image, {
  borderRadius: '$md',
  objectFit: 'contain',
})

export const LoginContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  margin: 'auto',
  padding: '$4',
  maxWidth: 372,
  width: '100%',

  header: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },

  h2: {
    fontSize: '$2xl',
    fontWeight: 700,
  },

  span: {
    fontSize: '$md',
    color: '$gray200',
  },
})

export const LoginForm = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '$10',
})

export const ActionsButtons = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const LoginButton = styled('button', {
  backgroundColor: '$gray600',
  color: '$gray200',
  borderRadius: '$md',

  padding: '$5 $6',

  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  fontWeight: 700,
  cursor: 'pointer',
  border: 'solid 1px $gray600',
  transition: 'all 0.3s ease-out',

  '&:hover': {
    backgroundColor: '$gray500',
  },

  '&:focus': {
    borderColor: '$purple100',
  },
})
