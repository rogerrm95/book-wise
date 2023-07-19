import { keyframes, styled } from '@stitches/react'
import Image from 'next/image'

export const Container = styled('div', {
  maxWidth: 1440,
  margin: '0 auto',
  padding: '$5',

  display: 'grid',
  gridTemplateColumns: '598px 1fr',

  // LAPTOP OR LESS //
  '@media(max-width: 992px)': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$4',
    height: '100vh',
  },
})

export const HeroImage = styled(Image, {
  borderRadius: '$md',
  objectFit: 'contain',

  // LAPTOP OR LESS //
  '@media(max-width: 992px)': {
    display: 'none',
  },
})

export const LogoImage = styled(Image, {
  display: 'none',
  borderRadius: '$md',
  objectFit: 'contain',

  // LAPTOP OR LESS //
  '@media(max-width: 992px)': {
    display: 'block',
  },
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

  '&:active': {
    backgroundColor: '$gray800',
  },

  '&:focus': {
    borderColor: '$purple100',
  },
})

const showAndHidden = keyframes({
  '0%': { opacity: 100 },
  '25%': { opacity: 0 },
  '50%': { opacity: 100 },
  '75%': { opacity: 0 },
  '100%': { opacity: 100 },
})

export const SigningMessage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  animation: `${showAndHidden} 4s infinite`,

  span: {
    color: '$gray300',
    fontWeight: '$bold',
  },

  strong: {
    letterSpacing: 10,
    marginLeft: '$3',
  },
})
