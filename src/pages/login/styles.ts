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
})

export const LoginForm = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  header: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },

  h2: {
    fontSize: '$xl',
    fontWeight: 700,
  },

  span: {
    fontSize: '$md',
  },
})

export const ActionsButtons = styled('div', {
  marginTop: '$10',

  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

export const LoginButton = styled('button', {
  backgroundColor: '$gray600',
  borderRadius: '$md',

  padding: '$5 $6',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',
})
