import { styled } from '@stitches/react'

import { RatingContainer } from '@/components/Rating/styles'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '232px 1fr',

  gap: '5rem',
  padding: '$5',
  maxWidth: '1440px',
  margin: 'auto',
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
})

export const ReviewSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  maxWidth: '624px',
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

  span: {
    color: '$gray300',
    fontSize: '$sm',
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

export const ProfileBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$8',
  width: '100%',

  paddingLeft: '$2',
  borderLeft: '1px solid $colors$gray700',

  hr: {
    border: 'none',
    height: '4px',
    width: '32px',
    background: '$gradient-horizontal',
    borderRadius: '$full',
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
