import { keyframes, styled } from '@stitches/react'

import { RatingContainer } from '@/components/Rating/styles'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '232px 1fr',

  gap: '5rem',
  padding: '$5',
  maxWidth: '1440px',
  margin: 'auto',

  // Laptop  //
  '@media(max-width: 992px)': {
    gridTemplateColumns: '1fr',
    gap: '1rem',
  },
})

export const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',

  paddingTop: '3rem',
  paddingRight: '1rem',
})

export const Content = styled('div', {
  display: 'flex',
  gap: '4rem',
  marginBottom: '$10',

  // MOBILE  //
  '@media(max-width: 600px)': {
    flexDirection: 'column-reverse',
    gap: '2rem',
  },
})

export const ReviewSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  maxWidth: '624px',
  flex: 2,
})

export const ReviewsList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
})

export const ReviewItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  '& > span': {
    color: '$gray300',
    fontSize: '$sm',
  },

  '& > span::first-letter': {
    textTransform: 'uppercase',
  },
})

export const ReviewBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  padding: '$6',

  backgroundColor: '$gray700',
  borderRadius: '$md',
})

export const BookInfo = styled('div', {
  display: 'flex',
  gap: '$6',
})

export const BookDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h2: {
    fontWeight: '$bold',
    fontSize: '$lg',
  },

  span: {
    fontSize: '$sm',
    color: '$gray400',
  },

  [`> ${RatingContainer}`]: {
    marginTop: 'auto',
  },
})

export const BookReview = styled('p', {
  textAlign: 'justify',
  color: '$gray300',
  lineHeight: '$tall',
})

// PERFIL //
export const ProfileSection = styled('div', {
  flex: 1,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$8',

  width: '100%',
  maxHeight: '600px',
  height: '100vh',

  paddingLeft: '$2',
  borderLeft: '1px solid $colors$gray700',

  hr: {
    border: 'none',
    height: '4px',
    width: '32px',
    background: '$gradient-horizontal',
    borderRadius: '$full',
  },

  // MOBILE //
  '@media(max-width: 600px)': {
    borderLeft: 'none',
    borderBottom: '1px solid $colors$gray700',
    paddingBottom: '$4',
  },
})

export const ProfileHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  textAlign: 'center',

  h2: {
    marginTop: '$5',
    fontSize: '$xl',

    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 1,
    whiteSpace: 'pre-wrap',
  },

  span: {
    color: '$gray400',
    fontSize: '$sm',
  },
})

export const ProfileStatus = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  padding: '$4 0',
})

export const StatusItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  svg: {
    color: '$green100',
  },
})

export const StatusDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  span: {
    color: '$gray400',
    fontSize: '$sm',
  },
})

export const EmptyResults = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '$6',
  padding: '$5 $6',

  textAlign: 'center',
  color: '$gray400',
  fontSize: '$sm',

  backgroundColor: '$gray600',
  borderRadius: '$md',
  border: '1px solid $colors$gray600',
  transition: 'all 0.2s',

  '&:hover': {
    borderColor: '$gray500',
    boxShadow: '0px 0px 8px 1px $colors$gray600',
  },
})

const loadingAnimation = keyframes({
  '0%': {
    opacity: 0.25,
    transform: 'rotate(0deg)',
  },
  '100%': {
    opacity: 1,
    transform: 'rotate(360deg)',
  },
})

export const LoadingSpinner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$3',

  margin: 'auto',
  fontSize: '$sm',
  color: '$gray300',

  svg: {
    animation: `${loadingAnimation} 3s infinite 0s`,
  },
})
