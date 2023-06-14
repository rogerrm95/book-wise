import { styled } from '@stitches/react'
import Link from 'next/link'

export const MenuContainer = styled('aside', {
  backgroundImage: 'url(/images/menu-background.png)',
  backgroundRepeat: 'no-repeat',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '$6 $2',
  borderRadius: '$md',

  maxHeight: '900px',
  height: '100%',
})

export const MenuList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '$4',

  marginTop: '4rem',
})

export const MenuLink = styled(Link, {
  display: 'flex',
  gap: '$3',
  padding: '$1',

  textAlign: 'left',
  color: '$gray400',
  position: 'relative',

  cursor: 'pointer',
  transition: 'all 0.3s',

  '&.active': {
    fontWeight: 700,
    color: '$gray100',

    '&::before': {
      content: '',
      height: '24px',
      width: '4px',
      position: 'absolute',
      marginLeft: '-$4',

      borderRadius: '9999px',
      background: '$gradient-vertical',
    },
  },

  '&:hover': {
    transform: 'scale(1.05)',
  },
})

export const MenuSignInButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  gap: '$3',
  marginTop: 'auto',
  padding: '$1',

  fontWeight: 700,
  color: '$gray200',

  cursor: 'pointer',
  transition: 'all 0.3s',

  '&:hover': {
    transform: 'scale(1.05)',

    color: '$gray100',
    backgroundClip: 'text',
    backgroundImage: '$gradient-horizontal',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },
})

export const MenuSignOutButton = styled('button', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$3',
  marginTop: 'auto',

  cursor: 'pointer',
  transition: 'opacity 0.3s',

  '&:hover': {
    opacity: 0.7,
  },

  span: {
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 1,
    whiteSpace: 'pre-wrap',
    textAlign: 'center',
    maxWidth: '128px',

    fontSize: '$sm',
    color: '$gray200',
  },
})
