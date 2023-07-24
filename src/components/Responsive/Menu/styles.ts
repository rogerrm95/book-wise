import { keyframes, styled } from '@stitches/react'
import Link from 'next/link'

// KEYFRAMES //
const showIn = keyframes({
  '0%': {
    opacity: 0,
  },
  '50%': {
    opacity: 50,
  },
  '100%': {
    opacity: 100,
  },
})

export const MenuContainer = styled('aside', {
  display: 'none',

  // ENABLE ONLY DEVICES WITH 992PX OR LESS //
  '@media(max-width: 992px)': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: '$6',
    gap: '$6',

    borderRadius: '$sm',
    backgroundImage: 'url(/images/menu-responsive-background.png)',
    backgroundRepeat: 'no-repeat',

    hr: {
      width: '100%',
      height: '1px',
      border: 'none',
      backgroundColor: '$gray500',
    },
  },
})

// MOBILE ELEMENTS //
export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
})

export const HamburguerButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$2',

  backgroundColor: '$gray500',
  borderRadius: '$sm',
  cursor: 'pointer',

  transition: 'all 0.3s',

  '&:hover': {
    opacity: 0.8,
    transform: 'scale(1.1)',
  },

  svg: {
    color: '$gray100',
  },
})

export const NavList = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$4',
  gap: '$6',

  '&.menu-open': {
    animation: `${showIn} 1.3s ease-in`,
  },
})

export const NavLink = styled(Link, {
  display: 'flex',
  gap: '$3',
  padding: '$1',

  width: '100%',

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

  '&:last-child:hover': {
    color: '$red500',
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

  '@media(max-width: 992px)': {
    display: 'none',
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

  '@media(max-width: 992px)': {
    display: 'none',
  },
})
